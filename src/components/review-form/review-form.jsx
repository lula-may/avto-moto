import React, {useCallback, useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';
import Rating from '../rating/rating';
import {ActionCreator} from '../../store/actions';
import {getClassName} from '../../utils';


const getDataFromLocalStorage = () => {
  const name = localStorage.getItem('userName');
  const id = Math.round(Math.random() * 1000);
  const advantage = localStorage.getItem('advantage') ;
  const disadvantage = localStorage.getItem('disadvantage');
  const text = localStorage.getItem('comment');
  const rating = localStorage.getItem('rating');

  return {
    id,
    user: {
      id: 0,
      name,
    },
    comment: {
      advantage,
      disadvantage,
      text,
    },
    rating: Number(rating),
  };

};

function ReviewForm(props) {
  const {onCloseButtonClick, onCommentSubmit} = props;
  const nameRef = useRef();
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (nameRef.current !== null) {
      localStorage.clear();
      nameRef.current.focus();
    }
  }, []);

  const onChange = useCallback((evt) => {
    const {name, value} = evt.target;
    localStorage.setItem(name, value);
  }, []);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    const newComment = getDataFromLocalStorage();
    onCommentSubmit(newComment);
  }, [onCommentSubmit]);

  const handleInvalid = useCallback(() => setIsInvalid(true), []);

  return (
    <article className={getClassName('review-form', isInvalid && 'review-form--invalid')}>
      <h1 className="review-form__header">Оставить отзыв</h1>
      <button
        className="review-form__close"
        onClick={onCloseButtonClick}
        type="button"
      >Закрыть
      </button>
      <form
        action="#"
        method="post"
        id="review-form"
        onInvalid={handleInvalid}
        onSubmit={handleSubmit}
      >
        <div className="review-form__container">
          <div className="review-form__column">
            <p className="review-form__field">
              <label htmlFor="name" className="visually-hidden">Введите ваше имя</label>
              <input
                id="userName"
                name="userName"
                onChange={onChange}
                ref={nameRef}
                type="text"
                placeholder="Имя"
                required
              />
              <span className="review-form__message">Пожалуйста, заполните поле</span>
            </p>
            <p className="review-form__field">
              <label htmlFor="advantage" className="visually-hidden">Достоинства</label>
              <input
                type="text"
                id="advantage"
                name="advantage"
                onChange={onChange}
                placeholder="Достоинства"
              />
            </p>
            <p className="review-form__field">
              <label htmlFor="disadvantage" className="visually-hidden">Недостатки</label>
              <input
                type="text"
                id="disadvantage"
                name="disadvantage"
                onChange={onChange}
                placeholder="Недостатки"
              />
            </p>
          </div>
          <div className="review-form__column">
            <div className="review-form__rating">
              <span className="review-form__label">Оцените товар:</span>
              <Rating
                onRatingChange={onChange}
              />
            </div>
            <p className="review-form__field">
              <label htmlFor="comment" className="visually-hidden">Напишите здесь свой комментарий</label>
              <textarea
                id="comment"
                name="comment"
                onChange={onChange}
                placeholder="Комментарий"
                required
              />
              <span className="review-form__message">Пожалуйста, заполните поле</span>
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
