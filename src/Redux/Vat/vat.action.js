import { callFetch, URL } from '../../utils/actionUtils';
import { setAlert } from '../My-Alert/myAlert.action';

export const getvatList = () => (dispatch) => {
  dispatch({ type: 'GET_VAT_LIST_START' });
  callFetch(`${URL}/pay-duplicator`, 'GET')
    .then((data) => dispatch({ type: 'GET_VAT_LIST_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_VAT_LIST_FAILED', payload: err }));
};

export const addVatItem = (vatItem) => (dispatch) => {
  dispatch({ type: 'ADD_VAT_ITEM_START' });
  callFetch(`${URL}/pay-duplicator`, 'POST', vatItem)
    .then((data) => dispatch({ type: 'ADD_VAT_ITEM_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'ADD_VAT_ITEM_FAILED', payload: err }));
};

export const updateVatItem = (itemId, vatItem) => (dispatch) => {
  dispatch({ type: 'UPDATE_VAT_ITEM_START' });
  callFetch(`${URL}/pay-duplicator/${itemId}`, 'PUT', vatItem)
    .then((data) =>
      dispatch({ type: 'UPDATE_VAT_ITEM_SUCSESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_VAT_ITEM_FAILED', payload: err }));
};

export const deleteVatItem = (itemId) => (dispatch) => {
  dispatch({ type: 'DELETE_VAT_ITEM_START' });
  callFetch(`${URL}/pay-duplicator/${itemId}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({
          type: 'DELETE_VAT_ITEM_SUCSESS',
          payload: itemId,
        });
      } else {
        throw new Error('cant delete this item');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_VAT_ITEM_FAILED', payload: err }));
};

export const getSingleVatItem = (ID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_VAT_START' });
  callFetch(`${URL}/pay-duplicator/${ID}`, 'GET')
    .then((data) => {
      dispatch({ type: 'GET_SINGLE_VAT_SUCSESS', payload: data });
    })
    .catch((err) => dispatch({ type: 'GET_SINGLE_VAT_FAILED', payload: err }));
};

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});

export const getVatRate = () => (dispatch) => {
  dispatch({ type: 'GET_VAT_RATE_START' });
  callFetch(`${URL}/settings/vat`, 'GET')
    .then((data) => dispatch({ type: 'GET_VAT_RATE_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_VAT_RATE_FAILED', payload: err }));
};

export const updateVat = (vatValue) => (dispatch) => {
  dispatch({ type: 'UPDATE_VAT_RATE_START' });
  callFetch(`${URL}/settings/vat`, 'POST', vatValue)
    .then((data) => {
      dispatch({ type: 'UPDATE_VAT_RATE_SUCSESS', payload: data });
      dispatch(setAlert('מעמ עודכן', 'success'));
    })
    .catch((err) => dispatch({ type: 'UPDATE_VAT_RATE_FAILED', payload: err }));
};
