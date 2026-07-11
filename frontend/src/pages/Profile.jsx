import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
} from "../services/userService";
import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    createdAt: "",
  });

  useEffect(() => {
    if (!currentUser?._id) {
      toast.error("Please login again");
      navigate("/login");
      return;
    }

    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await getProfile(currentUser._id);

      const user = res.data.user;

      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        role: user.role || "user",
        createdAt: user.createdAt || "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to load profile"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
      const res = await updateProfile(currentUser._id, {
        name: profile.name,
        phone: profile.phone,
        address: profile.address,
      });

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Profile Updated Successfully");

      setEditing(false);

      fetchProfile();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Update Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <FaUserCircle className="profile-avatar" />

          <h1>My Profile</h1>

          <p>Manage your SmartServe Account</p>
        </div>

        <div className="profile-body">

          <div className="profile-row">
            <label>
              <FaUserEdit /> Full Name
            </label>

            {editing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.name || "Not Available"}</p>
            )}
          </div>

          <div className="profile-row">
            <label>
              <FaEnvelope /> Email
            </label>

            <p>{profile.email || "Not Available"}</p>
          </div>

          <div className="profile-row">
            <label>
              <FaPhone /> Phone
            </label>

            {editing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.phone || "Not Added"}</p>
            )}
          </div>

          <div className="profile-row">
            <label>
              <FaMapMarkerAlt /> Address
            </label>

            {editing ? (
              <textarea
                rows="3"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.address || "Not Added"}</p>
            )}
          </div>

          <div className="profile-row">
            <label>Role</label>

            <p style={{ textTransform: "capitalize" }}>
              {profile.role || "User"}
            </p>
          </div>

          <div className="profile-row">
            <label>Member Since</label>

            <p>
              {profile.createdAt
                ? new Date(profile.createdAt).toLocaleDateString()
                : "-"}
            </p>
          </div>

          <div className="profile-actions">

            {!editing ? (
              <button
                className="edit-btn"
                onClick={() => setEditing(true)}
              >
                <FaUserEdit />
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  className="save-btn"
                  onClick={saveProfile}
                >
                  <FaSave />
                  Save Changes
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => {
                    setEditing(false);
                    fetchProfile();
                  }}
                >
                  <FaTimes />
                  Cancel
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;