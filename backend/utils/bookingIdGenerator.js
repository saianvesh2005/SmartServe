const Booking = require("../models/Booking");

const generateBookingId = async () => {
  const year = new Date().getFullYear();

  const lastBooking = await Booking.findOne()
    .sort({ createdAt: -1 });

  let number = 1;

  if (lastBooking && lastBooking.bookingId) {
    const parts = lastBooking.bookingId.split("-");
    number = parseInt(parts[3]) + 1;
  }

  return `SS-BK-${year}-${String(number).padStart(6, "0")}`;
};

module.exports = generateBookingId;