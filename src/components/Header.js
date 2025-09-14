import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <header className="navbar">
        <div>
          <span className="navbar-title">CCM REPORT</span>
        </div>
        <nav className="navbar-links">
          <Link to="/heat-report">Heat Report</Link>
          <Link to="/shift-report">Shift Report</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;