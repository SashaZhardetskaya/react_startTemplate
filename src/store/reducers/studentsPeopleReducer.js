import * as StudentsPeopleActions from '../actions/studentsPeopleActions';
import {editAccessStudentTransformation, editReferralsStudentTransformation, editCoursesStudentTransformation, editNextPaymentStudentTransformation} from "../../utils/studentsPeopleTransformation";

const defaultState = {
    studentsPeople: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case StudentsPeopleActions.ACTION_GET_STUDENTS:
            return {
                ...state,
                studentsPeople: action.payload
            };
        case StudentsPeopleActions.ACTION_DELETE_STUDENT:
            return {
                ...state,
                studentsPeople: state.studentsPeople.filter((item) => item.id !== action.payload)
            };
        case StudentsPeopleActions.ACTION_EDIT_ACCESS_STUDENT:
            return {
                ...state,
                studentsPeople: editAccessStudentTransformation(state.studentsPeople, action.payload)
            };
        case StudentsPeopleActions.ACTION_EDIT_REFERRALS_STUDENT:
            return {
                ...state,
                studentsPeople: editReferralsStudentTransformation(state.studentsPeople, action.payload)
            };
        case StudentsPeopleActions.ACTION_EDIT_COURSES_STUDENT:
            return {
                ...state,
                studentsPeople: editCoursesStudentTransformation(state.studentsPeople, action.payload)
            };
        case StudentsPeopleActions.ACTION_EDIT_NEXT_PAYMENT_STUDENT:
            return {
                ...state,
                studentsPeople: editNextPaymentStudentTransformation(state.studentsPeople, action.payload)
            };
        default:
            return state;
    }
}