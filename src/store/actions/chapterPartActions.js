import {basicInfo} from "../../data/EditChapterPart/BasicInfo";
// import * as net from "../../utils/network";

export const ACTION_GET_CHAPTER_PART_INFO = 'ACTION_GET_CHAPTER_PART_INFO';
export const ACTION_UPDATE_CHAPTER_PART_INFO = 'ACTION_UPDATE_CHAPTER_PART_INFO';


// function actionChapterPartInfoLoaded(notifications) {
//     return {
//         type: ACTION_GET_CHAPTER_PART_INFO,
//         payload: basicInfo
//     };
// }
//
// CREATORS
// export function getChapterPartInfo() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionChapterPartInfoLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getChapterPartInfo() {
    return {
        type: ACTION_GET_CHAPTER_PART_INFO,
        payload: basicInfo
    };
}

export function updateChapterPartInfo(info) {
    return {
        type: ACTION_UPDATE_CHAPTER_PART_INFO,
        payload: info
    };
}