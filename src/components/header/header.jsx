import React from 'react';
import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo logo">
          <a className="logo__link">
            <img src="./img/logo.png" alt="Логотип Авто-Мото" width="134" height="55"/>
          </a>
        </div>
        <nav className="header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Автомобили</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Контакты</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Услуги </a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
