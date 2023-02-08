import React from "react";
import { Link } from "react-router-dom";
import { notFoundImg as img } from "@/assets";
import "./NotFound.scss";

const NotFound = () => (
  <div className="img-container">
    <img className="img-container_bg" src={img} alt="404 not found page" />
    <p className="img-container_text">
      <Link to="/home">Go to home </Link>
    </p>
  </div>
);

export default NotFound;
