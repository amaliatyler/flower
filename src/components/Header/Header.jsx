import React from 'react';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
}
