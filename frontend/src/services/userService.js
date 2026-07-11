import API from "./api";

// ===============================
// Get All Users (Admin)
// ===============================
export const getAllUsers = () => {
  return API.get("/users");
};

// ===============================
// Get User Profile
// ===============================
export const getProfile = (id) => {
  return API.get(`/users/profile/${id}`);
};

// ===============================
// Update Profile
// ===============================
export const updateProfile = (id, data) => {
  return API.put(`/users/profile/${id}`, data);
};

// ===============================
// Delete User
// ===============================
export const deleteUser = (id) => {
  return API.delete(`/users/${id}`);
};