import * as StudentsActions from '../actions/studentsActions';

const defaultState = {
    chemistryTestScore: [],
    practiceTestScore: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case StudentsActions.ACTION_GET_STUDENT_CHEMISTRY_TESTS_INFO:
            return {
                ...state,
                chemistryTestScore: action.payload
            };
        case StudentsActions.ACTION_GET_STUDENT_PRACTICE_TESTS_INFO:
            return {
                ...state,
                practiceTestScore: action.payload
            };
        default:
            return state;
    }
}