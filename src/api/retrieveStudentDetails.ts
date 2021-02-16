import axios from "axios";

/**
 * 
 * @param studentId 
 * returns studentDetails as a JSON object 
 */

const retrieveFile = async (studentId: string) => {   
  
  const endPoint = `http://localhost:8080/api/v1/download/${studentId}`

  //make the axios call 
  const studentDetails = await axios.get(endPoint);
  return studentDetails.data; 
}; 
  
export default retrieveFile;