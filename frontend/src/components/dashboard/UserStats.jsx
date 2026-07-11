import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaHeart,
} from "react-icons/fa";

import StatsCard from "./StatsCard";
import { getAllBookings } from "../../services/bookingService";

function UserStats() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    wishlist: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await getAllBookings();

      const bookings = res.data.bookings || [];

      setStats({
        total: bookings.length,

        completed: bookings.filter(
          b => b.status === "Completed"
        ).length,

        pending: bookings.filter(
          b =>
            b.status === "Pending" ||
            b.status === "Confirmed" ||
            b.status === "Technician Assigned" ||
            b.status === "On The Way"
        ).length,

        wishlist: 0,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="stats-grid">

      <StatsCard
        title="Total Bookings"
        value={stats.total}
        icon={<FaClipboardList />}
        color="#2563eb"
      />

      <StatsCard
        title="Completed"
        value={stats.completed}
        icon={<FaCheckCircle />}
        color="#16a34a"
      />

      <StatsCard
        title="Pending"
        value={stats.pending}
        icon={<FaClock />}
        color="#f59e0b"
      />

      <StatsCard
        title="Wishlist"
        value={stats.wishlist}
        icon={<FaHeart />}
        color="#ec4899"
      />

    </div>
  );
}

export default UserStats;