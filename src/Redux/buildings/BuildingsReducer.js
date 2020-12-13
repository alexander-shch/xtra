const INTIAL_STATE = {
  buildings: [],
  loading: true,
  process: false,
  innerSinglePageLoading: true,
  singleBuilding: null,
  error: null,
  deleteList: [],
};

const BuildingsReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SINGLE_BUILDING_START':
      return { ...state, innerSinglePageLoading: true };
    case 'BUILDING_FETCH_START':
    case 'DELETE_BUILDING_START':
      const { deleteList: newList } = state;
      newList.push(action.payload);
      return { ...state, deleteList: newList };
    case 'POST_NEW_BUILDING_START':
    case 'UPDATE_BUILDING_START':
      return { ...state, process: true };
    case 'BUILDING_FETCH_SUCSESS':
      return {
        ...state,
        buildings: action.payload,
        loading: false,
        error: null,
      };
    case 'GET_SINGLE_BUILDING_SUCSESS':
      return {
        ...state,
        loading: false,
        singleBuilding: action.payload,
        innerSinglePageLoading: false,
      };
    case 'POST_NEW_BUILDING_SUCSESS':
      return {
        ...state,
        buildings: [...state.buildings, action.payload],
        process: false,
      };

    case 'UPDATE_BUILDING_SUCSESS':
      const { buildings } = state;
      const index = buildings.findIndex(
        (building) => building._id === action.payload._id
      );
      buildings[index] = action.payload;
      return {
        ...state,
        loading: false,
        process: false,
        buildings,
        singleBuilding: action.payload,
      };
    case 'DELETE_BUILDING_SUCSESS':
      const filterList = state.deleteList.filter(
        (item) => item === action.payload._id
      );
      return {
        ...state,
        buildings: state.buildings.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
        deleteList: filterList,
      };
    case 'DELETE_BUILDING_FAILED':
    case 'POST_NEW_BUILDING_FAILED':
    case 'BUILDING_FETCH_FAILED':
    case 'GET_SINGLE_BUILDING_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
        innerSinglePageLoading: false,
      };

    case 'CLEAR_SINGLE':
      return {
        ...state,
        error: null,
        singleBuilding: null,
        innerSinglePageLoading: true,
      };
    default:
      return state;
  }
};

export default BuildingsReducer;
