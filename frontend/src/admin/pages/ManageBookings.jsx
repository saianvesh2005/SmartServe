import React, { useEffect, useState } from "react";
import AdminLayout from "../components/layout/AdminLayout";

import {
  FaSearch,
  FaEye,
  FaCheck,
  FaClipboardCheck,
  FaTimes,
} from "react-icons/fa";

import {
  getAllBookings,
  updateBookingStatus,
} from "../../services/bookingService";

function ManageBookings() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

const loadBookings = async () => {
  try {
    setLoading(true);

    const res = await getAllBookings();

    console.log("========== BOOKINGS API ==========");
    console.log("Full Response:", res);
    console.log("Response Data:", res.data);
    console.log("Bookings:", res.data.bookings);

    setBookings(res.data.bookings || []);

  } catch (error) {

    console.error("========== BOOKINGS ERROR ==========");
    console.error(error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);
    } else {
      console.log("No response from server");
    }

  } finally {

    setLoading(false);

  }
};

  const updateStatus = async (id, status) => {

    try {

      await updateBookingStatus(id, status);

      loadBookings();

    } catch (error) {

      console.error(error);

    }

  };

  const filteredBookings = bookings.filter((booking) =>
    booking.customerName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <AdminLayout>

      <div className="page-container">

        <h1 className="page-title">

          Booking Management

        </h1>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="table-container">

          <table className="dashboard-table">

            <thead>

              <tr>

                <th>Customer</th>

                <th>Service</th>

                <th>Price</th>

                <th>Date</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td colSpan="6">

                    Loading Bookings...

                  </td>

                </tr>

              ) : filteredBookings.length === 0 ? (

                <tr>

                  <td colSpan="6">

                    No Bookings Found

                  </td>

                </tr>

              ) : (

                filteredBookings.map((booking) => {

                  const bookingId = booking._id;

                  const customer = booking.customerName;

                  const service = booking.serviceName;

                  const amount = booking.servicePrice;

                  const date = booking.bookingDate;

                  const status = booking.status;
                                    return (

                    <tr key={bookingId}>

                      <td className="customer-name">
                        {customer}
                      </td>

                      <td>{service}</td>

                      <td>₹{amount}</td>

                      <td>{date}</td>

                      <td>

                        <span
                          className={status.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {status}
                        </span>

                      </td>

                      <td>

                        <div className="action-buttons">

                          {/* View */}

                          <button
                            className="action-btn btn-view"
                            title="View Booking"
                            onClick={() => {
                              alert(
                                `Customer : ${customer}
Service : ${service}
Price : ₹${amount}
Date : ${date}
Status : ${status}`
                              );
                            }}
                          >
                            <FaEye />
                          </button>

                          {/* Confirm */}

                          <button
                            className="action-btn btn-accept"
                            title="Confirm Booking"
                            disabled={status === "Confirmed"}
                            onClick={() =>
                              updateStatus(
                                bookingId,
                                "Confirmed"
                              )
                            }
                          >
                            <FaCheck />
                          </button>

                          {/* Complete */}

                          <button
                            className="action-btn btn-complete"
                            title="Complete Booking"
                            disabled={status === "Completed"}
                            onClick={() =>
                              updateStatus(
                                bookingId,
                                "Completed"
                              )
                            }
                          >
                            <FaClipboardCheck />
                          </button>

                          {/* Cancel */}

                          <button
                            className="action-btn btn-reject"
                            title="Cancel Booking"
                            disabled={status === "Cancelled"}
                            onClick={() =>
                              updateStatus(
                                bookingId,
                                "Cancelled"
                              )
                            }
                          >
                            <FaTimes />
                          </button>

                        </div>

                      </td>

                    </tr>

                  );

                })

              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );

}

export default ManageBookings;