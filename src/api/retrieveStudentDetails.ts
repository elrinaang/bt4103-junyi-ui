import axios from "axios";
import { environment } from '../environments/environmentDevelopment';

const API_ENDPOINT: string = environment.ApiEndpoint;

/**
 *
 * @param studentId
 * returns studentDetails as a JSON object
 */

const retrieveStudentDetails = async (studentId: number) => {

  const endPoint = `${API_ENDPOINT}/user/${studentId}`
  const studentDetails = await axios.get(endPoint);
  return studentDetails.data;
};

export default retrieveStudentDetails;


