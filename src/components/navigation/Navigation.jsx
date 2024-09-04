import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/students">Students</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;