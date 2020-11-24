export const changeSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text,
});

export const cleanSearchField = () => ({
  type: 'CLEAN_SEARCH_FIELD',
});
