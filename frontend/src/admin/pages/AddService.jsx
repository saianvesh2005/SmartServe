import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import { createService } from "../../services/serviceService";

function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    description: "",
    price: "",
    providerName: "",
    phone: "",
    location: "",
    image: "",
    rating: 5,
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        ...formData,
        slug:
          formData.slug ||
          formData.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
      };

      await createService(data);

      alert("✅ Service Added Successfully");

      navigate("/admin/services");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add service");
    }
  };

  return (
    <AdminLayout>
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Add New Service</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Provider Name</label>
            <input
              type="text"
              name="providerName"
              required
              value={formData.providerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px",
            }}
          >
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
            />

            <label>Available</label>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <button className="primary-btn" type="submit">
              Add Service
            </button>

            <button
              type="button"
              className="danger-btn"
              onClick={() => navigate("/admin/services")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddService;