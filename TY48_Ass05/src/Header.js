import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1 style={titleStyle}>VIT Result</h1>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/form" style={linkStyle}>Enter Marks</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  borderBottom: '2px solid #ddd',
};

const titleStyle = {
  fontSize: '32px',
  margin: '0',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '10px 20px',
  border: '2px solid transparent',
  borderRadius: '5px',
  transition: 'background-color 0.3s, border-color 0.3s',
};
export default Header;
