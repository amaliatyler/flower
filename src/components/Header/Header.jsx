import React from 'react';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Nav />
          <div className="header__actions">
            <a href="tel:+375291136969" className="header__actions-phone">
              <span className="_icon-phone-sm"></span>
              +375 (29) 113-69-69
            </a>
            <button className="header__actions-cart _icon-cart">
              <span className="header__actions-cart-count">1</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
