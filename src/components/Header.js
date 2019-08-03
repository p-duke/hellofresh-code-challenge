import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="nav-bar">
      <nav className="nav-container">
        <div className="logo">
          <img src="https://cdn.goreadymade.com/ml/goreadymade-logo.svg" alt="GoReadMade" />
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="label-toggle"></label>
        <ul>
          <li><Link to="/recipes">Our Recipes</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;
