import "../../styles/booking.css";
import { FaStar, FaMapMarkerAlt, FaUserCheck, FaClock } from "react-icons/fa";

function BookingCard({ service }) {
  return (
    <div className="booking-card">

      <img
        src={service.image}
        alt={service.name}
        className="booking-image"
      />

      <div className="booking-info">

        <span className="verified-badge">
          <FaUserCheck /> Verified Professional
        </span>

        <h1>{service.name}</h1>

        <div className="booking-rating">
          <FaStar className="star-icon" />
          <span>{service.rating} / 5</span>
        </div>

        <h2 className="booking-price">
          ₹{service.price}
        </h2>

        <div className="booking-details">

          <p>
            <strong>Category:</strong> {service.category}
          </p>

          <p>
            <FaClock /> {service.duration}
          </p>

          <p>
            <FaMapMarkerAlt /> Available: {service.availability}
          </p>

        </div>

        <div className="booking-description">

          <h3>Description</h3>

          <p>{service.description}</p>

        </div>

      </div>

    </div>
  );
}

export default BookingCard;