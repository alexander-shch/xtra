export const getBuildingsData = () => (dispatch) => {
  dispatch({ type: 'DATA_FETCH_START' });
  fetch('http://localhost:3005/buildings', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'DATA_FETCH_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'DATA_FETCH_FAILED', payload: err }));
};
