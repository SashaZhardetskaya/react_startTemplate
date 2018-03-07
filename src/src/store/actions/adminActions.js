import {adminInfo} from "../../data/adminInfo";
import {studentProfile} from "../../data/studentProfile";
// import * as net from "../../utils/network";

export const ACTION_GET_INFO = 'ACTION_GET_INFO';
export const ACTION_GET_INFO_ABOUT_STUDENT = 'ACTION_GET_INFO_ABOUT_STUDENT';

// function actionAdminInfoLoaded(adminInfo) {
//     return {
//         type: ACTION_GET_INFO,
//         payload: adminInfo
//     };
// }
//
// CREATORS
// export function getInfoForAdmin() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionAdminInfoLoaded(data.filter((adminInfo) => adminInfo === core))); //or any other relevant condition
//             });
//     };
// }

export function getInfoForAdmin() {
    return {
        type:ACTION_GET_INFO,
        payload: adminInfo
    };
}

export function getInfoAboutStudent() {
    return {
        type: ACTION_GET_INFO_ABOUT_STUDENT,
        payload: studentProfile
    }
}