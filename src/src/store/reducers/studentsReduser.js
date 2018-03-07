import * as StudentsActions from '../actions/studentsActions';

const defaultState = {
    students: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case StudentsActions.ACTION_GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            };
        default:
            return state;
    }
}