import "../../styles/service.css";

function CategoryCard({
  title,
  icon,
  active,
  onClick,
}) {
  return (
    <div
      className={`category-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;