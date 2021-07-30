import React, {Fragment, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import {getClassName} from '../../utils';
const RATINGS = ['1', '2', '3', '4', '5'];

function Rating({onRatingChange}) {
  const [currentRating, setCurrentRating] = useState('0');

  const onChange = useCallback((evt) => {
    const value = evt.target.value;
    onRatingChange(evt);
    setCurrentRating(value);
  }, [onRatingChange]);

  return (
    <div className="rating">
      {RATINGS.map((value) => {
        const isActive = Number(currentRating) >= Number(value);
        return (
          <Fragment key={value}>
            <input
              className="visually-hidden"
              id={`${value}-stars`}
              name="rating"
              onChange={onChange}
              type="radio"
              value={value}
              checked={currentRating === value}
            />
            <label htmlFor={`${value}-stars`}>
              <svg className={getClassName('rating__image', isActive && 'rating__image--active')} width="27" height="25">
                <use xlinkHref="#star"></use>
              </svg>
            </label>
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
