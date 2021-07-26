import {createSelector} from 'reselect';
const getAuto = (state) => state.currentAuto;

const getComments = (state) => state.comments;

const getAutoInfo = createSelector(
  getAuto,
  (auto) => auto.info,
);

const getAutoImages = createSelector(
  getAuto,
  (auto) => auto.images,
);

const getAutoFeatures = createSelector(
  getAuto,
  (auto) => auto.features,
);

export {getAutoImages, getAutoInfo, getAutoFeatures, getComments};
