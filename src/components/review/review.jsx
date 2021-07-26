import React, { useMemo } from 'react';
import {PROP_COMMENT} from '../../props';
import './style.scss';

export default function Review({review}) {
  const {
    comment: {advantage, disadvantage, text},
    rating,
    user: {name},
  } = review;
  const ratingStyle = useMemo(() => ({width: `${rating * 20}%`}), [rating]);
  return (
    <li className="review">
      <h3>{name}</h3>
      <ul className="review_shorts">
        <li className="review__item review__item--plus">
          <h4>Достоинства</h4>
          <p>{advantage}</p>
        </li>
        <li className="review__item review__item--minus">
          <h4>Недостатки</h4>
          <p>{disadvantage}</p>
        </li>
      </ul>
      <h4>Комментарий</h4>
      <p>{text}</p>
      <div className="review__rating">
        <span className="review__stars stars">
          <span style={ratingStyle}></span>
        </span>
        <span className="review__label">Советует</span>
      </div>
      <footer className="review__footer">
        <span className="review__time" dateTime="2021-07-24T12:15">1 минуту назад</span>
        <a href="#" className="review__answer">Ответить</a>
      </footer>
    </li>
  );
}

Review.propTypes = PROP_COMMENT.isRequired;
