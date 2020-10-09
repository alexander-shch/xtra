import { callFetch, URL } from '../../utils/actionUtils';

export const getCategories = () => (dispatch) => {
  dispatch({ type: 'GET_CATEGORIES_START' });
  callFetch(`${URL}/categories`, 'GET')
    .then((data) => dispatch({ type: 'GET_CATEGORIES_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_CATEGORIES_FAILED', payload: err }));
};

export const addNewCategory = (objToServer) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_CATEGORY_START' });
  callFetch(`${URL}/categories`, 'POST', objToServer)
    .then((data) =>
      dispatch({ type: 'ADD_NEW_CATEGORY_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'ADD_NEW_CATEGORY_FAILED', payload: err })
    );
};

export const updateCategoty = (categoryID, objToServer) => (dispatch) => {
  dispatch({ type: 'UPDATE_CATEGORY_START' });
  callFetch(`${URL}/categories/${categoryID}`, 'PUT', objToServer)
    .then((data) =>
      dispatch({ type: 'UPDATE_CATEGORY_SUCCESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_CATEGORY_FAILED', payload: err }));
};

export const deleteCategory = (categoryID) => (dispatch) => {
  dispatch({ type: 'DELETE_CATEGORY_START' });
  callFetch(`${URL}/categories/${categoryID}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({
          type: 'DELETE_CATEGORY_SUCCESS',
          payload: categoryID,
        });
      } else {
        throw new Error('cant delete this building');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_CATEGORY_FAILED', payload: err }));
};
