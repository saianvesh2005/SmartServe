import React from "react";

function ProviderCard({ provider }) {
  return (
    <div className="provider-card">
      <h3>{provider.name}</h3>

      <p>
        <strong>Service:</strong> {provider.service}
      </p>

      <p>
        <strong>Email:</strong> {provider.email}
      </p>

      <p>
        <strong>Phone:</strong> {provider.phone}
      </p>

      <p>
        <strong>Status:</strong> {provider.status}
      </p>
    </div>
  );
}

export default ProviderCard;