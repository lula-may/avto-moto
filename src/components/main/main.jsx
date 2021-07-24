import React, {Fragment} from 'react';
import './style.scss';

import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Popup from '../popup/popup';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

export default function Main() {
  return (
    <Fragment>
      <Header />
      <main className="page-main">
        <div className="page-main__container">
          <article className="auto">
            <div className="auto__column auto__column--left">
              <Slider />
            </div>
            <div className="auto__column auto__column--right">
              <Info />
            </div>
          </article>
          <Tabs />
        </div>
      </main>
      <Footer />
      <Popup />
    </Fragment>
  );
}
