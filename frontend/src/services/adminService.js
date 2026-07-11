import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/admin",
});

export const getDashboardStats = () => API.get("/dashboard");
