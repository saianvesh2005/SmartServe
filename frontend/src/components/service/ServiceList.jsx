import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceList({ services }) {
  if (!services || services.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          fontSize: "20px",
          color: "#666",
        }}
      >
        No Services Found
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}

export default ServiceList;