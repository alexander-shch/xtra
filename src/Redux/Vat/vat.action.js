import { callFetch } from '../../utils/actionUtils';

export const getvatList = () => (dispatch) => {
  dispatch({ type: 'GET_VAT_LIST_START' });
  callFetch('http://localhost:3005/pay-duplicator', 'GET')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'GET_VAT_LIST_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_VAT_LIST_FAILED', payload: err }));
};

export const addVatItem = (vatItem) => (dispatch) => {
  dispatch({ type: 'ADD_VAT_ITEM_START' });
  callFetch('http://localhost:3005/pay-duplicator', 'POST', vatItem)
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'ADD_VAT_ITEM_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'ADD_VAT_ITEM_FAILED', payload: err }));
};

export const updateVatItem = (itemId, vatItem) => (dispatch) => {
  dispatch({ type: 'UPDATE_VAT_ITEM_START' });
  callFetch(`http://localhost:3005/pay-duplicator/${itemId}`, 'PUT', vatItem)
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'UPDATE_VAT_ITEM_SUCSESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_VAT_ITEM_FAILED', payload: err }));
};

export const deleteVatItem = (itemId) => (dispatch) => {
  dispatch({ type: 'DELETE_VAT_ITEM_START' });
  callFetch(`http://localhost:3005/pay-duplicator/${itemId}`, 'DELETE')
    .then((res) => res.json())
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
