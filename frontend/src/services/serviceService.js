import API from "./api";

// Get all services
export const getAllServices = () => API.get("/services");

// Get one service
export const getServiceById = (id) =>
  API.get(`/services/${id}`);

// Get service by slug
export const getServiceBySlug = (slug) =>
  API.get(`/services/slug/${slug}`);

// Search services
export const searchServices = (category) =>
  API.get(`/services/search?category=${category}`);

// Add service
export const createService = (data) =>
  API.post("/services", data);

// Update service
export const updateService = (id, data) =>
  API.put(`/services/${id}`, data);

// Delete service
export const deleteService = (id) =>
  API.delete(`/services/${id}`);