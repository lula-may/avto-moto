import React, {Fragment} from 'react';
import './style.scss';

import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Popup from '../popup/popup';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import {auto} from '../../data/auto';

const {features, images, info} = auto;

function App() {
  return (
    <Fragment>
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
      <Popup />
    </Fragment>
  );
}

export default App;
