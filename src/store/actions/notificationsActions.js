import {notifications} from "../../data/notifications";
// import * as net from "../../utils/network";

export const ACTION_GET_NOTIFICATIONS = 'ACTION_GET_NOTIFICATIONS';

// function actionNotificationsLoaded(notifications) {
//     return {
//         type: ACTION_GET_NOTIFICATIONS,
//         payload: notifications
//     };
// }
//
// CREATORS
// export function getNotifications() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionNotificationsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getNotifications() {
    return {
        type: ACTION_GET_NOTIFICATIONS,
        payload: notifications
    };
}