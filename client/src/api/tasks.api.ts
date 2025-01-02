import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = async () => {
  const response = await tasksApi.get("/");
  return response.data;
};

export const createTask = async (task) => {
  const response = await tasksApi.post("/", task);
  return response.data;
};

export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
