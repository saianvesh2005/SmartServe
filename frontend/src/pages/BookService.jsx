import React, { useState } from "react";

function BookService() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Service Booked Successfully!");

    setFormData({
      name: "",
      phone: "",
      service: "",
      address: "",
      date: "",
    });
  };

  return (
    <div className="page-container">
      <h1>Book a Service</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Electrician">Electrician</option>
          <option value="Plumber">Plumber</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Painter">Painter</option>
          <option value="Mechanic">Mechanic</option>
          <option value="Computer Repair">Computer Repair</option>
        </select>

        <textarea
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookService;