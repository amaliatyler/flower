import React from 'react';
import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__column">
            <Logo />
            <p className="footer__title">Рекизиты</p>
            <p className="footer__text">
              ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
              Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
              BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
              Минск, улица Толстого
            </p>
          </div>
          <div className="footer__column">
            <p className="footer__title">Каталог</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Популярное
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Сухоцветы
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Букеты роз
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Композиции из цветов
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Индивидуальный букет
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Букет на праздник
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Упаковка подарков
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Шары
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Открытки
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Конверты
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <p className="footer__title">Букет</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для девушки
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для мужчины
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для жены
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для мамы
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для коллеги
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для начальника
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для дочки
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для детей
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Для женщины
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <ul className="footer__list footer__list_titles">
              <li className="footer__item">
                <a href="#" className="footer__title">
                  Доставка и оплата
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__title">
                  О нас
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__title">
                  FAQ
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__title">
                  Контакты
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__title">
                  для корпоративных клиентов
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <Contacts />
          </div>
        </div>
      </div>
    </footer>
  );
}
