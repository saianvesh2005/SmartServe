import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  getWishlist,
  removeWishlist,
} from "../services/wishlistService";

function Wishlist() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const res = await getWishlist(user._id);

      setWishlist(res.data.wishlist || []);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load wishlist");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeWishlist(id);

      toast.success("Removed from Wishlist");

      loadWishlist();
    } catch (err) {
      console.log(err);
      toast.error("Unable to remove item");
    }
  };

  return (
    <DashboardLayout>
      <div className="page-container">

        <h1>My Wishlist ❤️</h1>

        {loading ? (
          <h3>Loading...</h3>
        ) : wishlist.length === 0 ? (
          <h3>No Services in Wishlist</h3>
        ) : (
          <div className="booking-grid">

            {wishlist.map((item) => (

              <div
                key={item._id}
                className="booking-card"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.serviceName}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  />
                )}

                <h2>{item.serviceName}</h2>

                <p>
                  <strong>Category:</strong> {item.category}
                </p>

                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>

                <p>{item.description}</p>

                <button
                  className="logout-btn"
                  onClick={() =>
                    handleRemove(item._id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Wishlist;