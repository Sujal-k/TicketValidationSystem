import React from 'react';
import { Link } from 'react-router-dom';

export function UserNavbar() {
  return (
    <nav style={navbarStyle}>
      <h2 style={{ margin: 0 }}>User  Panel</h2>
      <div>
        <Link to="/user/events" style={linkStyle}>Events</Link>
        <Link to="/user/profile" style={linkStyle}>Profile</Link>
        <Link to="/user/logout" style={linkStyle}>Logout</Link>
      </div>
    </nav>
  );
}

const navbarStyle = {
  padding: '10px 20px',
  backgroundColor: '#1c1c1c',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};
