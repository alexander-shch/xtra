import { setAlert } from '../My-Alert/myAlert.action';
import { callFetch, URL } from '../../utils/actionUtils';

export const getStudentsList = () => (dispatch) => {
    dispatch({ type: 'GET_ALL_STUDENTS' });
    callFetch(`${URL}/students`, 'GET')
      .then((data) => dispatch({ type: 'GET_STUDENTS_SUCCESS', payload: data }))
      .catch((err) => dispatch({ type: 'GET_STUDENTS_FAILED', payload: err }));
  };
  
export const addNewStudent = (studentData, history) => (dispatch) => {
    dispatch({ type: 'ADD_NEW_STUDENT' });
    callFetch(`${URL}/students`, 'POST', studentData)
      .then((data) => {
        dispatch({ type: 'ADD_NEW_STUDENT_SUCCESS', payload: data });
        history.push(`/students/updateStudent/${data._id}`);
        dispatch(setAlert(' סטודנט נרשם בהצלחה', 'success'));
      })
      .catch((err) => dispatch({ type: 'ADD_NEW_STUDENT_FAILED', payload: err }));
    }

export const updateStudent = (studentData, history) => (dispatch) => {
    dispatch({ type: 'UPDATE_STUDENT'});
}

export const deleteStudent = () => (dispatch) => {
    dispatch({ type: 'DELETE_STUDENT'});
}


