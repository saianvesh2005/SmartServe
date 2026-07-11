import React from "react";

function ProviderTable({ providers = [] }) {
  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Service</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {providers.length === 0 ? (
          <tr>
            <td colSpan="5">No Providers Found</td>
          </tr>
        ) : (
          providers.map((provider) => (
            <tr key={provider._id}>
              <td>{provider.name}</td>
              <td>{provider.service}</td>
              <td>{provider.email}</td>
              <td>{provider.phone}</td>
              <td>{provider.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProviderTable;