import React from 'react';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MobileMenuButton from '../ui/MobileMenuButton/MobileMenuButton';
import Contacts from '../Contacts/Contacts';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <MobileMenuButton />
          <a href="/" className="header__logo-mobile">
            Lover
            <span>Flower</span>
          </a>
          <Logo />
          <Nav />
          <div className="header__actions">
            <Contacts />
          </div>
        </div>
      </div>
    </header>
  );
}
