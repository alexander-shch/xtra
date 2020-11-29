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

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
