import { callFetch, URL } from '../../utils/actionUtils';
import { setAlert } from '../My-Alert/myAlert.action';

export const getclassesData = () => (dispatch) => {
  dispatch({ type: 'CLASSES_FETCH_START' });
  callFetch(`${URL}/classes`, 'GET')
    .then((data) => dispatch({ type: 'CLASSES_FETCH_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'CLASSES_FETCH_FAILED', payload: err }));
};

export const addNewClass = (classDetails, history) => (dispatch) => {
  const { name, minStudents, maxStudents, building } = classDetails;
  const minNum = Number(minStudents);
  const maxNum = Number(maxStudents);
  dispatch({ type: 'ADD_NEW_CLASS_START' });
  fetch(`${URL}/classes`, {
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
      history.push(`/settings/list-classes/updateClass/${data._id}`);
      dispatch(setAlert('כיתה נוספה בהצלחה', 'sucsess'));
    })

    .catch((err) => dispatch({ type: 'ADD_CLASS_FAILED', payload: err }));
};

export const updateClass = (id, classDetails) => (dispatch) => {
  const { name, minStudents, maxStudents, building } = classDetails;
  const minNum = Number(minStudents);
  const maxNum = Number(maxStudents);
  dispatch({ type: 'UPDATE_CLASS_START' });
  fetch(`${URL}/classes/${id}`, {
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
      dispatch(setAlert('הכיתה עודכנה בהצלחה', 'sucsess'));
      dispatch({ type: 'UPDATE_CLASS_SUCSESS', payload: data });
    })
    .catch((err) => dispatch({ type: 'UPDATE_CLASS_FAILED', payload: err }));
};

export const deleteClass = (id) => (dispatch) => {
  dispatch({ type: 'DELETE_CLASS_START' });
  fetch(`${URL}/classes/${id}`, {
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
  let fromDate = new Date(`${from}T${fromTime}`).toISOString();
  let toDate = new Date(`${to}T${toTime}`).toISOString();
  const { limiter } = dateDetails;
  dispatch({ type: 'SET_AVAILABILITY_START' });
  fetch(`${URL}/classes/${id}/availability`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromDate,
      to: toDate,
      limiter: limiter,
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
  let fromDate = new Date(`${from}T${fromTime}`).toISOString();
  let toDate = new Date(`${to}T${toTime}`).toISOString();
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
    .then((data) => {
      dispatch(setAlert('אירוע עודכן', 'sucsess'));
      dispatch({ type: 'UPDATE_AVAILABILTY_SUCSESS', payload: data });
    })
    .catch((err) =>
      dispatch({ type: 'UPDATE_AVAILABILTY_FAILED', payload: err })
    );
};

export const deleteAvailability = (classId, availabilityId) => (dispatch) => {
  const payload = { classId, availabilityId };
  dispatch({ type: 'DELETE_AVAILABILTY_START' });
  fetch(`${URL}/classes/availability/${availabilityId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deleted) {
        dispatch(setAlert('אירוע נמחק', 'sucsess'));
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

export const getJewishHolydays = () => (dispatch) => {
  dispatch({ type: 'GET_HOLYDAYS_START' });
  fetch(
    'https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=none=3448439&m=0&s=off&lg=h'
  )
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'GET_HOLYDAYS_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_HOLYDAYS_FAILED', payload: err }));
};
