import React, { useState, useEffect } from "react";
import PermissionForm from "./PermissionForm";
import { motion } from "framer-motion";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  useEffect(() => {
    // Mock API call to fetch permissions
    fetchPermissions();
  }, []);

  const fetchPermissions = () => {
    // Simulate API call
    const mockPermissions = [
      { id: 1, name: "Read", description: "Allows reading of resources" },
      { id: 2, name: "Write", description: "Allows writing of resources" },
      { id: 3, name: "Delete", description: "Allows deletion of resources" },
    ];
    setPermissions(mockPermissions);
  };

  const addPermission = (permission) => {
    setPermissions([...permissions, permission]);
  };

  const editPermission = (permission) => {
    setPermissions(
      permissions.map((p) => (p.id === permission.id ? permission : p))
    );
  };

  const deletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  const openModal = (permission = null) => {
    setSelectedPermission(permission);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPermission(null);
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "16px" }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Permission Management
      </h1>
      <button
        style={{
          backgroundColor: "#17a2b8",
          color: "white",
          padding: "8px 16px",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
        onClick={() => openModal()}
      >
        Add Permission
      </button>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>ID</th>
            <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>
              Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>
              Description
            </th>
            <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr
              key={permission.id}
              style={{ borderBottom: "1px solid #dee2e6" }}
            >
              <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>
                {permission.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>
                {permission.name}
              </td>
              <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>
                {permission.description}
              </td>
              <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>
                <button
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    marginRight: "8px",
                  }}
                  onClick={() => openModal(permission)}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                  onClick={() => deletePermission(permission.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: showModal ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {selectedPermission ? "Edit Permission" : "Add Permission"}
          </h2>
          <PermissionForm
            permission={selectedPermission}
            onSubmit={selectedPermission ? editPermission : addPermission}
            onClose={closeModal}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PermissionManagement;
