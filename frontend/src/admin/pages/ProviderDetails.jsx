import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";

import { getProviderById } from "../../services/providerService";

import { toast } from "react-toastify";

function ProviderDetails() {
  const { id } = useParams();

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    loadProvider();
  }, []);

  const loadProvider = async () => {
    try {
      const res = await getProviderById(id);

      setProvider(res.data.provider);
    } catch (error) {
      console.error(error);

      toast.error("Unable to load provider.");
    }
  };

  if (!provider) {
    return (
      <AdminLayout>
        <div className="page-container">
          Loading Provider...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="page-container">

        <h1 className="page-title">
          Provider Details
        </h1>

        <div className="details-card">

          <p>
            <strong>Name :</strong> {provider.name}
          </p>

          <p>
            <strong>Email :</strong> {provider.email}
          </p>

          <p>
            <strong>Phone :</strong> {provider.phone}
          </p>

          <p>
            <strong>Service :</strong> {provider.service}
          </p>

          <p>
            <strong>Status :</strong> {provider.status}
          </p>

          <Link
            to="/admin/providers"
            className="add-btn"
          >
            Back
          </Link>

        </div>

      </div>

    </AdminLayout>
  );
}

export default ProviderDetails;