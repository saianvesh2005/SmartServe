import React from "react";

function SummaryCard({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <div
      className="summary-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <div className="summary-left">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>

      <div
        className="summary-icon"
        style={{
          background: color,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default SummaryCard;