const INITAL_STATE = {
  vatList: [],
  vatRate: {},
  vatRateLoading: true,
  loading: true,
  innerSinglePageLoading: true,
  singleVatItem: null,
  error: null,
};

const vatReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'GET_VAT_LIST_START':
    case 'ADD_VAT_ITEM_START':
    case 'UPDATE_VAT_ITEM_START':
    case 'DELETE_VAT_ITEM_START':
      return { ...state, loading: true };
    case 'GET_VAT_RATE_START':
    case 'UPDATE_VAT_RATE_START':
      return { ...state, vatRateLoading: true };
    case 'GET_VAT_LIST_SUCSESS':
      return { ...state, loading: false, vatList: action.payload };
    case 'GET_VAT_RATE_SUCSESS':
    case 'UPDATE_VAT_RATE_SUCSESS':
      return { ...state, vatRateLoading: false, vatRate: action.payload };
    case 'GET_SINGLE_VAT_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_SINGLE_VAT_SUCSESS':
      return {
        ...state,
        singleVatItem: action.payload,
        innerSinglePageLoading: false,
      };
    case 'ADD_VAT_ITEM_SUCSESS':
      return {
        ...state,
        loading: false,
        vatList: [...state.vatList, action.payload],
      };
    case 'UPDATE_VAT_ITEM_SUCSESS':
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
    case 'DELETE_VAT_ITEM_SUCSESS':
      return {
        ...state,
        loading: false,
        vatList: state.vatList.filter((item) => item._id !== action.payload),
      };
    case 'GET_VAT_LIST_FAILED':
    case 'ADD_VAT_ITEM_FAILED':
    case 'DELETE_VAT_ITEM_FAILED':
    case 'GET_SINGLE_VAT_FAILED':
    case 'GET_VAT_RATE_FAILED':
    case 'UPDATE_VAT_RATE_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
        vatRateLoading: false,
      };
    case 'CLEAR_SINGLE':
      return { ...state, singleVatItem: null, innerSinglePageLoading: true };
    default:
      return state;
  }
};

export default vatReducer;
