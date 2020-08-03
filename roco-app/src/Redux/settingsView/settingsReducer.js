const INITAL_STATE = {
  hidden: false,
};

const settingsView = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_VIEW":
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default settingsView;
