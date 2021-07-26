const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
};

const ActionCreator = {
  addComment: (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment,
  }),
};

export {ActionCreator, ActionType};
