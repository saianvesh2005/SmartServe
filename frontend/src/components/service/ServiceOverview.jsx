import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import "../../styles/service.css";

function ServiceOverview({ service }) {
  return (
    <section className="service-overview">

      <h2>About this Service</h2>

      <p className="overview-description">
        {service.description}
      </p>

      <div className="overview-grid">

        <div className="overview-box">
          <FaCheckCircle className="overview-icon" />
          <div>
            <h4>Verified Professionals</h4>
            <p>
              All service providers are background
              verified and experienced.
            </p>
          </div>
        </div>

        <div className="overview-box">
          <FaClock className="overview-icon" />
          <div>
            <h4>Quick Service</h4>
            <p>
              Average service completion within
              {` ${service.duration}`}.
            </p>
          </div>
        </div>

        <div className="overview-box">
          <FaShieldAlt className="overview-icon" />
          <div>
            <h4>Secure Booking</h4>
            <p>
              Safe online booking with trusted
              professionals.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ServiceOverview;