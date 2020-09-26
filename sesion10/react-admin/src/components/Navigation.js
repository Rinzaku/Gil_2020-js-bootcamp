import React from 'react';
import {
  NavLink
} from 'react-router-dom';
// import '../css/nav.css';

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
  