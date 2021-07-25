import React from 'react';

import './style.scss';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <ul className="main-footer__menu">
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Корпоративным клиентам</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Клиентам</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Аренда авто</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Каршеринг</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Как продать авто</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Trade-in</a>
          </li>
          <li className="main-footer__item">
            <a href="#" className="main-footer__link">Test drive</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
