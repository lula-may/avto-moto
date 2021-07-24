import React from 'react';
import './style.scss';

export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <div className="contacts__container">
        <div className="contacts__text">
          <div className="contacts__item">
            <h3>Адрес</h3>
            <p>Санкт-Петербург, <br/> набережная реки Карповки, дом 5</p>
          </div>
          <div className="contacts__item">
            <h3>Режим работы</h3>
            <p>Ежедневно, с 10:00 до 21:00</p>
          </div>
          <div className="contacts__item">
            <h3>Телефон</h3>
            <a href="tel:+78003335599">8 (800) 333-55-99</a>
          </div>
          <div className="contacts__item">
            <h3>E-mail</h3>
            <a href="email:info@avto-moto.ru">info@avto-moto.ru</a>
          </div>
        </div>
        <div className="contacts__map"></div>
      </div>
    </section>
  );
}
