import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import AdminLayout from "../components/layout/AdminLayout";
import ProviderForm from "../components/ProviderForm";

import {
  getProviderById,
  updateProvider,
} from "../../services/providerService";

function EditProvider() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateProvider(id, data);

      toast.success("Provider updated successfully.");

      navigate("/admin/providers");
    } catch (error) {
      console.error(error);

      toast.error("Failed to update provider.");
    }
  };

  return (
    <AdminLayout>
      <div className="page-container">

        <h1 className="page-title">
          Edit Provider
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProviderForm
            initialData={provider}
            onSubmit={handleUpdate}
            buttonText="Update Provider"
          />
        )}

      </div>
    </AdminLayout>
  );
}

export default EditProvider;