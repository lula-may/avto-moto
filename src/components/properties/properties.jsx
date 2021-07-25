import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Properties({features}) {
  return (
    <dl className="properties">
      {features.map(({id, type, value}) => (
        <div key={id} className="properties__item">
          <dt>{type}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

Properties.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Properties;
