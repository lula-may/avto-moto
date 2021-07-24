import React from 'react';
import './style.scss';

// import Properties from '../properties/properties';
import Reviews from '../reviews/reviews';
export default function Tabs() {
  return (
    <section className="tabs">
      <h2 className="visually-hidden">Об автомобиле</h2>
      <div className="tabs__nav">
        <button className="tabs__button tabs__button--active button" id="properties" type="button">Характеристики</button>
        <button className="tabs__button button" id="reviews" type="button">Отзывы</button>
        <button className="tabs__button button" id="contacts" type="button">Контакты</button>
      </div>
      <div className="tabs__content">
        <Reviews />
      </div>
    </section>
  );
}
