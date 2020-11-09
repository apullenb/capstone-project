import React from 'react';
import './Header.css';


function Navbar() {
  return (
    <div className="Navbar">
       <nav role="navigation">Nav
        <a href="index.html">Home |</a>
        <a href="dailyform.html">New Entry |</a>
        <a href="/NewJournalEntry">Journal Entry |</a>
        <a href="alljournalview.html">My Journal |</a>
        <a href="/Login">Login</a>
        
    </nav>
    </div>
  );
}

export default Navbar;
