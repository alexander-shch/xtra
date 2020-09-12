export const callFetch = (url, method, body) => {
  return fetch(url, {
    method: method,
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
