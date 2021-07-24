import React from 'react';
import './style.scss';

export default function Info() {
  return (
    <section className="about">
      <h1>Марпех 11</h1>
      <ul className="features">
        <li className="features__item features__item--fuel">бензин</li>
        <li className="features__item features__item--transmisson">механика</li>
        <li className="features__item features__item--power">100 л.с.</li>
        <li className="features__item features__item--capacity">1,4 л</li>
      </ul>
      <div className="about__price price">
        <span className="price__actual">2 300 000 &#8381;</span>
        <span className="price__before">2 400 000 &#8381;</span>
      </div>
      <div className="about__wrapper">
        <a href="#" className="about__link button button--bright" >Оставить заявку</a>
        <a href="#" className="about__link button button button button--light" type="button">в кредит от 11 000 &#8381;</a>
      </div>
    </section>
  );
}
