import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";

import {
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint,
} from "../../services/complaintService";

function ManageComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadComplaints();
  }, []);

  useEffect(() => {
    const data = complaints.filter(
      (complaint) =>
        complaint.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        complaint.service
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

    setFiltered(data);
  }, [search, complaints]);

  const loadComplaints = async () => {
    try {
      const res = await getAllComplaints();

      setComplaints(res.data.complaints || []);
      setFiltered(res.data.complaints || []);
    } catch (error) {
      console.log(error);
    }
  };

  const resolveComplaint = async (id) => {
    try {
      await updateComplaintStatus(id, {
        status: "Resolved",
      });

      loadComplaints();
    } catch (error) {
      console.log(error);
    }
  };

  const removeComplaint = async (id) => {
    if (!window.confirm("Delete Complaint?")) return;

    try {
      await deleteComplaint(id);

      loadComplaints();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>

      <h2 style={{ marginBottom: 20 }}>
        Complaint Management
      </h2>

      <div
        className="admin-search"
        style={{ marginBottom: 20 }}
      >
        <FaSearch />

        <input
          type="text"
          placeholder="Search complaint..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="admin-table">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Service</th>

              <th>Issue</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Complaints Found
                </td>

              </tr>

            ) : (

              filtered.map((complaint) => (

                <tr key={complaint._id}>

                  <td>{complaint.name}</td>

                  <td>{complaint.service}</td>

                  <td>{complaint.issue}</td>

                  <td>{complaint.status}</td>

                  <td>

                    <button
                      className="primary-btn"
                      style={{
                        marginRight: 10,
                      }}
                      onClick={() =>
                        resolveComplaint(
                          complaint._id
                        )
                      }
                    >
                      <FaCheckCircle />
                    </button>

                    <button
                      className="danger-btn"
                      onClick={() =>
                        removeComplaint(
                          complaint._id
                        )
                      }
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default ManageComplaints;