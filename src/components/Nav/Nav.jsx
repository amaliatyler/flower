import React from 'react';
import Search from '../Search/Search';

export default function Nav() {
  return (
    <nav className="menu__body">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">
            Главная
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Каталог
          </a>
          <ul className="menu__sub-list">
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Популярное
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Сборные букеты
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Монобукеты
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Розы
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                свадебные
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Композиции из цветов к коробке
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Интерьерные композиции
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Осенние
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Индивидуальный букет
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Cухоцветы
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Горшечные
              </a>
            </li>
            <li className="menu__sub-item">
              <a href="" className="menu__sub-link">
                Дополнительно
              </a>
            </li>
          </ul>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Доставка и оплата
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            О Нас
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Контакты
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            FAQ
          </a>
        </li>
      </ul>
      <Search />
    </nav>
  );
}
