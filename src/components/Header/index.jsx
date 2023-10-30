import React from 'react';
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
  return (
    <header>
      <div className='header'>
        <img src={logo} alt="Taugor" className="logo" />
      </div>
    </header>
  );
}

export default Header;