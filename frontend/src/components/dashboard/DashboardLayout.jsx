import React, { useState } from "react";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="dashboard-layout">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div
        className="dashboard-content"
        style={{
          marginLeft: open ? "280px" : "0",
          transition: "all .35s ease",
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;