import { URL } from '../utils/actionUtils';

export const viewFile = (item) => {
  return fetch(`${URL}/files/${item._id}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res.statusText)))
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const downLoadFile = (item) => {
  return fetch(`${URL}/files/${item._id}`, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res.statusText)))
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', item.name);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch((err) => {
      throw new Error(err);
    });
};
