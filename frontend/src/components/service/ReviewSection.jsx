import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaUserCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { toast } from "react-toastify";

import {
  addReview,
  getServiceReviews,
} from "../../services/reviewService";

import "../../styles/reviews.css";

function ReviewSection({ service }) {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [reviews, setReviews] = useState([]);

  const [formData, setFormData] = useState({
    rating: 5,
    review: "",
  });

  useEffect(() => {
    if (service?._id) {
      loadReviews();
    }
  }, [service]);

  const loadReviews = async () => {
    try {
      const res = await getServiceReviews(service._id);

      setReviews(res.data.reviews || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await addReview({
        userId: user._id,
        userName: user.name,
        serviceId: service._id,
        serviceName: service.name,
        rating: Number(formData.rating),
        review: formData.review,
      });

      toast.success("Review Added Successfully");

      setFormData({
        rating: 5,
        review: "",
      });

      loadReviews();
    } catch (error) {
      console.log(error);
      toast.error("Unable to submit review");
    }
  };

  return (
    <section className="reviews-section">

      <h2>Customer Reviews</h2>

      <form
        className="review-form"
        onSubmit={submitReview}
      >

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <textarea
          name="review"
          rows="4"
          placeholder="Write your review..."
          value={formData.review}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Review
        </button>

      </form>

      <div className="reviews-grid">

        {reviews.length === 0 ? (

          <p>No Reviews Yet.</p>

        ) : (

          reviews.map((review) => (

            <div
              key={review._id}
              className="review-card"
            >

              <div className="review-header">

                <FaUserCircle className="review-avatar" />

                <div>

                  <h3>{review.userName}</h3>

                  <small>
                    {new Date(
                      review.createdAt
                    ).toLocaleDateString()}
                  </small>

                </div>

              </div>

              <div className="review-stars">

                {[...Array(review.rating)].map(
                  (_, index) => (
                    <FaStar key={index} />
                  )
                )}

              </div>

              <p>{review.review}</p>

              <div className="review-footer">

                <FaThumbsUp />

                <span>Verified Customer</span>

              </div>

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default ReviewSection;