import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/services.css";

function Services() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // ============================
  // Load Services from Backend
  // ============================
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/services"
      );

      if (res.data.success) {
        setServices(res.data.services);
        setFilteredServices(res.data.services);
      }
    } catch (error) {
      console.error("Failed to load services", error);
    }
  };

  // ============================
  // Search
  // ============================
  useEffect(() => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredServices(filtered);
  }, [search, services]);

  return (
    <>
      <section className="services-hero">
        <h1>Our Professional Services</h1>

        <p>Find trusted professionals for every household need.</p>

        <input
          type="text"
          className="service-search"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="services-container">
        {filteredServices.map((service) => (
          <div
            className="service-card"
            key={service._id}
          >
            <img
              src={service.image}
              alt={service.name}
            />

            <h3>{service.name}</h3>

            <p>{service.description}</p>

            <div className="price-rating">
              <span>₹{service.price}</span>

              <span>⭐ {service.rating}</span>
            </div>

            <button
              onClick={() =>
                navigate(`/service/${service.slug}`)
              }
            >
              Book Now
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;