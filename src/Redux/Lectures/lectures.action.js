import { callFetch } from '../../utils/actionUtils';

export const getLectures = () => (dispatch) => {
  dispatch({ type: 'GET_LECTURES_START' });
  callFetch('http://localhost:3005/lecturer', 'GET')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'GET_LECTURES_SUCSESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_LECTURES_FAILED', payload: err }));
};

export const addNewLecture = (lectureDetails, history) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_LECTURE_START' });
  callFetch('http://localhost:3005/lecturer', 'POST', lectureDetails)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'ADD_NEW_LECTURE_SUCSESS', payload: data });
      history.push('/lecturers/updateLecture', data);
    })
    .catch((err) => dispatch({ type: 'ADD_NEW_LECTURE_FAILED', payload: err }));
};

export const updateLecture = (lectureID, lectureDetails) => (dispatch) => {
  dispatch({ type: 'UPDATE_LECTURE_START' });
  callFetch(
    `http://localhost:3005/lecturer/${lectureID}`,
    'PUT',
    lectureDetails
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'UPDATE_LECTURE_SUCSESS', payload: data });
    })
    .catch((err) => dispatch({ type: 'UPDATE_LECTURE_FAILED', payload: err }));
};

export const deleteLecture = (lectureID) => (dispatch) => {
  dispatch({ type: 'DELETE_LECTURE_START' });
  callFetch(`http://localhost:3005/lecturer/${lectureID}`, 'DELETE')
    .then((res) => res.json())
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_LECTURE_SUCSESS', payload: lectureID });
      } else {
        throw Error('cant delete this lecture');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_LECTURE_FAILED', payload: err }));
};

export const setAvatarImg = (lectureID, fromData) => (dispatch) => {
  dispatch({ type: 'SET_AVATAR_IMG_START' });
  callFetch(
    `http://localhost:3005/lecturer/${lectureID}/avatar`,
    'POST',
    fromData
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};
