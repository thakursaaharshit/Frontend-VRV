import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import { motion } from "framer-motion";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Mock API call to fetch users
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Simulate API call
    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "User",
        status: "Inactive",
      },
    ];
    setUsers(mockUsers);
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const openModal = (user = null) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
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
        User Management
      </h1>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "16px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => openModal()}
      >
        Add User
      </button>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>
              Name
            </th>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>
              Email
            </th>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>
              Role
            </th>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>
              Status
            </th>
            <th style={{ padding: "10px", border: "1px solid #dee2e6" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #dee2e6" }}>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                {user.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                {user.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                {user.email}
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                {user.role}
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                {user.status}
              </td>
              <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                <button
                  style={{
                    backgroundColor: "#28a745",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    marginRight: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(user)}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteUser(user.id)}
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
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
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
            maxWidth: "500px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {selectedUser ? "Edit User" : "Add User"}
          </h2>
          <UserForm
            user={selectedUser}
            onSubmit={selectedUser ? editUser : addUser}
            onClose={closeModal}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserManagement;
