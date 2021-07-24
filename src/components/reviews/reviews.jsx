import React from 'react';
import './style.scss';
import Review from '../review/review';

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <ul className="reviews__list">
        <Review />
      </ul>
      <button className="reviews__button button button--light" type="button">Оставить отзыв</button>
    </section>
  );
}
