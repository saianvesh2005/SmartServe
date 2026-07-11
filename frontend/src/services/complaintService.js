import API from "./api";

// ===============================
// Get All Complaints
// ===============================
export const getAllComplaints = () => {
  return API.get("/complaints");
};

// ===============================
// Get Complaint By ID
// ===============================
export const getComplaintById = (id) => {
  return API.get(`/complaints/${id}`);
};

// ===============================
// Create Complaint
// ===============================
export const createComplaint = (data) => {
  return API.post("/complaints", data);
};

// ===============================
// Update Complaint Status
// ===============================
export const updateComplaintStatus = (id, data) => {
  return API.put(`/complaints/${id}`, data);
};

// ===============================
// Delete Complaint
// ===============================
export const deleteComplaint = (id) => {
  return API.delete(`/complaints/${id}`);
};