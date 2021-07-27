import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {PROP_COMMENT} from '../../props';
import moment from 'moment';
import 'moment/locale/ru';

import './style.scss';

export default function Review({review}) {
  const {
    comment: {advantage, disadvantage, text},
    date,
    rating,
    user: {name},
  } = review;
  const ratingStyle = useMemo(() => ({width: `${rating * 20}%`}), [rating]);

  const commentDate = useMemo(() => moment(date), [date]);
  const dateTime = useMemo(() => commentDate.format('YYYY-MM-DDTHH:mm'), [commentDate]);
  const dateInterval = commentDate.fromNow();

  return (
    <li className="review">
      <h3>{name}</h3>
      <ul className="review__shorts">
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
        <time className="review__time" dateTime={dateTime}>{dateInterval}</time>
        <Link to="/" className="review__answer">Ответить</Link>
      </footer>
    </li>
  );
}

Review.propTypes = PROP_COMMENT.isRequired;
