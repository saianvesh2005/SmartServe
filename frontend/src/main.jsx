import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { NotificationProvider } from "./context/NotificationContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthProvider>

        <BookingProvider>

          <NotificationProvider>

            <App />

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
            />

          </NotificationProvider>

        </BookingProvider>

      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);