export const deleteConfirmMessage = (item) => ({
  type: 'DISPLAY_DELETE_CONFIRM',
  payload: item,
});

export const closeConfirmMessage = () => ({
  type: 'CLOSE_DELETE_CONFIRM',
});
