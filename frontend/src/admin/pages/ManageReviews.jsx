import React, { useEffect, useState } from "react";
import { FaSearch, FaTrash, FaStar } from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";

import {
  getAllReviews,
  deleteReview,
} from "../../services/reviewService";

function ManageReviews() {
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadReviews();
  }, []);

  useEffect(() => {
    const data = reviews.filter(
      (review) =>
        review.userName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        review.serviceName
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

    setFiltered(data);
  }, [search, reviews]);

  const loadReviews = async () => {
    try {
      const res = await getAllReviews();

      setReviews(res.data.reviews || []);
      setFiltered(res.data.reviews || []);
    } catch (error) {
      console.log(error);
    }
  };

  const removeReview = async (id) => {
    if (!window.confirm("Delete this review?")) return;

    try {
      await deleteReview(id);

      loadReviews();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>

      <h2 style={{ marginBottom: 20 }}>
        Review Management
      </h2>

      <div
        className="admin-search"
        style={{ marginBottom: 20 }}
      >
        <FaSearch />

        <input
          type="text"
          placeholder="Search reviews..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="admin-table">

        <table>

          <thead>

            <tr>

              <th>User</th>

              <th>Service</th>

              <th>Rating</th>

              <th>Review</th>

              <th>Action</th>

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
                  No Reviews Found
                </td>

              </tr>

            ) : (

              filtered.map((review) => (

                <tr key={review._id}>

                  <td>{review.userName}</td>

                  <td>{review.serviceName}</td>

                  <td>

                    <FaStar
                      color="#f59e0b"
                    />

                    {" "}

                    {review.rating}

                  </td>

                  <td>{review.comment}</td>

                  <td>

                    <button
                      className="danger-btn"
                      onClick={() =>
                        removeReview(
                          review._id
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

export default ManageReviews;