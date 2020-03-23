import React from 'react';

import './Header.css';

const header = () => {
  return (
    <header id="header">
      <div className="logo">
        <img id="header-img" src="https://image.flaticon.com/icons/svg/1460/1460537.svg" alt="plant logo" />
      </div>
      <nav id="nav-bar">
        <ul>
          <li><a className="nav-link" href="#hero">Home</a></li>
          <li><a className="nav-link" href="#features">Features</a></li>
          <li><a className="nav-link" href="#pricing">Products</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
