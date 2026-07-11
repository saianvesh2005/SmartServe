import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import BookingSuccessModal from "./BookingSuccessModal";
import serviceFields from "../../data/serviceFields";
import { createBooking } from "../../services/bookingService";

import "react-datepicker/dist/react-datepicker.css";
import "../../styles/booking.css";

function BookingForm({ service }) {

  // ===============================
  // Booking Date & Time
  // ===============================

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");

  // ===============================
  // Payment
  // ===============================

  const [paymentMethod, setPaymentMethod] = useState("Cash");

  // ===============================
  // Coupon
  // ===============================

  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  // ===============================
  // Success Modal
  // ===============================

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // ===============================
  // Images
  // ===============================

  const [images, setImages] = useState([]);

  // ===============================
  // Current Location
  // ===============================

  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  // ===============================
  // Customer Details
  // ===============================

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    notes: "",
  });

  // ===============================
  // Dynamic Service Details
  // ===============================

  const [serviceDetails, setServiceDetails] = useState({});

  // ===============================
  // Available Slots
  // ===============================

  const slots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // ===============================
  // Price Calculation
  // ===============================

  const gst = Math.round(service.price * 0.18);

  const totalAmount =
    service.price +
    gst -
    discountAmount;

  // ===============================
  // Customer Input
  // ===============================

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  // ===============================
  // Dynamic Service Fields
  // ===============================

  const handleServiceChange = (e) => {

    setServiceDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  // ===============================
  // Apply Coupon
  // ===============================

  const applyCoupon = () => {

    const code = couponCode.trim().toUpperCase();

    if (code === "SAVE100") {

      setDiscountAmount(100);
      toast.success("₹100 Coupon Applied");

    }

    else if (code === "SMART50") {

      setDiscountAmount(50);
      toast.success("₹50 Coupon Applied");

    }

    else {

      setDiscountAmount(0);
      toast.error("Invalid Coupon");

    }

  };

  // ===============================
  // Image Upload
  // ===============================

  const handleImageUpload = (e) => {

    const files = Array.from(e.target.files);

    if (files.length > 5) {

      toast.error("Maximum 5 images allowed.");

      return;

    }

    setImages(files);

  };

  // ===============================
  // Current Location
  // ===============================

  const getCurrentLocation = () => {

    if (!navigator.geolocation) {

      toast.error("Geolocation is not supported.");

      return;

    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        toast.success("Current Location Added");

      },

      () => {

        toast.error("Unable to fetch location.");

      }

    );

  };

  // ===============================
  // Dynamic Fields Configuration
  // ===============================

  const fields =
    serviceFields[service.slug] ||
    serviceFields.default;
      // ===============================
  // Create Booking
  // ===============================

  const handleBooking = async () => {

    // -------------------------------
    // Basic Validation
    // -------------------------------

    if (!formData.customerName.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your mobile number.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!formData.address.trim()) {
      toast.error("Please enter your address.");
      return;
    }

    if (!selectedSlot) {
      toast.error("Please select a time slot.");
      return;
    }

    try {

      const bookingData = {

        // =========================
        // Service
        // =========================

        serviceId: service._id || null,

        serviceName: service.name,

        servicePrice: service.price,

        // =========================
        // Customer
        // =========================

        customerName: formData.customerName,

        phone: formData.phone,

        email: formData.email,

        address: formData.address,

        landmark: formData.landmark,

        city: formData.city,

        pincode: formData.pincode,

        notes: formData.notes,

        // =========================
        // Booking
        // =========================

        bookingDate: selectedDate.toLocaleDateString(),

        bookingTime: selectedSlot,

        // =========================
        // Payment
        // =========================

        paymentMethod,

        paymentStatus: "Pending",

        // =========================
        // Coupon
        // =========================

        couponCode,

        discountAmount,

        totalAmount,

        // =========================
        // Location
        // =========================

        location,

        // =========================
        // Images
        // =========================

        images,

        // =========================
        // Dynamic Fields
        // =========================

        serviceDetails,

        // =========================
        // Status
        // =========================

        status: "Pending",

      };

      console.log("========== BOOKING ==========");
      console.log(bookingData);

      const response = await createBooking(bookingData);

      if (response.data.success) {

        toast.success("🎉 Booking Created Successfully!");

        setShowSuccessModal(true);

      }

    }

    catch (error) {

      console.error(error);

      toast.error(

        error.response?.data?.message ||

        "Unable to create booking."

      );

    }

  };
    // ===============================
  // UI
  // ===============================

  return (
    <div className="booking-form">

      <h2>Book Your Service</h2>

      {/* ==========================
          Customer Details
      ========================== */}

      <div className="form-grid">

        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter Full Name"
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="500001"
          />
        </div>

      </div>

      {/* ==========================
          Address
      ========================== */}

      <div className="form-group">

        <label>Complete Address *</label>

        <textarea
          rows="3"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="House No, Street, Area..."
        />

      </div>

      <div className="form-grid">

        <div className="form-group">

          <label>Landmark</label>

          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Near Temple, Bus Stop..."
          />

        </div>

        <div className="form-group">

          <label>City</label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Hyderabad"
          />

        </div>

      </div>

      {/* ==========================
          Current Location
      ========================== */}

      <button
        type="button"
        className="location-btn"
        onClick={getCurrentLocation}
      >
        📍 Use Current Location
      </button>

      {location.latitude && (

        <p className="location-success">

          ✅ Current Location Captured

        </p>

      )}

      {/* ==========================
          Dynamic Service Fields
      ========================== */}

      <h3 className="section-title">

        Service Details

      </h3>

      {fields.map((field) => (

        <div
          className="form-group"
          key={field.name}
        >

          <label>

            {field.label}

          </label>

          {field.type === "textarea" ? (

            <textarea
              rows="3"
              name={field.name}
              value={serviceDetails[field.name] || ""}
              placeholder={field.placeholder}
              onChange={handleServiceChange}
            />

          ) : field.type === "select" ? (

            <select
              name={field.name}
              value={serviceDetails[field.name] || ""}
              onChange={handleServiceChange}
            >

              <option value="">Select</option>

              {field.options.map((option) => (

                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>

              ))}

            </select>

          ) : (

            <input
              type={field.type}
              name={field.name}
              value={serviceDetails[field.name] || ""}
              placeholder={field.placeholder}
              onChange={handleServiceChange}
            />

          )}

        </div>

      ))}

      {/* ==========================
          Upload Images
      ========================== */}

      <div className="form-group">

        <label>Upload Images (Maximum 5)</label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />

      </div>

      {/* ==========================
          Booking Schedule
      ========================== */}

      <h3 className="section-title">

        Schedule Your Service

      </h3>

      <div className="form-grid">

        <div className="form-group">

          <label>Select Date</label>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="date-picker"
          />

        </div>

        <div className="form-group">

          <label>Select Time Slot</label>

          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >

            <option value="">

              Select Time

            </option>

            {slots.map((slot) => (

              <option
                key={slot}
                value={slot}
              >

                {slot}

              </option>

            ))}

          </select>

        </div>

      </div>

      {/* ==========================
          Additional Instructions
      ========================== */}

      <div className="form-group">

        <label>

          Additional Instructions

        </label>

        <textarea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Anything the technician should know before arriving..."
        />

      </div>
            {/* ==========================
          Payment
      ========================== */}

      <h3 className="section-title">
        Payment Method
      </h3>

      <div className="payment-grid">

        <label className="payment-card">
          <input
            type="radio"
            value="Cash"
            checked={paymentMethod === "Cash"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          💵 Cash After Service
        </label>

        <label className="payment-card">
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          📱 UPI
        </label>

        <label className="payment-card">
          <input
            type="radio"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          💳 Credit Card
        </label>

        <label className="payment-card">
          <input
            type="radio"
            value="Debit Card"
            checked={paymentMethod === "Debit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          💳 Debit Card
        </label>

      </div>

      {/* ==========================
          Card Details
      ========================== */}

      {(paymentMethod === "Credit Card" ||
        paymentMethod === "Debit Card") && (

        <div className="card-payment-box">

          <h3>Card Details</h3>

          <div className="form-group">
            <label>Card Holder Name</label>
            <input
              type="text"
              placeholder="Enter Card Holder Name"
            />
          </div>

          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
              />
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                placeholder="***"
                maxLength={3}
              />
            </div>

          </div>

        </div>

      )}

      {/* ==========================
          UPI Details
      ========================== */}

      {paymentMethod === "UPI" && (

        <div className="upi-box">

          <h3>UPI Details</h3>

          <input
            type="text"
            placeholder="example@upi"
          />

          <small>
            Payment gateway integration will be added later.
          </small>

        </div>

      )}

      {/* ==========================
          Coupon
      ========================== */}

      <h3 className="section-title">
        Coupon
      </h3>

      <div className="coupon-container">

        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        <button
          type="button"
          className="apply-btn"
          onClick={applyCoupon}
        >
          Apply
        </button>

      </div>

      {/* ==========================
          Booking Summary
      ========================== */}

      <div className="booking-summary">

        <h3>Booking Summary</h3>

        <div className="summary-row">
          <span>Service</span>
          <span>{service.name}</span>
        </div>

        <div className="summary-row">
          <span>Service Charge</span>
          <span>₹{service.price}</span>
        </div>

        <div className="summary-row">
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>

        <div className="summary-row">
          <span>Discount</span>
          <span>- ₹{discountAmount}</span>
        </div>

        <div className="summary-row total">
          <strong>Total Amount</strong>
          <strong>₹{totalAmount}</strong>
        </div>

      </div>

      {/* ==========================
          Confirm Booking
      ========================== */}

      <button
        type="button"
        className="confirm-booking-btn"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>

      {/* ==========================
          Success Modal
      ========================== */}

      <BookingSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        service={service}
        selectedDate={selectedDate}
        selectedSlot={selectedSlot}
        gst={gst}
        discount={discountAmount}
        total={totalAmount}
        paymentMethod={paymentMethod}
      />

    </div>
  );

}

export default BookingForm;