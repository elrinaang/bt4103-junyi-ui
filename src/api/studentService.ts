import axios from "axios";
import { environment } from '../environments/environmentDevelopment';

const API_ENDPOINT: string = environment.ApiEndpoint;

const getStudentDetail = async (studentId: number) => {
  const endPoint = `${API_ENDPOINT}/user/${studentId}`;
  const studentDetails = await axios.get(endPoint);
  return studentDetails.data;
};

const getStudents = async () => {
  const endPoint = `${API_ENDPOINT}/user`;
  const studentDetails = await axios.get(endPoint);
  return studentDetails.data;
};

const getStudentsByGroup = async (groupId: number) => {
  const endPoint = `${API_ENDPOINT}/group/${groupId}/students`;
  const studentDetails = await axios.get(endPoint);
  return studentDetails.data;
};

export {
  getStudentDetail,
  getStudents,
  getStudentsByGroup,
};
