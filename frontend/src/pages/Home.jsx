function Home() {
  return (
    <>
      <section className="hero">
        <h1>Find Trusted Local Service Providers</h1>

        <p>
          Book Electricians, Plumbers, AC Repair,
          Carpenters and More Near You
        </p>

        <input
          type="text"
          placeholder="Search services..."
          className="search-box"
        />

        <button className="hero-btn">
          Explore Services
        </button>
      </section>

      <section className="services">
        <h2>Popular Services</h2>

        <div className="service-grid">
          <div className="card">
            <h3>⚡ Electrician</h3>
            <p>Starting from ₹500</p>
          </div>

          <div className="card">
            <h3>🚿 Plumber</h3>
            <p>Starting from ₹700</p>
          </div>

          <div className="card">
            <h3>❄️ AC Repair</h3>
            <p>Starting from ₹1200</p>
          </div>

          <div className="card">
            <h3>🪚 Carpenter</h3>
            <p>Starting from ₹800</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Customers</p>
        </div>

        <div className="stat-card">
          <h2>2K+</h2>
          <p>Professionals</p>
        </div>

        <div className="stat-card">
          <h2>25K+</h2>
          <p>Bookings</p>
        </div>

        <div className="stat-card">
          <h2>4.9⭐</h2>
          <p>Average Rating</p>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose SmartServe?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            ✅ Verified Professionals
          </div>

          <div className="feature-card">
            ⭐ Ratings & Reviews
          </div>

          <div className="feature-card">
            🔒 Secure Booking
          </div>

          <div className="feature-card">
            📞 24/7 Support
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Customer Reviews</h2>

        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              Excellent electrician service. Quick
              response and affordable pricing.
            </p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial">
            <p>
              AC repair completed within one hour.
              Highly recommended.
            </p>
            <h4>- Priya</h4>
          </div>

          <div className="testimonial">
            <p>
              Professional carpenter with quality
              work.
            </p>
            <h4>- Karthik</h4>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;