import API from "./api";

// ===============================
// Get All Reviews
// ===============================
export const getAllReviews = () => {
  return API.get("/reviews");
};

// ===============================
// Get Reviews of a Particular Service
// ===============================
export const getServiceReviews = (serviceId) => {
  return API.get(`/reviews/service/${serviceId}`);
};

// ===============================
// Get Single Review
// ===============================
export const getReviewById = (id) => {
  return API.get(`/reviews/${id}`);
};

// ===============================
// Add Review
// ===============================
export const addReview = (data) => {
  return API.post("/reviews", data);
};

// ===============================
// Create Review (Alias)
// ===============================
export const createReview = (data) => {
  return API.post("/reviews", data);
};

// ===============================
// Delete Review
// ===============================
export const deleteReview = (id) => {
  return API.delete(`/reviews/${id}`);
};