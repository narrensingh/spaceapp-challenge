import React from 'react';
import './Nav.css';
import logo from './images/logo.jpeg';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <img src={logo} alt="logo" className="nav__logo" />
      </div>
      <div className="nav__right"></div>
    </div>
  );
};

export default Nav;
