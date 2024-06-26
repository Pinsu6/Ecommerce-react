import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Copyright &copy; 2024 Ecom PinsuCart</h1>
      <p className="text-center mt-3">
        <Link to="/About">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">privacy policy</Link>
      </p>
    </div>
  );
};

export default Footer;
