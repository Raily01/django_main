import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#F5F5DC',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        height: '4rem',
        lineHeight: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 30px',
      }}
    >
      <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '30px' }}>
        Boulangerie Patisserie
      </div>
      <nav style={{ marginRight: '50px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/all" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
              About
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
              Contact
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
              <FaShoppingCart />
            </Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
