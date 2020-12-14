const INTAIL_STATE = {
  process: false,
  listLoading: true,
  innerPageLoading: true,
  couponsList: [],
  singleCoupon: null,
  error: null,
  singlePageError: null,
  deleteList: [],
};

const couponsReducer = (state = INTAIL_STATE, action) => {
  const { couponsList } = state;
  switch (action.type) {
    case 'GET_COUPONS_START':
      return { ...state, listLoading: true };
    case 'DELETE_COUPON_START':
      return { ...state, deleteList: [...state.deleteList, action.payload] };
    case 'GET_SINGLE_COUPON_START':
      return { ...state, innerPageLoading: true };
    case 'GET_COUPONS_SUCCESS':
      return { ...state, listLoading: false, couponsList: action.payload };
    case 'UPDATE_COUPON_START':
    case 'ADD_NEW_COUPON_START':
      return { ...state, process: true };
    case 'GET_SINGLE_COUPON_SUCCESS':
      return {
        ...state,
        innerPageLoading: false,
        singleCoupon: action.payload,
        process: false,
      };
    case 'DELETE_COUPON_SUCCESS':
      let filterList = couponsList.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        listLoading: false,
        couponsList: filterList,
        deleteList: state.deleteList.filter((item) => item === action.payload),
      };
    case 'UPDATE_COUPON_SUCCESS':
      let index = couponsList.findIndex(
        (item) => item._id === action.payload._id
      );
      couponsList[index] = action.payload;
      return { ...state, process: false, couponsList };
    case 'ADD_NEW_COUPON_SUCCESS':
      return {
        ...state,
        listLoading: false,
        process: false,
        couponsList: [...state.couponsList, action.payload],
      };
    case 'ADD_NEW_COUPON_FAILED':
    case 'GET_COUPONS_FAILED':
    case 'UPDATE_COUPON_FAILED':
      return {
        ...state,
        listLoading: false,
        error: action.payload,
        innerPageLoading: false,
        process: false,
      };
    case 'GET_SINGLE_COUPON_FAILED':
      return { ...state, singlePageError: action.payload };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        process: true,
        innerPageLoading: true,
        singleCoupon: null,
        error: null,
        singlePageError: null,
      };
    default:
      return state;
  }
};

export default couponsReducer;
