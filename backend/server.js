const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// ======================
// Connect Database
// ======================
connectDB();

const app = express();

// ======================
// Middlewares
// ======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// Import Routes
// ======================
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const providerRoutes = require("./routes/providerRoutes");

// ======================
// Home Route
// ======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 SmartServe Backend API is Running Successfully",
  });
});

// ======================
// API Routes
// ======================
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/complaints", complaintRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use("/api/reviews", reviewRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/providers", providerRoutes);

// ======================
// 404 Route
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// ======================
// Global Error Handler
// ======================
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("====================================");
  console.log("🚀 SmartServe Server Running");
  console.log(`🌐 Port : ${PORT}`);
  console.log(
    `📦 Environment : ${process.env.NODE_ENV || "development"}`
  );
  console.log("====================================");
});

