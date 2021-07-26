import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ReviewForm from '../review-form/review-form';

function Popup(props) {
  const {onPopupClick} = props;
  const handleClick = useCallback((evt) => {
    if (evt.target.id === 'modal') {
      onPopupClick();
    }
  }, [onPopupClick]);

  return (
    <div
      onClick={handleClick}
      id="modal"
      className="overlay"
    >
      <ReviewForm onCloseButtonClick={onPopupClick} />
    </div>
  );
}

Popup.propTypes = {
  onPopupClick: PropTypes.func.isRequired,
};

export default Popup;
