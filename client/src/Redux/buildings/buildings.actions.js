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

export const deleteBuilding = (itemid) => (dispatch) => {
  console.log(itemid);
};
