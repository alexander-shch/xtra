import { callFetch, URL } from '../../utils/actionUtils';

export const getBuildingsData = () => (dispatch) => {
  dispatch({ type: 'BUILDING_FETCH_START' });
  callFetch(`${URL}/buildings`, 'GET')
    .then((data) => dispatch({ type: 'BUILDING_FETCH_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'BUILDING_FETCH_FAILED', payload: err }));
};

export const addNewBuilding = (name, active) => (dispatch) => {
  const booleanActive = JSON.parse(active);
  const buildingObj = { name, active: booleanActive };
  dispatch({ type: 'POST_NEW_BUILDING_START' });
  callFetch(`${URL}/buildings`, 'POST', buildingObj)
    .then((data) => {
      dispatch({ type: 'POST_NEW_BUILDING_SUCCESS', payload: data });
    })
    .catch((err) =>
      dispatch({ type: 'POST_NEW_BUILDING_FAILED', payload: err })
    );
};

export const updateBuilding = (itemid, name, active) => (dispatch) => {
  const booleanActive = JSON.parse(active);
  const buildingObj = { name, active: booleanActive };
  dispatch({ type: 'UPDATE_BUILDING_START' });
  callFetch(`${URL}/buildings/${itemid}`, 'PUT', buildingObj)
    .then((data) =>
      dispatch({ type: 'UPDATE_BUILDING_SUCCESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_BUILDING_FAILED', payload: err }));
};

export const deleteBuilding = (itemid) => (dispatch) => {
  dispatch({ type: 'DELETE_BUILDING_START', payload: itemid });
  callFetch(`${URL}/buildings/${itemid}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({
          type: 'DELETE_BUILDING_SUCCESS',
          payload: itemid,
        });
      } else {
        throw new Error('cant delete this building');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_BUILDING_FAILED', payload: err }));
};

export const getSingleBuilding = (ID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_BUILDING_START' });
  callFetch(`${URL}/buildings/${ID}`, 'GET')
    .then((data) => {
      dispatch({ type: 'GET_SINGLE_BUILDING_SUCCESS', payload: data });
    })
    .catch((err) =>
      dispatch({ type: 'GET_SINGLE_BUILDING_FAILED', payload: err })
    );
};

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
