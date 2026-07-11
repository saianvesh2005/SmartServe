import React from "react";

function RecentBookings() {

  const bookings = [

    {
      customer:"Sai",
      service:"AC Repair",
      amount:"₹850",
      status:"Pending"
    },

    {
      customer:"Rahul",
      service:"Electrician",
      amount:"₹1200",
      status:"Completed"
    },

    {
      customer:"Kiran",
      service:"Plumber",
      amount:"₹650",
      status:"Accepted"
    }

  ];

  return (

    <div className="dashboard-card-large">

      <h3>Recent Bookings</h3>

      <table className="dashboard-table">

        <thead>

          <tr>

            <th>Customer</th>

            <th>Service</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((b,index)=>(

            <tr key={index}>

              <td>{b.customer}</td>

              <td>{b.service}</td>

              <td>{b.amount}</td>

              <td>

                <span className={b.status.toLowerCase()}>

                  {b.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentBookings;