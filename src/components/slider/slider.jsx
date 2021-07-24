import React from 'react';
import './style.scss';

export default function Slider() {
  return (
    <section className="slider">
      <h2 className="visually-hidden">Фото галерея</h2>
      <div className="slider__image" width="20" height="13">
        <img src="./img/desktop_slide_1.jpg" alt="Марпех 11 общий вид" srcSet="./img/desktop_slide_1.jpg 2x" />
      </div>
      <div className="slider__gallery">
        <button className="slider__button control" id="back" aria-label="Назад" disabled>
          <svg className="control__icon">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
        <ul className="slider__list">
          <li className="slider__preview">
            <img src="./img/desktop_slide_1.jpg" alt="Марпех 11. Общий вид" />
          </li>
          <li className="slider__preview">
            <img src="./img/desktop_slide_2.jpg" alt="Марпех 11. Салон" />
          </li>
          <li className="slider__preview">
            <img src="./img/desktop_slide_3.jpg" alt="Марпех 11. Спидометр" />
          </li>
        </ul>
        <button className="slider__button control" id="forward">Вперед
          <svg className="slider__icon" width="20" height="13">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
      </div>
    </section>
  );
}
