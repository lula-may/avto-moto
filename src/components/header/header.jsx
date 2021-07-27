import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo logo">
          <Link className="logo__link" to="/">
            <img src="./img/logo.png" alt="Логотип Авто-Мото" width="134" height="55"/>
          </Link>
        </div>
        <nav className="header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/">Автомобили</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/">Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/">Услуги </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="/">Вакансии</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
