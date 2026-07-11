import React, { useState, useEffect } from "react";

function ProviderForm({
  initialData = {},
  onSubmit,
  loading = false,
  buttonText = "Save Provider",
}) {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    status: "Active",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        service: initialData.service || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        address: initialData.address || "",
        experience: initialData.experience || "",
        status: initialData.status || "Active",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="provider-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Provider Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="service"
        placeholder="Service"
        value={formData.service}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        type="number"
        name="experience"
        placeholder="Experience (Years)"
        value={formData.experience}
        onChange={handleChange}
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : buttonText}
      </button>
    </form>
  );
}

export default ProviderForm;