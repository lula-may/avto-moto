import PropTypes from 'prop-types';

const PROP_COMMENT = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
  }).isRequired,
  comment: PropTypes.shape({
    advantage: PropTypes.string,
    disadvantage: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
});

export {PROP_COMMENT};
