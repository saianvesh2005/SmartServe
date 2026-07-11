import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AdminLayout from "../components/layout/AdminLayout";

import {
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import {
  getAllProviders,
  deleteProvider,
} from "../../services/providerService";

function ManageProviders() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      setLoading(true);

      const res = await getAllProviders();

      setProviders(res.data.providers || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load providers");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this provider?")) return;

    try {
      await deleteProvider(id);

      toast.success("Provider deleted successfully");

      fetchProviders();
    } catch (error) {
      console.error(error);

      toast.error("Unable to delete provider");
    }
  };

  const filteredProviders = providers.filter((provider) =>
    provider.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="page-container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 className="page-title">
            Provider Management
          </h1>

          <Link
            to="/admin/providers/add"
            className="add-btn"
          >
            <FaPlus /> Add Provider
          </Link>
        </div>

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Provider..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-container">

          <table className="dashboard-table">

            <thead>

              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>
                  <td colSpan="6">
                    Loading...
                  </td>
                </tr>

              ) : filteredProviders.length === 0 ? (

                <tr>
                  <td colSpan="6">
                    No Providers Found
                  </td>
                </tr>

              ) : (

                filteredProviders.map((provider) => (

                  <tr key={provider._id}>

                    <td>{provider.name}</td>

                    <td>{provider.service}</td>

                    <td>{provider.email}</td>

                    <td>{provider.phone}</td>

                    <td>{provider.status}</td>

                    <td>

                      <div className="action-buttons">

                        <Link
                          to={`/admin/providers/${provider._id}`}
                          className="action-btn btn-view"
                        >
                          <FaEye />
                        </Link>

                        <Link
                          to={`/admin/providers/edit/${provider._id}`}
                          className="action-btn btn-edit"
                        >
                          <FaEdit />
                        </Link>

                        <button
                          className="action-btn btn-reject"
                          onClick={() =>
                            handleDelete(provider._id)
                          }
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default ManageProviders;