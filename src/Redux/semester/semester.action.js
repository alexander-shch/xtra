import { callFetch, URL } from '../../utils/actionUtils';

export const getSemesters = () => (dispatch) => {
  dispatch({ type: 'GET_SEMESTERS_START' });
  callFetch(`${URL}/semesters`, 'GET')
    .then((data) => dispatch({ type: 'GET_SEMESTERS_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'GET_SEMESTERS_FAILED', payload: err }));
};

export const addNewSemester = (semsterData) => (dispatch) => {
  dispatch({ type: 'ADD_NEW_SEMESTER_START' });
  callFetch(`${URL}/semesters`, 'POST', semsterData)
    .then((data) =>
      dispatch({ type: 'ADD_NEW_SEMESTER_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'ADD_NEW_SEMESTER_FAILED', payload: err })
    );
};

export const getSingleSemester = (semesterID) => (dispatch) => {
  dispatch({ type: 'GET_SINGLE_SEMESTER_START' });
  callFetch(`${URL}/semesters/${semesterID}`, 'GET')
    .then((data) =>
      dispatch({ type: 'GET_SINGLE_SEMESTER_SUCCESS', payload: data })
    )
    .catch((err) =>
      dispatch({ type: 'GET_SINGLE_SEMESTER_FAILED', payload: err })
    );
};

export const updateSemester = (semsterData, semesterID) => (dispatch) => {
  dispatch({ type: 'UPDATE_SEMESTER_START' });
  callFetch(`${URL}/semesters/${semesterID}`, 'PUT', semsterData)
    .then((data) =>
      dispatch({ type: 'UPDATE_SEMESTER_SUCCESS', payload: data })
    )
    .catch((err) => dispatch({ type: 'UPDATE_SEMESTER_FAILED', payload: err }));
};

export const deleteSemester = (semesterID) => (dispatch) => {
  dispatch({ type: 'DELETE_SEMESTER_START', payload: semesterID });
  callFetch(`${URL}/semesters/${semesterID}`, 'DELETE')
    .then((data) => {
      if (data.deleted) {
        dispatch({ type: 'DELETE_SEMESTER_SUCCESS', payload: semesterID });
      } else {
        throw new Error('cant delete this semester NAGRIN');
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_SEMESTER_FAILED', payload: err }));
};

export const clearSingle = () => ({
  type: 'CLEAR_SINGLE',
});
