import {instructors} from "../../data/People/instructors";
// import * as net from "../../utils/network";

export const ACTION_GET_INSTRUCTORS = 'ACTION_GET_INSTRUCTORS';
export const ACTION_DELETE_INSTRUCTOR = 'ACTION_DELETE_INSTRUCTOR';
export const ACTION_EDIT_ACCESS_INSTRUCTOR = 'ACTION_EDIT_ACCESS_INSTRUCTOR';
export const ACTION_EDIT_REFERRALS_INSTRUCTOR = 'ACTION_EDIT_REFERRALS_INSTRUCTOR';
export const ACTION_EDIT_COURSES_INSTRUCTOR = 'ACTION_EDIT_COURSES_INSTRUCTOR';
// function actionInstructorsLoaded(instructors) {
//     return {
//         type: ACTION_GET_INSTRUCTORS,
//         payload: instructors
//     };
// }
//
// CREATORS
// export function getStudents() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionInstructorsLoaded(data.filter((instructor) => instructor.course === core.instructor.course))); //or any other relevant condition
//             });
//     };
// }

export function getInstructors() {
    return {
        type: ACTION_GET_INSTRUCTORS,
        payload: instructors
    };
}

export function deleteInstructor(id) {
    return {
        type: ACTION_DELETE_INSTRUCTOR,
        payload: id
    }
}

export function editAccess(val, id) {
    return {
        type: ACTION_EDIT_ACCESS_INSTRUCTOR,
        payload: {
            val: val,
            id: id
        }
    }
}

export function editReferrals(val, id) {
    return {
        type: ACTION_EDIT_REFERRALS_INSTRUCTOR,
        payload: {
            val: val,
            id: id
        }
    }
}

export function editCourses(val, id) {
    return {
        type: ACTION_EDIT_COURSES_INSTRUCTOR,
        payload: {
            val: val,
            id: id
        }
    }
}


