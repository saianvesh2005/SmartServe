import API from "./api";

// Get All Notifications
export const getAllNotifications = () => {
  return API.get("/notifications");
};

// Get Notification
export const getNotificationById = (id) => {
  return API.get(`/notifications/${id}`);
};

// Create Notification
export const createNotification = (data) => {
  return API.post("/notifications", data);
};

// Delete Notification
export const deleteNotification = (id) => {
  return API.delete(`/notifications/${id}`);
};