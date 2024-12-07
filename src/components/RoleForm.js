import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "tailwindcss/tailwind.css";

const RoleForm = ({ role, onSubmit, onClose }) => {
  const [name, setName] = useState(role ? role.name : "");
  const [permissions, setPermissions] = useState(role ? role.permissions : []);

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPermissions([...permissions, value]);
    } else {
      setPermissions(permissions.filter((p) => p !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = { id: role ? role.id : Date.now(), name, permissions };
    onSubmit(newRole);
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
        <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </Form.Group>
      <Form.Group controlId="formPermissions" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ fontWeight: "bold" }}>Permissions</Form.Label>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Form.Check
            type="checkbox"
            label="Read"
            value="Read"
            checked={permissions.includes("Read")}
            onChange={handlePermissionChange}
            style={{ marginRight: "10px" }}
          />
          <Form.Check
            type="checkbox"
            label="Write"
            value="Write"
            checked={permissions.includes("Write")}
            onChange={handlePermissionChange}
            style={{ marginRight: "10px" }}
          />
          <Form.Check
            type="checkbox"
            label="Delete"
            value="Delete"
            checked={permissions.includes("Delete")}
            onChange={handlePermissionChange}
            style={{ marginRight: "10px" }}
          />
        </div>
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
          {role ? "Update" : "Add"}
        </Button>
      </div>
    </Form>
  );
};

export default RoleForm;
