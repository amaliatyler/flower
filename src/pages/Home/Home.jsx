import React from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import Blur from '../../components/Blur/Blur';

export default function HomePage() {
  return (
    <main className="main">
      <HeroBlock />
      <CatalogBlock />
      <HowToOrder />
      <SpecialOccasion />
    </main>
  );
}

function HeroBlock() {
  return (
    <section className="home__hero hero-block">
      <div className="container">
        <div className="hero-block__bg">
          <div className="hero-block__gradient"></div>
        </div>
        <div className="hero-block__content">
          <h1 className="title hero-block__title">Flower Lover</h1>
          <p className="hero-block__text">
            Создаём для тех, кто ценит свежесть и изящество цветка
          </p>
          <PrimaryButton btnText="Смотреть каталог" />
          <Blur
            color="#249479"
            parentClassName="hero-block"
            blurAmount="170"
            width="358px"
            height="293px"
          />
          <Blur
            color="#7D2253"
            parentClassName="hero-block"
            blurAmount="140"
            width="472px"
            height="211px"
          />
        </div>
      </div>
    </section>
  );
}

function CatalogBlock() {
  return (
    <section className="catalog-section">
      <div className="container">
        <div className="catalog-section__wrapper">
          <h2 className="section-title catalog-section__title">Каталог</h2>
          <div className="catalog-section__grid">
            <div className="catalog-section__grid-item">
              <p className="catalog-section__text">
                У нас самый большой выбор цветов, букетов, открыток и подарков.
                Мы всегда поможем вам подобрать букет для вашего события, наш
                менеджер вас проконсультирует и поможет определиться с выбором
              </p>
              <p className="catalog-section__text">
                Ознакомьтесь с нашими разделами каталога
              </p>
            </div>
            <div className="catalog-section__grid-item">
              <h3
                className="catalog-section__grid-item-title"
                data-title="букеты">
                готовые букеты из сухоцветов
              </h3>
              <ul className="catalog-section__grid-item-list">
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">букеты</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">для интерьера</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">Композиции</a>
                </li>
              </ul>
              <a href="#" className="link catalog-section__link">
                Смотреть каталог
              </a>
            </div>
            <div className="catalog-section__grid-item">
              <h3
                className="catalog-section__grid-item-title"
                data-title="цветы">
                Цветы
              </h3>
              <ul className="catalog-section__grid-item-list">
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">Сборные букеты</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">Монобукеты</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">Композиции из цветов</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">розы</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">свадебные</a>
                </li>
              </ul>
              <a href="#" className="link catalog-section__link">
                Смотреть каталог
              </a>
            </div>
            <div className="catalog-section__grid-item">
              <h3
                className="catalog-section__grid-item-title"
                data-title="дополнительно">
                дополнительно
              </h3>
              <ul className="catalog-section__grid-item-list">
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">шары</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">игрушки</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">открытки</a>
                </li>
                <li className="catalog-section__grid-item-list-item">
                  <a href="#">упаковка</a>
                </li>
              </ul>
              <a href="#" className="link catalog-section__link">
                Смотреть каталог
              </a>
            </div>
          </div>
          <Blur
            width="707px"
            height="236px"
            color="#7D2253"
            blurAmount="120"
            parentClassName="catalog-section"
          />
          <Blur
            width="880px"
            height="211px"
            color="#43FFD2"
            blurAmount="120"
            parentClassName="catalog-section"
          />
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  return (
    <section className="order-section">
      <div className="container">
        <div className="order-section__wrapper">
          <h2 className="order-section__section-title section-title">
            Как сделать заказ
          </h2>
          <ul className="order-section__steps">
            <li className="order-section__step-item">
              <span className="order-section__step-number">1 шаг</span>
              <p className="order-section__step-descr">
                Выберите какие цветы или подарки вы хотите купить
              </p>
            </li>
            <li className="order-section__step-item">
              <span className="order-section__step-number">2 шаг</span>
              <p className="order-section__step-descr">
                Оформите заказ, и мы отправим вам подтверждение на электронную
                почту, а так же менеджер свяжется с вами по телефону или в
                WhatsApp
              </p>
            </li>
            <li className="order-section__step-item">
              <span className="order-section__step-number">3 шаг</span>
              <p className="order-section__step-descr">
                Наши флористы бережно подойдут к созданию букета цветов в самом
                начале дня или накануне
              </p>
            </li>
            <li className="order-section__step-item">
              <span className="order-section__step-number">4 шаг</span>
              <p className="order-section__step-descr">
                Один из наших курьеров или партнёров доставит ваш заказ по
                указанному адресу. Мы отправим вам сообщение в Whats App как
                только заказ будет доставлен
              </p>
            </li>
            <li className="order-section__step-item">
              <span className="order-section__step-number">5 шаг</span>
              <p className="order-section__step-descr">
                Наслаждайтесь цветами , если вы заказали их для дома или
                любовью, которой поделились, если вы заказали для друга
              </p>
            </li>
          </ul>
          <img
            src="./home/lover.svg"
            alt="Lover Flower"
            className="order-section__handwriting"
          />
        </div>
      </div>
      <img
        src="./home/order.png"
        alt="Decor element"
        className="order-section__bg"
      />
    </section>
  );
}

function SpecialOccasion() {
  return (
    <section className="special-occasion">
      <div className="container">
        <div className="special-occasion__wrapper"></div>
        <h2 className="section-title special-occasion__section-title">
          Особенный повод?
        </h2>
      </div>
    </section>
  );
}