import React, {useState, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Properties from '../properties/properties';
import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
import {Tab, TabIdToTitle} from '../../const';
import {getClassName} from '../../utils';
function Tabs({features}) {
  const [activeTab, setActiveTab] = useState(Tab.PROPERTIES);
  const tabs = useMemo(() => Object.values(Tab), []);
  const handleTabClick = useCallback((evt) => setActiveTab(evt.target.id), []);

  const content = useMemo(() => {
    switch (activeTab) {
      case Tab.REVIEWS:
        return <Reviews />;
      case Tab.CONTACTS:
        return <Contacts />;
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
