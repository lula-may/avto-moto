import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Slider(props) {
  const {images} = props;
  const imagesCount = images.length;
  const [index, setIndex] = useState(0);
  const handleBackButtonClick = useCallback((evt) => {
    evt.preventDefault();
    setIndex((prev) => prev - 1);
  }, []);

  const handleForwardButtonClick = useCallback((evt) => {
    evt.preventDefault();
    setIndex((prev) => prev + 1);
  }, []);

  const isBackButtonDisabled = useMemo(() => index === 0, [index]);
  const isForwardButtonDisabled = useMemo(() => index === imagesCount - 1,[index, imagesCount]);
  const {srcUrl, altText} = images[index];

  return (
    <section className="slider">
      <h2 className="visually-hidden">Фото галерея</h2>
      <div className="slider__image">
        <img src={srcUrl} alt={altText} />
        <span className="slider__mark">New Model</span>
      </div>
      <div className="slider__gallery">
        <button
          className="slider__button control"
          onClick={handleBackButtonClick}
          id="back"
          aria-label="Назад"
          disabled={isBackButtonDisabled}
        >
          <svg className="control__icon">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
        <ul className="slider__list">
          {images.map(({id, srcUrl: src, altText: alt}) => (
            <li key={id} className="slider__preview">
              <img src={src} alt={alt} />
            </li>
          ))}
        </ul>
        <button
          className="slider__button control"
          onClick={handleForwardButtonClick}
          id="forward"
          aria-label="Вперед"
          disabled={isForwardButtonDisabled}
        >
          <svg className="slider__icon" width="20" height="13">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </button>
      </div>
    </section>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    srcUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  })).isRequired,
};
