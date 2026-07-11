import "./../../styles/dashboard.css";

function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stats-content">
        <h3>{title}</h3>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatsCard;