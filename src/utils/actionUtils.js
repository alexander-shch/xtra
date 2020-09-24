export const callFetch = (url, method, body) => {
  const isFormData = body instanceof FormData;
  if (!isFormData) {
    body = JSON.stringify(body);
  }
  return fetch(url, {
    method: method,
    cache: 'no-cache',
    headers: getHeaders(isFormData),
    body,
  }).then((res) => res.json());
};

const getHeaders = (isFormData = false) => {
  const headers = new Headers();
  const token = localStorage.getItem('token');
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  return headers;
};

export const URL = 'http://localhost:3005';
