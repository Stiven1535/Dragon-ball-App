import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="https://1000marcas.net/wp-content/uploads/2022/02/Dragon-Ball-Logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="nav-btn" onClick={() => navigate('/Humanos')}>
            Humanos
          </button>
          <button className="nav-btn" onClick={() => navigate('/No Humanos')}>
            No Humanos
          </button>
          <button className="nav-btn" onClick={() => navigate('/Acerca de')}>
            Acerca de
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;