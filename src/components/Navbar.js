import React from 'react';
import logo from '../images/airbnb.png';
import '../style.css'
function Navbar() {
  return (
    <nav >
        <img className='nav--logo' src={logo} alt="airbnnblogo"></img>
    </nav>
      
    
  )
}

export default Navbar
