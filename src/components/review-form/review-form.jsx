import React, {Fragment, useCallback, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';
import {ActionCreator} from '../../store/actions';

const RATINGS = [5, 4, 3, 2, 1];

function ReviewForm(props) {
  const {onCloseButtonClick, onCommentSubmit} = props;
  const [userName, setUserName] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [disadvantage, setDisadvantage] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const onUserNameChange = useCallback((evt) => {
    evt.preventDefault();
    setUserName(evt.target.value);
  }, []);

  const onAdvantageChange = useCallback((evt) => {
    evt.preventDefault();
    setAdvantage(evt.target.value);
  }, []);

  const onDisadvantageChange = useCallback((evt) => {
    evt.preventDefault();
    setDisadvantage(evt.target.value);
  }, []);

  const onTextChange = useCallback((evt) => {
    evt.preventDefault();
    setText(evt.target.value);
  }, []);

  const onRatingChange = useCallback((evt) => {
    evt.preventDefault();
    setRating(evt.target.value);
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    const newComment = {
      id: Math.round(Math.random() * 1000),
      user: {
        id: 0,
        name: userName,
      },
      comment: {
        advantage,
        disadvantage,
        text,
      },
      rating: Number(rating),
    };
    onCommentSubmit(newComment);
  }, [advantage, disadvantage, text, rating, onCommentSubmit, userName]);

  return (
    <article className="review-form">
      <h1 className="review-form__header">Оставить отзыв</h1>
      <button
        className="review-form__close"
        onClick={onCloseButtonClick}
        type="button"
      >Закрыть
      </button>
      <form action="#" method="post" id="review-form" onSubmit={handleSubmit}>
        <div className="review-form__container">
          <div className="review-form__column">
            <p className="review-form__field">
              <label htmlFor="name" className="visually-hidden">Введите ваше имя</label>
              <input
                type="text"
                id="name"
                name="user-name"
                placeholder="Имя"
                onChange={onUserNameChange}
                required
              />
              <span className="review-form__message">Пожалуйста, заполните поле</span>
            </p>
            <p className="review-form__field">
              <label htmlFor="advantages" className="visually-hidden">Достоинства</label>
              <input
                type="text"
                id="advantages"
                name="advantages"
                onChange={onAdvantageChange}
                placeholder="Достоинства"
              />
            </p>
            <p className="review-form__field">
              <label htmlFor="disadvantages" className="visually-hidden">Недостатки</label>
              <input
                type="text"
                id="disadvantages"
                name="disadvantages"
                onChange={onDisadvantageChange}
                placeholder="Недостатки"
              />
            </p>
          </div>
          <div className="review-form__column">
            <div className="review-form__rating">
              <span className="review-form__label">Оцените товар:</span>
              <div className="rating">
                {RATINGS.map((value) => (
                  <Fragment key={value}>
                    <input
                      className="visually-hidden"
                      id={`${value}-stars`}
                      name="rating"
                      onChange={onRatingChange}
                      type="radio"
                      value={value}
                    />
                    <label htmlFor={`${value}-stars`}>
                      <svg className="rating__image" width="27" height="25">
                        <use xlinkHref="#star"></use>
                      </svg>
                    </label>
                  </Fragment>
                ))}
              </div>
            </div>
            <p className="review-form__field">
              <label htmlFor="comment" className="visually-hidden">Напишите здесь свой комментарий</label>
              <textarea
                id="comment"
                name="comment"
                onChange={onTextChange}
                placeholder="Комментарий"
                required
              />
            </p>
          </div>
        </div>
        <button className="review-form__button button button--bright" type="submit">Оставить отзыв</button>
      </form>
    </article>
  );
}

ReviewForm.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCloseButtonClick: () => dispatch(ActionCreator.closePopup()),

  onCommentSubmit: (comment) => {
    dispatch(ActionCreator.addComment(comment));
    dispatch(ActionCreator.closePopup());
  },
});

export default connect(null, mapDispatchToProps)(ReviewForm);
