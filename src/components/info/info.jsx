import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Info({properties}) {
  const {
    capacity,
    fuel,
    power,
    price,
    priceBefore,
    transmisson,
    title,
  } = properties;

  return (
    <section className="about">
      <h1>{title}</h1>
      <ul className="features">
        <li className="features__item features__item--fuel">{fuel}</li>
        <li className="features__item features__item--transmisson">{transmisson}</li>
        <li className="features__item features__item--power">{power}</li>
        <li className="features__item features__item--capacity">{capacity}</li>
      </ul>
      <div className="about__price price">
        <span className="price__actual">{price} &#8381;</span>
        <span className="price__before">{priceBefore} &#8381;</span>
      </div>
      <div className="about__wrapper">
        <a href="#" className="about__link button button--bright" >Оставить заявку</a>
        <a href="#" className="about__link button button button button--light">в кредит от 11 000 &#8381;</a>
      </div>
    </section>
  );
}

Info.propTypes = {
  properties: PropTypes.shape({
    capacity: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceBefore: PropTypes.string.isRequired,
    transmisson: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Info;
