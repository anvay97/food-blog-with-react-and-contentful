import React from 'react';
import { NavLink } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <p className="brand-logo">React and Contentful</p>
        <ul className="right" style={{marginLeft: '60%'}}>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to='/recipes'>Recipes</NavLink></li>
          <li><NavLink to='/books'>Books</NavLink></li>
          {/* <li><NavLink to='/persons'>Persons</NavLink></li> */}

        </ul>
      </div>
    </nav> 
  )
}

export default Navbar