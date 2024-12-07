import React, { useState, useEffect } from "react";
import RoleForm from "./RoleForm";
import { motion } from "framer-motion";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    // Mock API call to fetch roles
    fetchRoles();
  }, []);

  const fetchRoles = () => {
    // Simulate API call
    const mockRoles = [
      {
        id: 1,
        name: "Admin",
        description: "Full access to all features",
        status: "Active",
      },
      {
        id: 2,
        name: "User",
        description: "Limited access to features",
        status: "Inactive",
      },
    ];
    setRoles(mockRoles);
  };

  const addRole = (role) => {
    setRoles([...roles, role]);
  };

  const editRole = (role) => {
    setRoles(roles.map((r) => (r.id === role.id ? role : r)));
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const openModal = (role = null) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Role Management
      </h1>
      <button
        style={{
          backgroundColor: "#1E90FF",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "16px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => openModal()}
      >
        Add Role
      </button>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Description
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Status
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {role.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {role.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {role.description}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {role.status}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  style={{
                    backgroundColor: "#32CD32",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    marginRight: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(role)}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "#FF4500",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteRole(role.id)}
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
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
            {selectedRole ? "Edit Role" : "Add Role"}
          </h2>
          <RoleForm
            role={selectedRole}
            onSubmit={selectedRole ? editRole : addRole}
            onClose={closeModal}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoleManagement;
