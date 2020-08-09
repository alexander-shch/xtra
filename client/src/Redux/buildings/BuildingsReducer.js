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
        buildings: action.payload,
        isPending: false,
        error: null,
      };
    case 'POST_NEW_BUILDING_SUCSESS':
      return { ...state, buildings: [...state.buildings, action.payload] };
    case 'POST_NEW_BUILDING_FAILED':
    case 'BUILDING_FETCH_FAILED':
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export default BuildingsReducer;
