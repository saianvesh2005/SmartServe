import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AdminLayout from "../components/layout/AdminLayout";
import ProviderForm from "../components/ProviderForm";

import { addProvider } from "../../services/providerService";

function AddProvider() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleAddProvider = async (providerData) => {
    try {
      setLoading(true);

      const res = await addProvider(providerData);

      if (res.data.success) {
        toast.success("Provider added successfully!");
        navigate("/admin/providers");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to add provider."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="page-container">

        <h1 className="page-title">
          Add New Provider
        </h1>

        <ProviderForm
          onSubmit={handleAddProvider}
          loading={loading}
        />

      </div>
    </AdminLayout>
  );
}

export default AddProvider;