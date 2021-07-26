import {ActionType} from './actions';
import { auto } from '../data/auto';
import { comments } from '../data/comments';

const initialState = {
  currentAuto: auto,
  comments: comments,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

export {reducer};
