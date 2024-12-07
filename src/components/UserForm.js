import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "tailwindcss/tailwind.css";

const UserForm = ({ user, onSubmit, onClose }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [status, setStatus] = useState(user ? user.status : "Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: user ? user.id : Date.now(),
      name,
      email,
      role,
      status,
    };
    onSubmit(newUser);
    onClose();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Form.Group controlId="formName" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ display: "block", marginBottom: "5px" }}>
          Name
        </Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </Form.Group>
      <Form.Group controlId="formEmail" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ display: "block", marginBottom: "5px" }}>
          Email
        </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </Form.Group>
      <Form.Group controlId="formRole" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ display: "block", marginBottom: "5px" }}>
          Role
        </Form.Label>
        <Form.Control
          as="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ display: "block", marginBottom: "5px" }}>
          Status
        </Form.Label>
        <Form.Control
          as="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Form.Control>
      </Form.Group>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button
          variant="secondary"
          onClick={onClose}
          style={{ marginRight: "10px" }}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          {user ? "Update" : "Add"}
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
