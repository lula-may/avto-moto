const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  OPEN_POPUP: 'OPEN_POPUP',
  CLOSE_POPUP: 'CLOSE_POPUP',
};

const ActionCreator = {
  addComment: (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment,
  }),

  closePopup: () => ({
    type: ActionType.CLOSE_POPUP,
  }),

  openPopup: () => ({
    type: ActionType.OPEN_POPUP,
  }),
};

export {ActionCreator, ActionType};
