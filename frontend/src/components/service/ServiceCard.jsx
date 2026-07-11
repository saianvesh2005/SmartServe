import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import "../../styles/service.css";

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />

      <div className="service-content">
        <h3>{service.name}</h3>

        <p className="service-category">
          {service.category}
        </p>

        <RatingStars rating={service.rating} />

        <h2 className="service-price">
          ₹{service.price}
        </h2>

        <Link
          className="service-btn"
          to={`/services/${service.slug}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;