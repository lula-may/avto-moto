import React, { useCallback, useEffect } from 'react';
import {YMaps} from 'react-yandex-maps';
import PropTypes from 'prop-types';
import './style.scss';

import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Popup from '../popup/popup';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import {auto} from '../../data/auto';
import {getPopupStatus} from '../../store/selectors';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';

const ESC_KEY = 'Escape';
const {features, images, info} = auto;

function App(props) {
  const {isPopupOpen = false, closePopup} = props;

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  }, [closePopup]);

  useEffect(() => (
    isPopupOpen
      ? document.addEventListener('keydown', handleEscKeyDown)
      : document.removeEventListener('keydown', handleEscKeyDown)
  ), [handleEscKeyDown, isPopupOpen]);

  return (
    <YMaps>
      <Header />
      <main className="page-main">
        <div className="page-main__container">
          <article className="auto">
            <div className="auto__column auto__column--left">
              <Slider images={images} />
            </div>
            <div className="auto__column auto__column--right">
              <Info properties={info} />
            </div>
          </article>
          <Tabs features={features}/>
        </div>
      </main>
      <Footer />
      {isPopupOpen && <Popup onPopupClick={closePopup}/>}
    </YMaps>
  );
}

App.propTypes = {
  isPopupOpen: PropTypes.bool,
  closePopup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isPopupOpen: getPopupStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup: () => dispatch(ActionCreator.closePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
