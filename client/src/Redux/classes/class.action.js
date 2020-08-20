export const getclassesData = () => (dispatch) => {
  dispatch({ type: 'CLASSES_FETCH_START' });
  fetch('http://localhost:3005/classes', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'CLASSES_FETCH_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'CLASSES_FETCH_FAILED', payload: err }));
};

export const addNewClass = (classDetails, history) => (dispatch) => {
  console.log(history);
  const { name, minStudents, maxStudents, building } = classDetails;
  const minNum = Number(minStudents);
  const maxNum = Number(maxStudents);
  dispatch({ type: 'ADD_NEW_CLASS_START' });
  fetch('http://localhost:3005/classes', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      minStudents: minNum,
      maxStudents: maxNum,
      building: building,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'ADD_CLASS_SUCSESS', payload: data });
      history.push('/settings/list-classes/updateClasses', data);
    })

    .catch((err) => dispatch({ type: 'ADD_CLASS_FAILED', payload: err }));
};

export const deleteClass = (id) => (dispatch) => {
  dispatch({ type: 'DELETE_CLASS_START' });
  fetch(`http://localhost:3005/classes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_CLASS_SUCSESS', payload: id });
      } else {
        throw new Error('cant delete this class NAGRIN');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_CLASS_SUCSESS', payload: err }));
};
