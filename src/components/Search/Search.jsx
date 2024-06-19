import React, { useState } from 'react';

export default function Search() {
  const [isFormActive, setFormActive] = useState(false);

  const openSearchForm = () => {
    if (!isFormActive) {
      setFormActive(true);
    }
  };

  const closeSearchForm = () => {
    if (isFormActive) {
      setFormActive(false);
    }
  };

  return (
    <div className={`search-form ${isFormActive ? 'active' : ''}`}>
      <button
        type="button"
        className="search-form__icon _icon-loupe"
        onClick={openSearchForm}>
        <span>Поиск</span>
      </button>
      <form action="#" className="search-form__item">
        <button type="submit" className="search-form__btn _icon-loupe"></button>
        <input
          autoComplete="off"
          type="text"
          name="form[]"
          placeholder="Введите свой запрос"
          className="search-form__input"
        />
      </form>
      <button
        type="button"
        className="search-form__close"
        onClick={closeSearchForm}>
        <span className="icon-cross"></span>
        <span className="visually-hidden">Close</span>
      </button>
    </div>
  );
}
