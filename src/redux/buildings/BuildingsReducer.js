const INTIAL_STATE = {
  buildings: [],
  isPending: true,
  singleBuilding: null,
  error: null,
};

const BuildingsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'BUILDING_FETCH_START':
    case 'UPDATE_BUILDING_START':
    case 'DELETE_BUILDING_START':
    case 'GET_SINGLE_BUILDING_START':
      return state;
    case 'BUILDING_FETCH_SUCSESS':
      return {
        buildings: action.payload,
        isPending: false,
        error: null,
      };

    case 'GET_SINGLE_BUILDING_SUCSESS':
      return { ...state, isPending: false, singleBuilding: action.payload };
    case 'POST_NEW_BUILDING_SUCSESS':
      return { ...state, buildings: [...state.buildings, action.payload] };

    case 'UPDATE_BUILDING_SUCSESS':
      const { buildings } = state;
      const index = buildings.findIndex(
        (building) => building._id === action.payload._id
      );
      buildings[index] = action.payload;
      return { ...state, isPending: false, buildings };
    case 'DELETE_BUILDING_SUCSESS':
      return {
        ...state,
        buildings: state.buildings.filter(
          (item) => item._id !== action.payload
        ),
        isPending: false,
      };
    case 'DELETE_BUILDING_FAILED':
    case 'POST_NEW_BUILDING_FAILED':
    case 'BUILDING_FETCH_FAILED':
    case 'GET_SINGLE_BUILDING_FAILED':
      return { ...state, isPending: false, error: action.payload };

    case 'CLEAR_SINGLE':
      return { ...state, error: null, singleBuilding: null };
    default:
      return state;
  }
};

export default BuildingsReducer;
