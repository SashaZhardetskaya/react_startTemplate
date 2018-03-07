import {testInfo} from "../../data/testInfo";
// import * as net from "../../utils/network";

export const ACTION_GET_TEST_INFO = 'ACTION_GET_TEST_INFO';

// function actionTestInfoLoaded(info) {
//     return {
//         type: ACTION_GET_TASKS_PROGRESS,
//         payload: testInfo
//     };
// }
//
// CREATORS
// export function getTestInfo() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionTestInfoLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getTestInfo() {
    return {
        type: ACTION_GET_TEST_INFO,
        payload: testInfo
    };
}