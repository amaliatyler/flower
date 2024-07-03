import React from 'react';

export default function Contacts() {
  return (
    <ul className="contacts">
      <li className="contacts__item">
        <a href="mailto:zakaz@loverflower.by" className="contacts__info">
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
        <a href="tel:+375291136969" className="contacts__info contacts__tel">
          +375 (29) 113-69-69
        </a>
        <span className="contacts__text">прием звонков круглосуточно</span>
      </li>
      <li className="contacts__item">
        <button className="contacts__call">
          <span className="_icon-phone-sm"></span>
          <span>Заказать звонок</span>
        </button>
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
      <li className="contacts__item">
        <button className="contacts__cart _icon-cart">
          <span className="contacts__cart-icon">1</span>
        </button>
      </li>
    </ul>
  );
}
