import {studentsPeople} from "../../data/People/students";
// import * as net from "../../utils/network";

export const ACTION_GET_STUDENTS = 'ACTION_GET_STUDENTS';
export const ACTION_DELETE_STUDENT = 'ACTION_DELETE_STUDENT';
export const ACTION_EDIT_ACCESS_STUDENT = 'ACTION_EDIT_ACCESS_STUDENT';
export const ACTION_EDIT_REFERRALS_STUDENT = 'ACTION_EDIT_REFERRALS_STUDENT';
export const ACTION_EDIT_COURSES_STUDENT = 'ACTION_EDIT_COURSES_STUDENT';
export const ACTION_EDIT_NEXT_PAYMENT_STUDENT = 'ACTION_EDIT_NEXT_PAYMENT_STUDENT';
// function actionStudentsLoaded(students) {
//     return {
//         type: ACTION_GET_STUDENTS,
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
//                 dispatch(actionStudentsLoaded(data.filter((students) => students.course === core.students.course))); //or any other relevant condition
//             });
//     };
// }

export function getStudents() {
    return {
        type: ACTION_GET_STUDENTS,
        payload: studentsPeople
    };
}

export function deleteStudent(id) {
    return {
        type: ACTION_DELETE_STUDENT,
        payload: id
    }
}

export function editAccess(val, id) {
    return {
        type: ACTION_EDIT_ACCESS_STUDENT,
        payload: {
            val: val,
            id: id
        }
    }
}

export function editReferrals(val, id) {
    return {
        type: ACTION_EDIT_REFERRALS_STUDENT,
        payload: {
            val: val,
            id: id
        }
    }
}

export function editCourses(val, id) {
    return {
        type: ACTION_EDIT_COURSES_STUDENT,
        payload: {
            val: val,
            id: id
        }
    }
}

export function editNextPayment(val, id) {
    return {
        type: ACTION_EDIT_NEXT_PAYMENT_STUDENT,
        payload: {
            val: val,
            id: id
        }
    }
}

