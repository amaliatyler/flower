import React from 'react';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href="/" className="header__logo">
            <span className="header__logo_back">L</span>
            <span className="header__logo_front">F</span>
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
}
