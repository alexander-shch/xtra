import { callFetch, URL } from '../../utils/actionUtils';
import { setAlert } from '../My-Alert/myAlert.action';

export const addNewCoupon = (couponData) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_COUPON_START' });
  callFetch(`${URL}/coupons`, 'POST', couponData)
    .then((data) => {
      dispatch({ type: 'ADD_NEW_COUPON_SUCCESS', payload: data });
      dispatch(setAlert('קופון נוצר בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'ADD_NEW_COUPON_FAILED', payload: err }));
};

export const getAllCoupons = () => (dispatch) => {
  dispatch({ type: 'GET_COUPONS_START' });
  callFetch(`${URL}/coupons`, 'GET')
    .then((data) => dispatch({ type: 'GET_COUPONS_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_COUPONS_FAILED', payload: err }));
};

export const updateCoupon = (couponData, couponID) => (dispatch) => {
  dispatch({ type: 'UPDATE_COUPON_START' });
  callFetch(`${URL}/coupons/${couponID}`, 'PUT', couponData)
    .then((data) => {
      dispatch({ type: 'UPDATE_COUPON_SUCCESS', payload: data });
      dispatch(setAlert('קופון עודכן בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'UPDATE_COUPON_FAILED', payload: err }));
};

export const getSingleCoupon = (couponID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_COUPON_START' });
  callFetch(`${URL}/coupons/${couponID}`, 'GET')
    .then((data) =>
      dispatch({ type: 'GET_SINGLE_COUPON_SUCCESS', payload: data })
    )
    .catch((err) => {
      dispatch(setAlert('לא ניתן לטעון קופון', 'error'));
      dispatch({ type: 'GET_SINGLE_COUPON_FAILED', payload: err });
    });
};

export const deleteCoupon = (couponID) => (dispatch) => {
  dispatch({ type: 'DELETE_COUPON_START', payload: couponID });
  callFetch(`${URL}/coupons/${couponID}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_COUPON_SUCCESS', payload: couponID });
      } else {
        throw new Error('nagrin');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_COUPON_FAILED', payload: err }));
};

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
