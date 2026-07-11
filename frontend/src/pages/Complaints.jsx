import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../components/dashboard/DashboardLayout";

import {
  createComplaint,
  getAllComplaints,
} from "../services/complaintService";

function Complaints() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [complaint, setComplaint] = useState({
    customerName: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    serviceName: "",
    subject: "",
    description: "",
    priority: "Medium",
  });

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      const res = await getAllComplaints();

      setComplaints(res.data.complaints || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setComplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComplaint(complaint);

      toast.success("Complaint Submitted Successfully");

      setComplaint({
        customerName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        serviceName: "",
        subject: "",
        description: "",
        priority: "Medium",
      });

      loadComplaints();
    } catch (err) {
      console.log(err);
      toast.error("Unable to submit complaint");
    }
  };

  return (
    <DashboardLayout>
      <div className="page-container">

        <h1>Complaint Management</h1>

        <form
          className="complaint-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="serviceName"
            placeholder="Service Name"
            value={complaint.serviceName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Complaint Subject"
            value={complaint.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Describe your issue..."
            value={complaint.description}
            onChange={handleChange}
            required
          />

          <select
            name="priority"
            value={complaint.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button type="submit">
            Submit Complaint
          </button>

        </form>

        <h2 style={{ marginTop: 40 }}>
          Complaint History
        </h2>

        <div className="complaints-grid">

          {complaints.map((item) => (

            <div
              className="complaint-card"
              key={item._id}
            >

              <h3>{item.serviceName}</h3>

              <p>
                <strong>Subject:</strong>{" "}
                {item.subject}
              </p>

              <p>{item.description}</p>

              <p>
                <strong>Priority:</strong>{" "}
                {item.priority}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      item.status === "Resolved"
                        ? "green"
                        : item.status === "Pending"
                        ? "orange"
                        : "blue",
                    fontWeight: "bold",
                  }}
                >
                  {item.status}
                </span>
              </p>

            </div>

          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Complaints;