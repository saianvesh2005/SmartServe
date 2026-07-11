import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

import "../../styles/admin.css";

function AdminLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (

    <div className="admin-layout">

      {/* Sidebar */}

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main */}

      <div
        className={
          sidebarOpen
            ? "admin-main"
            : "admin-main expanded"
        }
      >

        {/* Navbar */}

        <AdminNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Content */}

        <main className="admin-content">

          <div className="content-container">

            {children}

          </div>

        </main>

      </div>

    </div>

  );

}

export default AdminLayout;