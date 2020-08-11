export const getBuildingsData = () => (dispatch) => {
  dispatch({ type: 'BUILDING_FETCH_START' });
  fetch('http://localhost:3005/buildings', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'BUILDING_FETCH_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'BUILDING_FETCH_FAILED', payload: err }));
};

export const addNewBuilding = (name, active) => (dispatch) => {
  const booleanActive = JSON.parse(active);
  dispatch({ type: 'POST_NEW_BUILDING_START' });
  fetch('http://localhost:3005/buildings', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      active: booleanActive,
    }),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'POST_NEW_BUILDING_SUCSESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'POST_NEW_BUILDING_FAILED', payload: err })
    );
};

export const updateBuilding = (itemid, name, active) => (dispatch) => {
  dispatch({ type: 'UPDATE_BUILDING_START' });
  fetch(`http://localhost:3005/buildings/${itemid}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      active: active,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => dispatch({ type: 'UPDATE_BUILDING_FAILED', payload: err }));
};

export const deleteBuilding = (itemid) => (dispatch) => {
  dispatch({ type: 'DELETE_BUILDING_START' });
  fetch(`http://localhost:3005/buildings/${itemid}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deleted) {
        dispatch({
          type: 'DELETE_BUILDING_SUCSESS',
          payload: itemid,
        });
      } else {
        throw new Error('cant delete this building');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_BUILDING_FAILED', payload: err }));
};