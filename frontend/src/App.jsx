import { Routes, Route, useLocation } from "react-router-dom";

// =======================
// Common Components
// =======================
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// =======================
// User Pages
// =======================
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

import UserDashboard from "./pages/UserDashboard";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import BookingHistory from "./pages/BookingHistory";
import Complaints from "./pages/Complaints";

import BookingStatusPage from "./pages/BookingStatusPage";
import TotalBookingsPage from "./pages/TotalBookingsPage";
import CompletedBookingsPage from "./pages/CompletedBookingsPage";
import PendingBookingsPage from "./pages/PendingBookingsPage";
import BookingDetails from "./pages/BookingDetails";

// =======================
// Admin Pages
// =======================
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";

import ManageUsers from "./admin/pages/ManageUsers";

import ManageServices from "./admin/pages/ManageServices";
import AddService from "./admin/pages/AddService";
import EditService from "./admin/pages/EditService";

import ManageProviders from "./admin/pages/ManageProviders";
import AddProvider from "./admin/pages/AddProvider";
import EditProvider from "./admin/pages/EditProvider";
import ProviderDetails from "./admin/pages/ProviderDetails";

import ManageBookings from "./admin/pages/ManageBookings";
import ManageComplaints from "./admin/pages/ManageComplaints";
import ManageReviews from "./admin/pages/ManageReviews";
import ManageNotifications from "./admin/pages/ManageNotifications";
import Reports from "./admin/pages/Reports";

function App() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>

        {/* ================= HOME ================= */}

        <Route path="/" element={<Home />} />

        {/* ================= SERVICES ================= */}

        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />

        {/* ================= AUTH ================= */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= USER DASHBOARD ================= */}

        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* ================= BOOKINGS ================= */}

        <Route
          path="/total-bookings"
          element={<TotalBookingsPage />}
        />

        <Route
          path="/completed-bookings"
          element={<CompletedBookingsPage />}
        />

        <Route
          path="/pending-bookings"
          element={<PendingBookingsPage />}
        />

        <Route
          path="/booking-history"
          element={<BookingHistory />}
        />

        <Route
          path="/booking-status"
          element={<BookingStatusPage />}
        />

        <Route
          path="/booking-details/:id"
          element={<BookingDetails />}
        />

        {/* ================= OTHER ================= */}

        <Route
          path="/complaints"
          element={<Complaints />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ================= ADMIN AUTH ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ================= ADMIN DASHBOARD ================= */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* ================= USERS ================= */}

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        {/* ================= SERVICES ================= */}

        <Route
          path="/admin/services"
          element={<ManageServices />}
        />

        <Route
          path="/admin/services/add"
          element={<AddService />}
        />

        <Route
          path="/admin/services/edit/:id"
          element={<EditService />}
        />

        {/* ================= PROVIDERS ================= */}

        <Route
          path="/admin/providers"
          element={<ManageProviders />}
        />

        <Route
          path="/admin/providers/add"
          element={<AddProvider />}
        />

        <Route
          path="/admin/providers/edit/:id"
          element={<EditProvider />}
        />

        <Route
          path="/admin/providers/:id"
          element={<ProviderDetails />}
        />

        {/* ================= BOOKINGS ================= */}

        <Route
          path="/admin/bookings"
          element={<ManageBookings />}
        />

        {/* ================= COMPLAINTS ================= */}

        <Route
          path="/admin/complaints"
          element={<ManageComplaints />}
        />

        {/* ================= REVIEWS ================= */}

        <Route
          path="/admin/reviews"
          element={<ManageReviews />}
        />

        {/* ================= NOTIFICATIONS ================= */}

        <Route
          path="/admin/notifications"
          element={<ManageNotifications />}
        />

        {/* ================= REPORTS ================= */}

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;

{/* SmartServe Main Application */}