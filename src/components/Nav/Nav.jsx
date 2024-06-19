import React from 'react';
import Search from '../Search/Search';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#">Главная</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Каталог</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Доставка и оплата</a>
        </li>
        <li className="nav__list-item">
          <a href="#">О Нас</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Контакты</a>
        </li>
        <li className="nav__list-item">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <Search />
    </nav>
  );
}
