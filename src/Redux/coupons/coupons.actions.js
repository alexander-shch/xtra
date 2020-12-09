import { callFetch, URL } from '../../utils/actionUtils';

export const addNewCoupon = (couponData) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_COUPON_START' });
  callFetch(`${URL}/coupons`, 'POST', couponData)
    .then((data) => dispatch({ type: 'ADD_NEW_COUPON_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'ADD_NEW_COUPON_FAILED', payload: err }));
};
