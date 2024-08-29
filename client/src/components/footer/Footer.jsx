// src/components/footer/Footer.jsx
import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h2>Footer Section</h2> {/* Titre du footer */}
        <p>
          © 2024 2MJ-App. All rights reserved. 
          Contact us at <a href="mailto:info@2mjapp.com">info@2mjapp.com</a>.
        </p>
        <div className="footerLinks">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
