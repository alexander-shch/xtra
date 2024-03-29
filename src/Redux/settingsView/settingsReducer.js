const INITIAL_STATE = {
  hidden: false,
};

const settingsView = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return { ...state, hidden: !state.hidden };
    case 'CLOSE_MENU':
      return { ...state, hidden: false };
    default:
      return state;
  }
};

export default settingsView;
