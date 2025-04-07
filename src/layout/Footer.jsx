// Footer layout component with quick links and social icons
// File: Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#4E342E", padding: "20px 40px", color:"white", height: "60rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* About Us Section */}
        <div style={{ flex: "1" }}>
          <h3>About Us</h3>
          <p>
            Suscipit ornare tortor turpis mus rhoncus iaculis montes hendrerit,
            phasellus inceptos non ante sociis facilisi blandit. Sapien mattis
            eleifend ultrices venenatis donec, purus malesuada sociosqu est.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1", marginLeft: "30px" }}>
          <h3>Quick Links</h3>
          <ul style={{ listStyleType: "none", padding: "10px" }}>
            <li><Link to="/shipping" style={{color: "white"}}>Shipping</Link></li>
            <li><Link to="/privacy-policy" style={{color: "white"}}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={{color: "white"}}>Terms & Conditions</Link></li>
            <li><Link to="/return" style={{color: "white"}}>Return Policy</Link></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div style={{ flex: "1" }}>
          <h3>Contact Details</h3>
          <address>
            49 Featherstone Street<br />
            London EC1Y8SY United Kingdom<br />
            Toll Free No. 1800-384-4854<br />
            Email Id: <a href="mailto:Coffbrew@Yahoo.com">Coffbrew@Yahoo.com</a>
          </address>
        </div>
      </div>

      {/* Social Media Icons */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          
        </div>
        <h3>© 2025 Coffee Shop Pablo</h3>
      
    </footer>
  );
}

export default Footer;




