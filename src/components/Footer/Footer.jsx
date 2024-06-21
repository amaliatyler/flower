import React from 'react';
import Logo from '../Logo/Logo';

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
            <ul className="footer__list">
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
            <ul className="contacts">
              <li className="contacts__item">
                <a
                  href="mailto:zakaz@loverflower.by"
                  className="contacts__info">
                  zakaz@loverflower.by
                </a>
                <span className="contacts__text">
                  Доставка 24/7 по договоренности с оператором
                </span>
              </li>
              <li className="contacts__item">
                <span className="contacts__info">ул. Тимирязева 67</span>
                <span className="contacts__text">
                  10:00 до 21:00
                  <span className="d-block">без выходных</span>
                </span>
              </li>
              <li className="contacts__item">
                <a href="tel:+375291136969" className="contacts__info">
                  +375 (29) 113-69-69
                </a>
                <span className="contacts__text">
                  прием звонков круглосуточно
                </span>
              </li>
              <li className="contacts__item">
                <ul className="contacts__social social">
                  <li className="social__item">
                    <a href="#" className="social__link _icon-insta"></a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link _icon-whatsapp"></a>
                  </li>
                  <li className="social__item">
                    <a href="#" className="social__link _icon-phone"></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
