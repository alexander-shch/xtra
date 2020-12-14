const INITIAL_STATE = {
  vatList: [],
  vatRate: {},
  vatRateLoading: true,
  loading: true,
  innerSinglePageLoading: true,
  singleVatItem: null,
  error: null,
  deleteList: [],
  singlePageError: null,
};

const vatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_VAT_LIST_START':
    case 'ADD_VAT_ITEM_START':
    case 'UPDATE_VAT_ITEM_START':
      return { ...state, loading: true };
    case 'DELETE_VAT_ITEM_START':
      return { ...state, deleteList: [...state.deleteList, action.payload] };
    case 'GET_VAT_RATE_START':
    case 'UPDATE_VAT_RATE_START':
      return { ...state, vatRateLoading: true };
    case 'GET_VAT_LIST_SUCCESS':
      return { ...state, loading: false, vatList: action.payload };
    case 'GET_VAT_RATE_SUCCESS':
    case 'UPDATE_VAT_RATE_SUCCESS':
      return { ...state, vatRateLoading: false, vatRate: action.payload };
    case 'GET_SINGLE_VAT_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_SINGLE_VAT_SUCCESS':
      return {
        ...state,
        singleVatItem: action.payload,
        innerSinglePageLoading: false,
      };
    case 'ADD_VAT_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
        vatList: [...state.vatList, action.payload],
      };
    case 'UPDATE_VAT_ITEM_SUCCESS':
      let { vatList: newVatList } = state;
      let vatList = [...newVatList];
      let index = newVatList.findIndex(
        (item) => item._id === action.payload._id
      );
      vatList[index] = action.payload;
      return {
        ...state,
        loading: false,
        vatList,
        singleVatItem: action.payload,
      };
    case 'DELETE_VAT_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
        vatList: state.vatList.filter((item) => item._id !== action.payload),
        deleteList: state.deleteList.filter((item) => item === action.payload),
      };
    case 'GET_VAT_LIST_FAILED':
    case 'ADD_VAT_ITEM_FAILED':
    case 'DELETE_VAT_ITEM_FAILED':
    case 'GET_VAT_RATE_FAILED':
    case 'UPDATE_VAT_RATE_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
        vatRateLoading: false,
      };
    case 'GET_SINGLE_VAT_FAILED':
      return { ...state, singlePageError: action.payload };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        singleVatItem: null,
        innerSinglePageLoading: true,
        error: null,
        singlePageError: null,
      };
    default:
      return state;
  }
};

export default vatReducer;
