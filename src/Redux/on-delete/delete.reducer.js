const INTIAL_STATE = {
  confirmMessageDisplay: false,
  itemToDelete: null,
};

const deleteReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'DISPLAY_DELETE_CONFIRM':
      return { confirmMessageDisplay: true, itemToDelete: action.payload };
    case 'CLOSE_DELETE_CONFIRM':
      return { confirmMessageDisplay: false, itemToDelete: null };
    default:
      return state;
  }
};

export default deleteReducer;
