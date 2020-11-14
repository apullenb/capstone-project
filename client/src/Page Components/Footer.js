import React from 'react';
import './Header.css';



function Footer() {
  return (
    <div className="footer" style = {footerStyle}>
      <p>@mindful | 2020</p>
    </div>
  );
}

const footerStyle = {
  boxSizing: "border-box",
  border: "1px solid black",
  textAlign : "left",
  backgroundColor: "gray",
  marginTop: "45px",
  padding: "20px"
}

export default Footer;