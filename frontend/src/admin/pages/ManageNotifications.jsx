import React, { useEffect, useState } from "react";
import { FaBell, FaPaperPlane, FaTrash } from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";

import {
  getAllNotifications,
  createNotification,
  deleteNotification,
} from "../../services/notificationService";

function ManageNotifications() {

  const [notifications, setNotifications] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {

      const res = await getAllNotifications();

      setNotifications(res.data.notifications || []);

    } catch (error) {

      console.log(error);

    }
  };

  const sendNotification = async () => {

    if (!message.trim()) return;

    try {

      await createNotification({
        title: "SmartServe Notification",
        message,
      });

      setMessage("");

      loadNotifications();

    } catch (error) {

      console.log(error);

    }
  };

  const removeNotification = async (id) => {

    if (!window.confirm("Delete Notification?")) return;

    try {

      await deleteNotification(id);

      loadNotifications();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <AdminLayout>

      <h2 style={{ marginBottom: 25 }}>
        Notification Management
      </h2>

      <div className="dashboard-card">

        <textarea
          rows="4"
          placeholder="Write notification..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        <button
          className="primary-btn"
          onClick={sendNotification}
        >

          <FaPaperPlane />

          Send Notification

        </button>

      </div>

      <div className="admin-table">

        <table>

          <thead>

            <tr>

              <th>Title</th>

              <th>Message</th>

              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {notifications.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Notifications
                </td>

              </tr>

            ) : (

              notifications.map((item) => (

                <tr key={item._id}>

                  <td>

                    <FaBell color="#2563eb" />

                    {" "}

                    {item.title}

                  </td>

                  <td>{item.message}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>

                    <button
                      className="danger-btn"
                      onClick={() =>
                        removeNotification(
                          item._id
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

export default ManageNotifications;