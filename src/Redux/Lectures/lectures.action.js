import { callFetch, URL } from '../../utils/actionUtils';
import { setAlert } from '../My-Alert/myAlert.action';

export const getLectures = () => (dispatch) => {
  dispatch({ type: 'GET_LECTURES_START' });
  callFetch(`${URL}/lecturer`, 'GET')
    .then((data) => dispatch({ type: 'GET_LECTURES_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_LECTURES_FAILED', payload: err }));
};

export const addNewLecture = (lectureDetails, history) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_LECTURE_START' });
  callFetch(`${URL}/lecturer`, 'POST', lectureDetails)
    .then((data) => {
      dispatch({ type: 'ADD_NEW_LECTURE_SUCCESS', payload: data });
      history.push(`/lecturers/updateLecture/${data._id}`);
      dispatch(setAlert('מרצה נוסף בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'ADD_NEW_LECTURE_FAILED', payload: err }));
};

export const updateLecture = (lectureID, lectureDetails) => (dispatch) => {
  dispatch({ type: 'UPDATE_LECTURE_START' });
  callFetch(`${URL}/lecturer/${lectureID}`, 'PUT', lectureDetails)
    .then((data) => {
      dispatch({ type: 'UPDATE_LECTURE_SUCCESS', payload: data });
      dispatch(setAlert('מרצה עודכן בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'UPDATE_LECTURE_FAILED', payload: err }));
};

export const deleteLecture = (lectureID) => (dispatch) => {
  dispatch({ type: 'DELETE_LECTURE_START', payload: lectureID });
  callFetch(`${URL}/lecturer/${lectureID}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_LECTURE_SUCCESS', payload: lectureID });
      } else {
        throw Error('cant delete this lecture');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_LECTURE_FAILED', payload: err }));
};

export const setAvatarImg = (lectureID, fromData) => (dispatch) => {
  dispatch({ type: 'SET_AVATAR_IMG_START' });
  callFetch(`${URL}/lecturer/${lectureID}/avatar`, 'POST', fromData)
    .then((data) => {
      dispatch({ type: 'SET_AVATAR_IMG_SUCCESS', payload: data });
      dispatch(setAlert('תמונת פרופיל עודכנה בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'SET_AVATAR_IMG_FAILED', payload: err }));
};

export const addNewNote = (lectureID, text) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_NOTE_START' });
  callFetch(`${URL}/lecturer/${lectureID}/notes`, 'POST', { text })
    .then((data) => {
      dispatch({ type: 'ADD_NEW_NOTE_SUCCESS', payload: { lectureID, data } });
      dispatch(setAlert('הערה נוספה בהצלחה', 'success'));
    })

    .catch((err) => dispatch({ type: 'ADD_NEW_NOTE_FAILED', payload: err }));
};

export const deleteNote = (lectureID, noteID) => (dispatch) => {
  dispatch({ type: 'DELETE_NOTE_START', payload: noteID });
  callFetch(`${URL}/lecturer/${lectureID}/notes/${noteID}`, 'DELETE')
    .then(() => {
      dispatch({ type: 'DELETE_NOTE_SUCCESS', payload: { lectureID, noteID } });
      dispatch(setAlert('הערה נמחקה בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'DELETE_NOTE_FAILED', payload: err }));
};

export const uploadCv = (lectureID, formData) => (dispatch) => {
  dispatch({ type: 'UPLOAD_CV_START' });
  callFetch(`${URL}/lecturer/${lectureID}/file`, 'POST', formData)
    .then((data) => {
      dispatch({ type: 'UPLOAD_CV_SUCCESS', payload: data });
    })
    .catch((err) => dispatch({ type: 'UPLOAD_CV_FAILED', payload: err }));
};

export const deleteFile = (lectureID, fileID) => (dispatch) => {
  dispatch({ type: 'DELETE_FILE_START', payload: fileID });
  callFetch(`${URL}/lecturer/${lectureID}/file/${fileID}`, 'DELETE')
    .then(() => {
      dispatch({ type: 'DELETE_FILE_SUCCESS', payload: { lectureID, fileID } });
      dispatch(setAlert('קובץ נמחק בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'DELETE_FILE_FAILED', payload: err }));
};

export const getSingleLecture = (lectureID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_LECTURE_START' });
  callFetch(`${URL}/lecturer/${lectureID}`, 'GET')
    .then((data) =>
      dispatch({ type: 'GET_SINGLE_LECTURE_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'GET_SINGLE_LECTURE_FAILED', payload: err })
    );
};

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
