import React, {useState, useEffect} from 'react';
import './Header.css';
import Navbar from './Navbar';


function Header() {


return(
       
    <div className="header">
      <h1>Mindful</h1>
      <Navbar />
    </div>
  );

}
export default Header;
