import React from 'react';
import './../CSS/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your E-Commerce</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/about">About Us</a>
        <Link to="/Home">Home</Link>
       
        <a href="/">Login</a>
      </nav>
    </header>
  );
};

export default Header;
