import API from "./api";

// ===============================
// Get All Providers
// ===============================
export const getAllProviders = () => {
  return API.get("/providers");
};

// ===============================
// Get Provider By ID
// ===============================
export const getProviderById = (id) => {
  return API.get(`/providers/${id}`);
};

// ===============================
// Add Provider
// ===============================
export const addProvider = (data) => {
  return API.post("/providers", data);
};

// ===============================
// Update Provider
// ===============================
export const updateProvider = (id, data) => {
  return API.put(`/providers/${id}`, data);
};

// ===============================
// Delete Provider
// ===============================
export const deleteProvider = (id) => {
  return API.delete(`/providers/${id}`);
};