const INTIAL_STATE = {
  buildings: [],
  isPending: false,
  error: null,
};

const BuildingsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'BUILDING_FETCH_START':
      return { ...state, isPending: true };
    case 'BUILDING_FETCH_SUCSESS':
      return {
        ...state,
        buildings: action.payload,
        isPending: false,
        error: null,
      };
    case 'BUILDING_FETCH_FAILED':
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export default BuildingsReducer;
