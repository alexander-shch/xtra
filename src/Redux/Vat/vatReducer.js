const INITAL_STATE = {
  vatList: [],
  loading: false,
  error: null,
};

const vatReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'GET_VAT_LIST_START':
    case 'ADD_VAT_ITEM_START':
    case 'UPDATE_VAT_ITEM_START':
    case 'DELETE_VAT_ITEM_START':
      return { ...state, loading: true };
    case 'GET_VAT_LIST_SUCSESS':
      return { ...state, loading: false, vatList: action.payload };
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
      return { ...state, loading: false, vatList };
    case 'DELETE_VAT_ITEM_SUCSESS':
      return {
        ...state,
        loading: false,
        vatList: state.vatList.filter((item) => item._id !== action.payload),
      };
    case 'GET_VAT_LIST_FAILED':
    case 'ADD_VAT_ITEM_FAILED':
    case 'DELETE_VAT_ITEM_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default vatReducer;
