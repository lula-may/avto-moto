import React, {Fragment, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import {getClassName} from '../../utils';
const RATINGS = ['1', '2', '3', '4', '5'];

function Rating({onRatingChange}) {
  const [currentRating, setCurrentRating] = useState('0');

  const onChange = useCallback((evt) => {
    const value = evt.target.value;
    onRatingChange(value);
    setCurrentRating(value);
  }, [onRatingChange]);

  return (
    <div className="rating">
      <input
        className="visually-hidden"
        id="0-stars"
        name="rating"
        type="radio"
        value="0"
        onChange={onChange}
        checked={currentRating === '0'}
      />
      {RATINGS.map((value) => {
        const isActive = Number(currentRating) >= Number(value);
        return (
          <Fragment key={value}>
            <label htmlFor={`${value}-stars`}>
              <svg className={getClassName('rating__image', isActive && 'rating__image--active')} width="27" height="25">
                <use xlinkHref="#star"></use>
              </svg>
            </label>
            <input
              className="visually-hidden"
              id={`${value}-stars`}
              name="rating"
              onChange={onChange}
              type="radio"
              value={value}
              checked={currentRating === value}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

Rating.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
