export const setAlert = (content, style) => (dispatch) => {
  dispatch({ type: 'SET_ALERT_MESSAGE', payload: { content, style } });
  setTimeout(() => {
    dispatch({ type: 'REMOVE_ALERT_MESSAGE' });
  }, 3000);
};
