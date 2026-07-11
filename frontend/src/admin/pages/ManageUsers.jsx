import React, { useEffect, useState } from "react";
import { FaSearch, FaTrash, FaUserShield } from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";
import {
  getAllUsers,
  deleteUser,
} from "../../services/userService";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    const data = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(data);
  }, [search, users]);

  const loadUsers = async () => {
    try {
      const res = await getAllUsers();

      setUsers(res.data.users || []);
      setFiltered(res.data.users || []);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);

      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>

      <h2 style={{ marginBottom: "20px" }}>
        User Management
      </h2>

      <div
        className="admin-search"
        style={{ marginBottom: "20px" }}
      >
        <FaSearch />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="admin-table">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filtered.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  style={{ textAlign: "center" }}
                >
                  No Users Found
                </td>

              </tr>

            ) : (

              filtered.map((user) => (

                <tr key={user._id}>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone || "-"}</td>

                  <td>

                    <span
                      style={{
                        color:
                          user.role === "admin"
                            ? "#2563eb"
                            : "#16a34a",
                        fontWeight: "600",
                      }}
                    >
                      <FaUserShield /> {user.role}
                    </span>

                  </td>

                  <td>

                    <button
                      className="danger-btn"
                      onClick={() => removeUser(user._id)}
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

export default ManageUsers;