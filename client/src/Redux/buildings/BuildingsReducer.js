const INTIAL_STATE = {
  buildings: [],
  isPending: false,
  error: null,
};

const BuildingsReducer = (state = INTIAL_STATE, action) => {
  let buildings;
  switch (action.type) {
    case 'BUILDING_FETCH_START':
    case 'UPDATE_BUILDING_START':
    case 'DELETE_BUILDING_START':
      return { ...state, isPending: true };
    case 'BUILDING_FETCH_SUCSESS':
      return {
        buildings: action.payload,
        isPending: false,
        error: null,
      };
    case 'POST_NEW_BUILDING_SUCSESS':
      return { ...state, buildings: [...state.buildings, action.payload] };

    case 'UPDATE_BUILDING_SUCSESS':
      const { buildings: allBuildings } = state;
      buildings = [...allBuildings];
      const index = allBuildings.findIndex(
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
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

export default BuildingsReducer;
