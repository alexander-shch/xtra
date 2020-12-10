const INTAIL_STATE = {
  process: true,
  listLoading: true,
  innerPageLoading: true,
  couponsList: [],
  singleCoupon: null,
  error: null,
};

const couponsReducer = (state = INTAIL_STATE, action) => {
  const { couponsList } = state;
  switch (action.type) {
    case 'ADD_NEW_COUPON_START':
    case 'GET_COUPONS_START':
    case 'DELETE_COUPON_START':
      return { ...state, listLoading: true };
    case 'GET_SINGLE_COUPON_START':
      return { ...state, innerPageLoading: true };
    case 'GET_COUPONS_SUCCESS':
      return { ...state, listLoading: false, couponsList: action.payload };
    case 'UPDATE_COUPON_START':
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
      return { ...state, listLoading: false, couponsList: filterList };
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
        couponsList: [...state.couponsList, action.payload],
      };
    case 'ADD_NEW_COUPON_FAILED':
    case 'GET_COUPONS_FAILED':
    case 'GET_SINGLE_COUPON_FAILED':
    case 'UPDATE_COUPON_FAILED':
      return {
        ...state,
        listLoading: false,
        error: action.payload,
        innerPageLoading: false,
        process: false,
      };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        process: true,
        innerPageLoading: true,
        singleCoupon: null,
        error: null,
      };
    default:
      return state;
  }
};

export default couponsReducer;
