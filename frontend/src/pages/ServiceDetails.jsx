import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAllServices } from "../services/serviceService";

import BookingCard from "../components/booking/BookingCard";
import BookingForm from "../components/booking/BookingForm";

import ServiceOverview from "../components/service/ServiceOverview";
import ServiceFeatures from "../components/service/ServiceFeatures";
import ReviewSection from "../components/service/ReviewSection";
import SimilarServices from "../components/service/SimilarServices";
import FAQSection from "../components/service/FAQSection";

import "../styles/serviceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [slug]);

  const loadService = async () => {
    try {
      const res = await getAllServices();

      if (res.data.success) {
        const foundService = res.data.services.find(
          (item) => item.slug === slug
        );

        setService(foundService || null);
      }
    } catch (error) {
      console.error("Failed to load service:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="service-details">
        <h2>Loading service...</h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-details">
        <h1>Service Not Found</h1>

        <Link to="/services" className="back-btn">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-details">
      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>

      <div className="booking-layout">
        <div>
          <BookingCard service={service} />
        </div>

        <div>
          <BookingForm service={service} />
        </div>
      </div>

      <ServiceOverview service={service} />

      <ServiceFeatures />

      <ReviewSection service={service} />

      <SimilarServices service={service} />

      <FAQSection />
    </div>
  );
}

export default ServiceDetails;