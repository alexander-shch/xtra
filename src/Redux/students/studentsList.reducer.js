const INITIAL_STATE = {
    listLoading: true,
    innerSinglePageLoading: true,
    studentsList: [],
    error: null,
};

const studentsReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'GET_STUDENTS_START':
            return { ...state , listLoading }
        case 'GET_STUDENTS_SUCCESS':
            return { studentsList };
        case 'GET_STUDENTS_FAILED':
            return error;
        case 'ADD_NEW_STUDENT_START':
            return { innerSinglePageLoading };
        case 'ADD_NEW_STUDENT_SUCCESS':
            return { ...state };
        case 'ADD_NEW_STUDENT_FAILED':
            return error;
        case 'UPDATE_STUDENT_START':
            return { innerSinglePageLoading };
        case 'UPDATE_STUDENT_SUCCESS':
            return { ...state };
        case 'UPDATE_STUDENT_FAILED':
            return error;
        default:
            return state;
        case 'DELETE_STUDENT_START':
            return { innerSinglePageLoading }
        case 'DELETE_STUDENT_SUCCESS':
            return { ...state }
        case 'DELETE_STUDENT_FAILED':
            return error                
    }
}

export default studentsReducer;
