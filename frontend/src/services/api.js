import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Debug every response
API.interceptors.response.use(
  (response) => {
    console.log("========== API RESPONSE ==========");
    console.log("URL:", response.config.url);
    console.log("Data:", response.data);
    return response;
  },
  (error) => {
    console.error("========== API ERROR ==========");
    console.error(error);

    return Promise.reject(error);
  }
);

export default API;