import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";
import {
  getAllServices,
  deleteService,
} from "../../services/serviceService";

function ManageServices() {
  console.log("✅ ManageServices Component Loaded");

  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

console.log("services =", services);
console.log("filtered =", filtered);

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    const data = services.filter((service) =>
      service.name?.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(data);
  }, [search, services]);

const loadServices = async () => {
  try {
    const res = await getAllServices();

    console.log("Full Response:", res.data);
    console.log("Services Array:", res.data.services);
    console.log("Is Array:", Array.isArray(res.data.services));

    const serviceList = Array.isArray(res.data.services)
      ? res.data.services
      : [];

    setServices(serviceList);
    setFiltered(serviceList);
  } catch (err) {
    console.error(err);
  }
};

  const removeService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await deleteService(id);

      alert("Service deleted successfully.");

      loadServices();
    } catch (error) {
      console.log(error);
      alert("Unable to delete service.");
    }
  };

  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h2>Service Management</h2>

        <button
          className="primary-btn"
          onClick={() => navigate("/admin/services/add")}
        >
          <FaPlus /> Add Service
        </button>
      </div>

      <div
        className="admin-search"
        style={{ marginBottom: "25px" }}
      >
        <FaSearch />

        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Provider</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((service) => (
                <tr key={service._id}>
                  <td>
                    <img
                      src={
                        service.image ||
                        "https://via.placeholder.com/60"
                      }
                      alt={service.name}
                      width="60"
                      height="60"
                      style={{
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </td>

                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>₹{service.price}</td>
                  <td>⭐ {service.rating}</td>
                  <td>{service.providerName}</td>
                  <td>{service.location}</td>

                  <td>
                    <button
                      className="primary-btn"
                      style={{ marginRight: "10px" }}
                      onClick={() =>
                        navigate(`/admin/services/edit/${service._id}`)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="danger-btn"
                      onClick={() => removeService(service._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                >
                  No Services Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default ManageServices;