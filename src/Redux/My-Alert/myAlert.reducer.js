const INITIAL_STATE = {
  view: false,
  content: null,
  style: null,
};

const myAlertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ALERT_MESSAGE':
      return {
        view: true,
        content: action.payload.content,
        style: action.payload.style,
      };
    case 'REMOVE_ALERT_MESSAGE':
      return { view: false, content: null, style: null };
    default:
      return state;
  }
};

export default myAlertReducer;
