import API from "./api";

export const addToWishlist = (data) => {
  return API.post("/wishlist", data);
};

export const getWishlist = (userId) => {
  return API.get(`/wishlist?userId=${userId}`);
};

export const removeWishlist = (id) => {
  return API.delete(`/wishlist/${id}`);
};

export const clearWishlist = (userId) => {
  return API.delete(`/wishlist/clear/${userId}`);
};