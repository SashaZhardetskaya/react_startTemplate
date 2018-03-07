import {reminders} from "../../data/reminders";
import {calendarReminders} from "../../data/calendarReminders";
// import * as net from "../../utils/network";

export const ACTION_GET_REMINDERS = 'ACTION_GET_REMINDERS';
export const ACTION_GET_CALENDAR_REMINDERS = 'ACTION_GET_CALENDAR_REMINDERS';

// function actionRemindersLoaded(reminders) {
//     return {
//         type: ACTION_GET_REMINDERS,
//         payload: reminders
//     };
// }
//
// CREATORS
// export function getReminders() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionRemindersLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getReminders() {
    return {
        type: ACTION_GET_REMINDERS,
        payload: reminders
    };
}

export function getCalendarReminders() {
    return {
        type: ACTION_GET_CALENDAR_REMINDERS,
        payload: calendarReminders
    };
}