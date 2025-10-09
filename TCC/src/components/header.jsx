import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import enterIcon from '../assets/enterKey.svg';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-title">
        <div className="title-line-one">
          <span>Enter</span>
          <img src={enterIcon} alt="Enter key icon" className="enter-icon" />
        </div>
        <span>Development</span>
      </div>

      <nav className="app-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/roblox" className="nav-link">Roblox</NavLink>
        <NavLink to="/godot" className="nav-link">Godot</NavLink>
        <NavLink to="/unity" className="nav-link">Unity</NavLink>
      </nav>
    </header>
  );
}

export default Header;