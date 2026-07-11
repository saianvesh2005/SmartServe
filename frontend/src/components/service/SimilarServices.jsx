import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";
import "../../styles/service.css";

function SimilarServices({ service }) {

  const similar = services
    .filter((item) => item.id !== service.id)
    .slice(0, 4);

  return (
    <section className="similar-services">

      <h2>Similar Services</h2>

      <div className="similar-grid">

        {similar.map((item) => (

          <div
            className="similar-card"
            key={item.id}
          >

            <span className="popular-badge">
              ⭐ Popular
            </span>

            <div className="wishlist-btn">
              ❤
            </div>

            <img
              src={item.image}
              alt={item.name}
            />

            <div className="service-content">

              <h3>{item.name}</h3>

              <div className="similar-rating">
                ⭐⭐⭐⭐⭐ ({item.rating})
              </div>

              <div className="service-category">
                {item.category}
              </div>

              <div className="similar-price">
                ₹{item.price}
              </div>

              <Link
                to={`/service/${item.slug}`}
                className="similar-btn"
              >
                View Details →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default SimilarServices;