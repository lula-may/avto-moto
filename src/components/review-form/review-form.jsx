import React from 'react';
import './style.scss';

export default function ReviewForm() {
  return (
    <article className="review-form">
      <h1 className="review-form__header">Оставить отзыв</h1>
      <button className="review-form__close" type="button">Закрыть</button>
      <form action="#" method="post" id="review-form">
        <div className="review-form__container">
          <div className="review-form__column">
            <p className="review-form__field">
              <label htmlFor="name" className="visually-hidden">Введите ваше имя</label>
              <input type="text" id="name" name="user-name" placeholder="Имя" required/>
              <span className="review-form__message">Пожалуйста, заполните поле</span>
            </p>
            <p className="review-form__field">
              <label htmlFor="advantages" className="visually-hidden">Достоинства</label>
              <input type="text" id="advantages" name="advantages" placeholder="Достоинства"/>
            </p>
            <p className="review-form__field">
              <label htmlFor="disadvantages" className="visually-hidden">Недостатки</label>
              <input type="text" id="disadvantages" name="disadvantages" placeholder="Недостатки"/>
            </p>
          </div>
          <div className="review-form__column">
            <div className="review-form__rating">
              <span className="review-form__label">Оцените товар:</span>
              <div className="rating">
                <input className="visually-hidden" type="radio" name="rating" id="5-stars" value="5" title="Отлично" />
                <label htmlFor="5-stars">
                  <svg className="rating__image" width="27" height="25">
                    <use xlinkHref="#star"></use>
                  </svg>
                </label>
                <input className="visually-hidden" type="radio" name="rating" id="4-stars" value="4" title="Хорошо" />
                <label htmlFor="4-stars">
                  <svg className="rating__image" width="27" height="25">
                    <use xlinkHref="#star"></use>
                  </svg>
                </label>
                <input className="visually-hidden" type="radio" name="rating" id="3-stars" value="3" title="Нормально" />
                <label htmlFor="3-stars">
                  <svg className="rating__image" width="27" height="25">
                    <use xlinkHref="#star"></use>
                  </svg>
                </label>
                <input className="visually-hidden" type="radio" name="rating" id="2-stars" value="2" title="Плохо" />
                <label htmlFor="2-stars">
                  <svg className="rating__image" width="27" height="25">
                    <use xlinkHref="#star"></use>
                  </svg>
                </label>
                <input className="visually-hidden" type="radio" name="rating" id="1-stars" value="1" title="Ужасно" />
                <label htmlFor="1-stars">
                  <svg className="rating__image" width="27" height="25">
                    <use xlinkHref="#star"></use>
                  </svg>
                </label>
              </div>
            </div>
            <p className="review-form__field">
              <label htmlFor="comment" className="visually-hidden">Напишите здесь свой комментарий</label>
              <textarea id="comment" name="comment" placeholder="Комментарий" required/>
            </p>
          </div>
        </div>
        <button className="review-form__button button button--bright" type="submit">Оставить отзыв</button>
      </form>
    </article>
  );
}
