import {
  FaUserCheck,
  FaShieldAlt,
  FaHeadset,
  FaMoneyCheckAlt,
  FaTools,
  FaAward,
} from "react-icons/fa";

import "../../styles/service.css";

function ServiceFeatures() {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Verified Professionals",
      description:
        "Every service provider is background verified and experienced.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Service Warranty",
      description:
        "Enjoy hassle-free service with quality assurance.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Dedicated support team to assist you anytime.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Affordable Pricing",
      description:
        "Transparent pricing with no hidden charges.",
    },
    {
      icon: <FaTools />,
      title: "Professional Equipment",
      description:
        "Experts use modern tools for better service quality.",
    },
    {
      icon: <FaAward />,
      title: "Highly Rated",
      description:
        "Thousands of happy customers trust SmartServe.",
    },
  ];

  return (
    <section className="service-features">

      <h2>Why Choose SmartServe?</h2>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-box" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ServiceFeatures;