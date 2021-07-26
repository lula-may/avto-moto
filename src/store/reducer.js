import {ActionType} from './actions';
import { auto } from '../data/auto';
import { comments } from '../data/comments';

const initialState = {
  currentAuto: auto,
  comments: comments,
  isPopupOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case ActionType.CLOSE_POPUP:
      return {
        ...state,
        isPopupOpen: false,
      };
    case ActionType.OPEN_POPUP:
      return {
        ...state,
        isPopupOpen: true,
      };
    default:
      return state;
  }
};

export {reducer};
