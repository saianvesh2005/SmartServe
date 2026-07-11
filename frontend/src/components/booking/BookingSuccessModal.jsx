import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import "../../styles/booking.css";

function BookingSuccessModal({
  open,
  onClose,
  service,
  selectedDate,
  selectedSlot,
  gst,
  discount,
  total,
  paymentMethod,
}) {
  if (!open) return null;
const navigate = useNavigate();
  const bookingId =
    "BK" + Math.floor(100000 + Math.random() * 900000);

  return createPortal(
    <div className="modal-overlay">
      <div className="booking-modal">

        <h2>🎉 Booking Confirmed Successfully!</h2>

        <div className="booking-id">
          Booking ID: <strong>{bookingId}</strong>
        </div>

        <div className="modal-section">

          <h3>Booking Details</h3>

          <div className="modal-row">
            <strong>Service</strong>
            <span>{service?.name}</span>
          </div>

          <div className="modal-row">
            <strong>Date</strong>
            <span>{selectedDate?.toLocaleDateString()}</span>
          </div>

          <div className="modal-row">
            <strong>Time</strong>
            <span>{selectedSlot}</span>
          </div>

          <div className="modal-row">
            <strong>Service Price</strong>
            <span>₹{service?.price}</span>
          </div>

          <div className="modal-row">
            <strong>GST (18%)</strong>
            <span>₹{gst}</span>
          </div>

          <div className="modal-row">
            <strong>Discount</strong>
            <span>- ₹{discount}</span>
          </div>

          <div className="modal-row">
            <strong>Payment Method</strong>
            <span>{paymentMethod}</span>
          </div>

          <div className="modal-row">
            <strong>Total Amount</strong>
            <span><strong>₹{total}</strong></span>
          </div>

        </div>

        <div className="tech-card">

          <h4>👨 Technician Assigned</h4>

          <p><strong>Name:</strong> Rahul Sharma</p>

          <p><strong>Rating:</strong> ⭐ 4.9</p>

          <p><strong>Experience:</strong> 8 Years</p>

          <p><strong>Contact:</strong> +91 9876543210</p>

          <p><strong>Arrival:</strong> Within 30 Minutes</p>

        </div>

        <div className="modal-buttons">
<button
  className="track-btn"
  onClick={() => {
    onClose();
    navigate("/booking-status");
  }}
>
  Track Booking
</button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>
    </div>,
    document.body
  );
}

export default BookingSuccessModal;