# 🚀 SmartServe

![React](https://img.shields.io/badge/Frontend-React-blue)
![Vite](https://img.shields.io/badge/Build-Vite-purple)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

## Local Service Booking Platform

SmartServe is a full-stack MERN application that connects customers with trusted local service providers. It enables users to discover services, book appointments, manage bookings, maintain wishlists, submit complaints, and receive notifications. Providers can manage their services and bookings through a dedicated dashboard, while administrators oversee platform operations.

---

# 📖 Table of Contents

- About
- Features
- Tech Stack
- Modules
- Project Structure
- Installation
- Environment Variables
- API Modules
- Screens
- Future Enhancements
- Developer

---

# 📌 About

SmartServe simplifies the process of finding and booking local services such as:

- Electricians
- Plumbers
- Carpenters
- AC Technicians
- Cleaners
- Painters
- Other Local Professionals

The application supports three major roles:

- Customer
- Service Provider
- Administrator

---

# ✨ Features

## 👤 Customer

- Secure Registration & Login
- JWT Authentication
- Browse Available Services
- View Service Details
- Search Services
- Book Services
- Booking History
- Booking Status Tracking
- Wishlist Management
- Submit Reviews & Ratings
- Raise Complaints
- Notification Center
- Profile Management

---

## 👨‍🔧 Provider

- Provider Dashboard
- Service Management
- View Customer Bookings
- Update Booking Status
- Profile Management

---

## 👨‍💼 Administrator

- Admin Dashboard
- User Management
- Provider Management
- Service Management
- Booking Monitoring
- Complaint Management

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Framer Motion
- React Toastify
- React Icons
- Swiper
- Chart.js
- Recharts
- React Datepicker
- Lottie React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

## Database

- MongoDB Atlas

---

# 📦 Major Modules

- Authentication
- User Management
- Provider Management
- Admin Management
- Service Management
- Booking Management
- Wishlist
- Reviews & Ratings
- Complaint Management
- Notification System
- Booking Tracking

---

# 📂 Project Structure

```text
SmartServe
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── utils
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── package.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/saianvesh2005/SmartServe.git
```

## Backend

```bash
cd SmartServe/backend

npm install

npm run dev
```

## Frontend

```bash
cd ../frontend

npm install

npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

# 📡 API Modules

The backend currently includes APIs for:

- Authentication
- Users
- Services
- Bookings
- Providers
- Reviews
- Wishlist
- Complaints
- Notifications
- Admin

---

# 🖥️ Application Screens

The project currently includes the following pages:

### Public Pages

- Home
- About
- Contact
- Login
- Register

### Service Pages

- Services
- Service Details
- Book Service

### Booking Pages

- Booking Details
- Booking History
- Booking Status
- Pending Bookings
- Completed Bookings
- Total Bookings

### User Pages

- User Dashboard
- Profile
- Wishlist

### Provider Pages

- Provider Dashboard

### Additional Pages

- Complaints

---

# 🚀 Future Enhancements

- Online Payment Integration
- Google Maps Integration
- Live Chat
- Email Notifications
- SMS Alerts
- AI Service Recommendations
- Invoice Generation
- Coupon & Offers
- Mobile Application
- Multi-language Support

---

# 📸 Screenshots

Screenshots of the following modules will be added in future updates:

- 🏠 Home Page
- 🔐 Login Page
- 📝 Registration Page
- 🛠️ Services Page
- 📄 Service Details
- 📅 Booking Page
- 📚 Booking History
- 👤 User Dashboard
- 👨‍🔧 Provider Dashboard
- ❤️ Wishlist
- 📢 Complaints
- 👤 Profile

---

# 👨‍💻 Developer

**Sai Anvesh Reddy**

**B.Tech – Computer Science & Engineering**

GitHub:  
https://github.com/saianvesh2005

---

# 📄 License

This project is intended for educational and learning purposes.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

**SmartServe — Making Local Service Booking Simple, Fast, and Reliable.**