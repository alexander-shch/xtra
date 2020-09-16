const INTIAL_STATE = {
  searchfield: '',
};

const searchField = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_FIELD':
      return { ...state, searchfield: action.payload };

    default:
      return state;
  }
};

export default searchField;
