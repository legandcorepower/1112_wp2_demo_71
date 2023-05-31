import React from 'react';
import { Link } from 'react-router-dom';


const Navbar_71 = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
          <Link to="index.html"
            ><img src="logo.svg" alt="cocktail db logo" className="logo"
          /></Link>
          <ul className="nav-links">
            <li><Link to="index.html">home</Link></li>
            <li><Link to="about.html">about</Link></li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar_71;
