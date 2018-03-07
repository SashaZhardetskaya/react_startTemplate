import {tasksProgress} from "../../data/tasksProgress";
// import * as net from "../../utils/network";

export const ACTION_GET_TASKS_PROGRESS = 'ACTION_GET_TASKS_PROGRESS';

// function actionTaskProgressLoaded(notifications) {
//     return {
//         type: ACTION_GET_TASKS_PROGRESS,
//         payload: notifications
//     };
// }
//
// CREATORS
// export function getTaskProgress() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionNotificationsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getTaskProgress() {
    return {
        type: ACTION_GET_TASKS_PROGRESS,
        payload: tasksProgress
    };
}