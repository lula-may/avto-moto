import React from 'react';
import './style.scss';

export default function Properties() {
  return (
    <dl className="properties">
      <div className="properties__item">
        <dt>Трансмиссия</dt>
        <dd>Роботизированная</dd>
      </div>
      <div className="properties__item">
        <dt>Мощность двигателя, л.с.</dt>
        <dd>249</dd>
      </div>
    </dl>
  );
}
