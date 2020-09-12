import { callFetch } from '../../utils/actionUtils';

export const getCategories = () => (dispatch) => {
  dispatch({ type: 'GET_CATEGORIES_START' });
  callFetch('http://localhost:3005/categories', 'GET')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'GET_CATEGORIES_SUCSES', payload: data }))
    .catch((err) => dispatch({ type: 'GET_CATEGORIES_FAILED', payload: err }));
};

export const addNewCategory = (objToServer) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_CATEGORY_START' });
  callFetch('http://localhost:3005/categories', 'POST', objToServer)
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'ADD_NEW_CATEGORY_SUCSESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'ADD_NEW_CATEGORY_FAILED', payload: err })
    );
};

export const updateCategoty = (categoryID, objToServer) => (dispatch) => {
  dispatch({ type: 'UPDATE_CATEGORY_START' });
  callFetch(
    `http://localhost:3005/categories/${categoryID}`,
    'PUT',
    objToServer
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'UPDATE_CATEGORY_SUCSESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_CATEGORY_FAILED', payload: err }));
};

export const deleteCategory = (categoryID) => (dispatch) => {
  dispatch({ type: 'DELETE_CATEGORY_START' });
  callFetch(`http://localhost:3005/categories/${categoryID}`, 'DELETE')
    .then((res) => res.json())
    .then((data) => {
      if (data.deleted) {
        dispatch({
          type: 'DELETE_CATEGORY_SUCSESS',
          payload: categoryID,
        });
      } else {
        throw new Error('cant delete this building');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_CATEGORY_FAIELD', payload: err }));
};
