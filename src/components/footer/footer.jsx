import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <ul className="main-footer__menu">
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Корпоративным клиентам</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Клиентам</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Аренда авто</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Каршеринг</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Как продать авто</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Trade-in</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/" className="main-footer__link">Test drive</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
