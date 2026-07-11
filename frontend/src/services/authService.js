import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

// =============================
// Login
// =============================
export const login = (data) => {
  return API.post("/login", data);
};

// Alias (for old components)
export const loginUser = (data) => {
  return API.post("/login", data);
};

// =============================
// Register
// =============================
export const register = (data) => {
  return API.post("/register", data);
};

// Alias
export const registerUser = (data) => {
  return API.post("/register", data);
};

// =============================
// Get Logged-in User Profile
// =============================
export const getProfile = (token) => {
  return API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// =============================
// Logout
// =============================
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};