const User = require("../models/User");
const Service = require("../models/Service");
const Booking = require("../models/Booking");
const Complaint = require("../models/Complaint");
const Review = require("../models/Review");

exports.dashboardStats = async (req, res) => {

    try {

        const users = await User.countDocuments();

        const services = await Service.countDocuments();

        const bookings = await Booking.countDocuments();

        const complaints = await Complaint.countDocuments();

        const reviews = await Review.countDocuments();

        const completed = await Booking.countDocuments({
            status: "Completed",
        });

        const pending = await Booking.countDocuments({
            status: "Pending",
        });

        const cancelled = await Booking.countDocuments({
            status: "Cancelled",
        });

        const revenueData = await Booking.aggregate([
            {
                $match: {
                    status: "Completed",
                },
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$amount",
                    },
                },
            },
        ]);

        const revenue =
            revenueData.length > 0
                ? revenueData[0].total
                : 0;

        const recentBookings = await Booking.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({

            users,

            services,

            bookings,

            complaints,

            reviews,

            completed,

            pending,

            cancelled,

            revenue,

            recentBookings,

        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};