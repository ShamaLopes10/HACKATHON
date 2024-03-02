import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
