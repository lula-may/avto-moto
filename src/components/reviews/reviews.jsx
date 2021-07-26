import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Review from '../review/review';
import {getComments} from '../../store/selectors';
import {PROP_COMMENT} from '../../props';

function Reviews({comments}) {
  return (
    <section className="reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <Review
            key={comment.id}
            review={comment}
          />
        ))}
      </ul>
      <button className="reviews__button button button--light" type="button">Оставить отзыв</button>
    </section>
  );
}

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PROP_COMMENT).isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

export default connect(mapStateToProps)(Reviews);
