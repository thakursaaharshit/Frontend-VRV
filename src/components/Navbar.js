import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#1a202c",
        padding: "1rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          RBAC Admin Dashboard
        </h1>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#a0aec0",
                },
              }}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/roles"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#a0aec0",
                },
              }}
            >
              Roles
            </Link>
          </li>
          <li>
            <Link
              to="/permissions"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#a0aec0",
                },
              }}
            >
              Permissions
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
