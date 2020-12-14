import { setAlert } from '../My-Alert/myAlert.action';
import { callFetch, URL } from '../../utils/actionUtils';

export const getCourseList = () => (dispatch) => {
  dispatch({ type: 'GET_COURSE_START' });
  callFetch(`${URL}/courses`, 'GET')
    .then((data) => dispatch({ type: 'GET_COURSE_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_COURSE_FAILED', payload: err }));
};

export const addNewCourse = (courseData, history) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_COURSE_START' });
  callFetch(`${URL}/courses`, 'POST', courseData)
    .then((data) => {
      dispatch({ type: 'ADD_NEW_COURSE_SUCCESS', payload: data });
      history.push(`/courses/updateCourse/${data._id}`);
      dispatch(setAlert(' קורס נוסף בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'ADD_NEW_COURSE_FAILED', payload: err }));
};

export const getSingleCourse = (courseID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_COURSE_START' });
  callFetch(`${URL}/courses/${courseID}`, 'GET')
    .then((data) =>
      dispatch({ type: 'GET_SINGLE_COURSE_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'GET_SINGLE_COURSE_FAILED', payload: err })
    );
};

export const deleteCourse = (courseID) => (dispatch) => {
  dispatch({ type: 'DELETE_COURSE_START' });
  callFetch(`${URL}/courses/${courseID}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_COURSE_SUCCESS', payload: courseID });
      } else {
        throw new Error('cant delete this');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_COURSE_FAILED', payload: err }));
};

export const updateCourse = (courseID, courseData) => (dispatch) => {
  dispatch({ type: 'UPDATE_COURSE_START' });
  callFetch(`${URL}/courses/${courseID}`, 'PUT', courseData)
    .then((data) => {
      console.log(data);
      dispatch({ type: 'UPDATE_COURSE_SUCCESS', payload: data });
      dispatch(setAlert('קורס עודכן בהצלחה', 'success'));
    })
    .catch((err) => dispatch({ type: 'UPDATE_COURSE_FAILED', payload: err }));
};

export const uploadCourseFile = (courseID, formData) => (dispatch) => {
  dispatch({ type: 'UPLOAD_COURSE_FILE_START' });
  callFetch(`${URL}/courses/${courseID}/file`, 'POST', formData)
    .then((data) =>
      dispatch({ type: 'UPLOAD_COURSE_FILE_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'UPLOAD_COURSE_FILE_FAILED', payload: err })
    );
};

export const deleteCourseFile = (courseID, fileID) => (dispatch) => {
  dispatch({ type: 'DELETE_COURSE_FILE_START', payload: fileID });
  callFetch(`${URL}/courses/${courseID}/file/${fileID}`, 'DELETE')
    .then((data) => {
      dispatch({
        type: 'DELETE_COURSE_FILE_SUCCESS',
        payload: { data, fileID },
      });
      dispatch(setAlert('קובץ נמחק בהצלחה', 'success'));
    })
    .catch((err) =>
      dispatch({ type: 'DELETE_COURSE_FILE_FAILED', payload: err })
    );
};

// export const downLoadCourseFile = (item) => {
//   return fetch(`${URL}/files/${item._id}`, {
//     method: 'GET',
//     cache: 'no-cache',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })
//     .then((res) => (res.ok ? res : Promise.reject(res.statusText)))
//     .then((res) => res.blob())
//     .then((blob) => {
//       const url = window.URL.createObjectURL(new Blob([blob]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', item.name);
//       document.body.appendChild(link);
//       link.click();
//       link.parentNode.removeChild(link);
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// };

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
