import React from 'react';
import './Header.css';
import Navbar from './Navbar';


function Header() {
  return (
    <div className="header">
      <h1>Mindful</h1>
      <h4>Live Your Best Life</h4>
      <Navbar />
    </div>
  );
}

export default Header;
