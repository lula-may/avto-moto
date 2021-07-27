import React, {lazy, Suspense, useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Properties from '../properties/properties';
import {Tab, TabIdToTitle} from '../../const';
import {getClassName} from '../../utils';

const Contacts = lazy(() => import('../contacts/contacts'));
const Reviews = lazy(() => import('../reviews/reviews'));
const renderLoader = () => <p>Loading</p>;

function Tabs({features}) {
  const [activeTab, setActiveTab] = useState(Tab.PROPERTIES);
  const tabs = useMemo(() => Object.values(Tab), []);
  const handleTabClick = useCallback((evt) => setActiveTab(evt.target.id), []);

  const content = useMemo(() => {
    switch (activeTab) {
      case Tab.REVIEWS:
        return (
          <Suspense fallback={renderLoader()}>
            <Reviews />
          </Suspense>
        );
      case Tab.CONTACTS:
        return (
          <Suspense fallback={renderLoader()}>
            <Contacts />
          </Suspense>
        );
      default: return <Properties features={features} />;
    }
  }, [activeTab, features]);

  return (
    <section className="tabs">
      <h2 className="visually-hidden">Об автомобиле</h2>
      <div className="tabs__nav">
        {tabs.map((tabId) => {
          const isActive = tabId === activeTab;
          const className = getClassName('tabs__button', isActive && 'tabs__button--active');
          const title = TabIdToTitle[tabId];
          return (
            <button
              key={tabId}
              className={className}
              id={tabId}
              onClick={handleTabClick}
              type="button"
            >{title}
            </button>
          );
        })}
      </div>
      <div className="tabs__content">
        {content}
      </div>
    </section>
  );
}

Tabs.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
