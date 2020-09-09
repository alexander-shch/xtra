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
      console.log(data);
      dispatch({ type: 'ADD_CLASS_SUCSESS', payload: data });
      history.push('/settings/list-classes/updateClasses', data);
    })

    .catch((err) => dispatch({ type: 'ADD_CLASS_FAILED', payload: err }));
};

export const updateClass = (id, classDetails) => (dispatch) => {
  const { name, minStudents, maxStudents, building } = classDetails;
  const minNum = Number(minStudents);
  const maxNum = Number(maxStudents);
  dispatch({ type: 'UPDATE_CLASS_START' });
  fetch(`http://localhost:3005/classes/${id}`, {
    method: 'PUT',
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
      console.log(data);
      dispatch({ type: 'UPDATE_CLASS_SUCSESS', payload: data });
    })
    .catch((err) => dispatch({ type: 'UPDATE_CLASS_FAILED', payload: err }));
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

export const setAvailability = (id, dateDetails) => (dispatch) => {
  const { from, to, fromTime, toTime } = dateDetails;
  let fromDate = `${from}T${fromTime}Z`;
  let toDate = `${to}T${toTime}Z`;
  dispatch({ type: 'SET_AVAILABILITY_START' });
  fetch(`http://localhost:3005/classes/${id}/availability`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromDate,
      to: toDate,
    }),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'SET_AVAILABILITY_SUCSESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'SET_AVAILABILITY_FAILED', payload: err })
    );
};

export const updateAvailability = (dateDetails) => (dispatch) => {
  const { from, to, fromTime, toTime, availabilityId } = dateDetails;
  let fromDate = `${from}T${fromTime}Z`;
  let toDate = `${to}T${toTime}Z`;
  dispatch({ type: 'UPDATE_AVAILABILTY_START' });
  fetch(`http://localhost:3005/classes/availability/${availabilityId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromDate,
      to: toDate,
    }),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'UPDATE_AVAILABILTY_SUCSESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'UPDATE_AVAILABILTY_FAILED', payload: err })
    );
};

export const deleteAvailability = (classId, availabilityId) => (dispatch) => {
  const payload = { classId, availabilityId };
  dispatch({ type: 'DELETE_AVAILABILTY_START' });
  fetch(`http://localhost:3005/classes/availability/${availabilityId}`, {
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
          type: 'DELETE_AVAILABILTY_SUCSESS',
          payload: payload,
        });
      } else {
        throw new Error('cant delete this availability');
      }
    })
    .catch((err) =>
      dispatch({ type: 'DELETE_AVAILABILTY_FAILED', payload: err })
    );
};
