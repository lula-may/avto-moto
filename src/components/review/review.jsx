import React from 'react';
import './style.scss';

export default function Review() {
  return (
    <li className="review">
      <h3>Борис Иванов</h3>
      <ul className="review_shorts">
        <li className="review__item review__item--plus">
          <h4>Достоинства</h4>
          <p>мощность, внешний вид</p>
        </li>
        <li className="review__item review__item--minus">
          <h4>Недостатки</h4>
          <p>Слабые тормозные колодки (пришлось заменить)</p>
        </li>
      </ul>
      <h4>Комментарий</h4>
      <p>
            Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
      </p>
      <div className="review__rating">
        <span className="review__stars stars">
          <span style={{width: '60%'}}></span>
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
