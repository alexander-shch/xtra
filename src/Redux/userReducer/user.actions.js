export const setUserLog = () => (dispatch) => {
  dispatch({ type: 'USER_LOG_LOADING' });
  fetch('http://localhost:3005/user', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((respons) => respons.json())
    .then((user) => {
      if (user) {
        dispatch({ type: 'SIGNIN_SUCSESS', payload: user });
      }
    })
    .catch((err) => dispatch(signInFailed(err)));
};

export const onsignOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'SIGNOUT_SUCSESS' });
};

export const getToken = (email, password) => (dispatch) => {
  dispatch({ type: 'USER_LOG_LOADING' });
  return fetch('http://localhost:3005/login', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => {
      if (res.status === 200 && res.ok) {
        return res.json();
      }
      dispatch({ type: 'SIGNIN_FAILED' });
      throw new Error('nagrin');
    })
    .then(({ token }) => localStorage.setItem('token', token));
};

export const signInFailed = (err) => ({
  type: 'SIGNIN_FAILED',
  payload: err,
});
