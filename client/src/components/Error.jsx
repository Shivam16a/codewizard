import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        The page you’re looking for doesn’t exist.
      </p>
      <button className="notfound-button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
