import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";

import {
  getServiceById,
  updateService,
} from "../../services/serviceService";

function EditService() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [service, setService] = useState({
    name: "",
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

  useEffect(() => {
    loadService();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setService((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    // ==========================
  // Load Service Details
  // ==========================
  const loadService = async () => {
    try {
      setLoading(true);

      const res = await getServiceById(id);

      if (res.data.success) {
        setService({
          name: res.data.service.name || "",
          category: res.data.service.category || "",
          description: res.data.service.description || "",
          price: res.data.service.price || "",
          providerName: res.data.service.providerName || "",
          phone: res.data.service.phone || "",
          location: res.data.service.location || "",
          image: res.data.service.image || "",
          rating: res.data.service.rating || 5,
          isAvailable: res.data.service.isAvailable,
        });
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Unable to load service.");
    }
  };

  // ==========================
  // Update Service
  // ==========================
  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await updateService(id, service);

      if (res.data.success) {
        alert("✅ Service updated successfully");

        navigate("/admin/services");
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("❌ Failed to update service.");
    }
  };
    return (
    <AdminLayout>
      <div className="form-container">

        <h2>Edit Service</h2>

        <form onSubmit={updateHandler}>

          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              name="name"
              value={service.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={service.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option>Home Services</option>
              <option>Cleaning</option>
              <option>Appliance</option>
              <option>Vehicle</option>
              <option>Beauty</option>
              <option>Electronics</option>
              <option>Security</option>
              <option>Moving</option>
              <option>Fitness</option>
              <option>Education</option>
              <option>Construction</option>
              <option>Outdoor</option>
              <option>Pets</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Events</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={service.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Price (₹)</label>

            <input
              type="number"
              name="price"
              value={service.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Provider Name</label>

            <input
              type="text"
              name="providerName"
              value={service.providerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={service.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={service.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>

            <input
              type="text"
              name="image"
              value={service.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>

            <input
              type="number"
              step="0.1"
              min="1"
              max="5"
              name="rating"
              value={service.rating}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Available</label>

            <select
              name="isAvailable"
              value={service.isAvailable}
              onChange={(e) =>
                setService({
                  ...service,
                  isAvailable:
                    e.target.value === "true",
                })
              }
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            <button
              type="submit"
              className="primary-btn"
            >
              {loading
                ? "Updating..."
                : "Update Service"}
            </button>

            <button
              type="button"
              className="danger-btn"
              onClick={() =>
                navigate("/admin/services")
              }
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
          </AdminLayout>
  );
}

export default EditService;