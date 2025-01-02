import axios from "axios";

export const getAllTasks = async()=> {
  const response =await axios.get('http://localhost:8000/tasks/api/v1/tasks/')
  return response.data
};
