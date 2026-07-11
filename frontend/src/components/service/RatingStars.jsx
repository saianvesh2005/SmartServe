import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function RatingStars({ rating = 0 }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#f59e0b" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#f59e0b" />);
    } else {
      stars.push(<FaRegStar key={i} color="#f59e0b" />);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {stars}
      <span
        style={{
          marginLeft: "8px",
          fontWeight: "600",
          color: "#555",
        }}
      >
        {rating}
      </span>
    </div>
  );
}

export default RatingStars;