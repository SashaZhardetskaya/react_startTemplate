import * as InstructorsActions from '../actions/instructorsActions';
import {editAccessInstructorTransformation, editReferralsInstructorTransformation,editCoursesInstructorTransformation} from "../../utils/instructorsPeopleTransformation";

const defaultState = {
    instructors: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case InstructorsActions.ACTION_GET_INSTRUCTORS:
            return {
                ...state,
                instructors: action.payload
            };
        case InstructorsActions.ACTION_DELETE_INSTRUCTOR:
            return {
                ...state,
                instructors: state.instructors.filter((item) => item.id !== action.payload)
            };
        case InstructorsActions.ACTION_EDIT_ACCESS_INSTRUCTOR:
            return {
                ...state,
                instructors: editAccessInstructorTransformation(state.instructors, action.payload)
            };
        case InstructorsActions.ACTION_EDIT_REFERRALS_INSTRUCTOR:
            return {
                ...state,
                instructors: editReferralsInstructorTransformation(state.instructors, action.payload)
            };
        case InstructorsActions.ACTION_EDIT_COURSES_INSTRUCTOR:
            return {
                ...state,
                instructors: editCoursesInstructorTransformation(state.instructors, action.payload)
            };
        default:
            return state;
    }
}