import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "tailwindcss/tailwind.css";

const PermissionForm = ({ permission, onSubmit, onClose }) => {
  const [name, setName] = useState(permission ? permission.name : "");
  const [description, setDescription] = useState(
    permission ? permission.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPermission = {
      id: permission ? permission.id : Date.now(),
      name,
      description,
    };
    onSubmit(newPermission);
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
      <Form.Group controlId="formDescription" style={{ marginBottom: "15px" }}>
        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
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
          {permission ? "Update" : "Add"}
        </Button>
      </div>
    </Form>
  );
};

export default PermissionForm;
