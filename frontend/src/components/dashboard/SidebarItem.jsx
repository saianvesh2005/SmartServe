import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ icon, text, link }) {
  return (
    <Link to={link} className="sidebar-item">
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

export default SidebarItem;