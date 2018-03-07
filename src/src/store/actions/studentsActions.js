import {students} from "../../data/students";
import {chemistryTestScore} from "../../data/chemistryTestScore";
import {practiceTestScore} from "../../data/practiceTestScore";
// import * as net from "../../utils/network";

export const ACTION_GET_STUDENTS = 'ACTION_GET_STUDENTS';
export const ACTION_GET_STUDENT_CHEMISTRY_TESTS_INFO = "ACTION_GET_STUDENT_CHEMISTRY_TESTS_INFO";
export const ACTION_GET_STUDENT_PRACTICE_TESTS_INFO = "ACTION_GET_STUDENT_PRACTICE_TESTS_INFO";

// function actionStudentsLoaded(students) {
//     return {
//         type: ACTION_GET_STUDENTS,
//         payload: students
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
//                 dispatch(actionStudentsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getStudents() {
    return {
        type: ACTION_GET_STUDENTS,
        payload: students
    };
}

export function getStudentChemistryTestInfo() {
    return {
        type: ACTION_GET_STUDENT_CHEMISTRY_TESTS_INFO,
        payload: chemistryTestScore
    };
}

export function getStudentPracticeTestInfo() {
    return {
        type: ACTION_GET_STUDENT_PRACTICE_TESTS_INFO,
        payload: practiceTestScore
    };
}


