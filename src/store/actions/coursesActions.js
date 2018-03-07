import courses from "../../data/courses";
// import * as net from "../../utils/network";

export const ACTION_GET_COURSES = 'ACTION_GET_COURSES';
export const ACTION_SHOW_MODAL_DELETE_PART = 'ACTION_SHOW_MODAL_DELETE_PART';
export const ACTION_DELETE_CHAPTER_PART = 'ACTION_DELETE_CHAPTER_PART';
export const ACTION_HIDE_MODAL_DELETE_PART = 'ACTION_HIDE_MODAL_DELETE_PART';
export const ACTION_EDIT_CHAPTER_INFORMATION = 'ACTION_EDIT_CHAPTER_INFORMATION';
export const ACTION_DELETE_ONE_CHAPTER = 'ACTION_DELETE_ONE_CHAPTER';
export const ACTION_ADD_NEW_CHAPTER = 'ACTION_ADD_NEW_CHAPTER';

// function actionCoursesLoaded(notifications) {
//     return {
//         type: ACTION_GET_COURSES,
//         payload: courses
//     };
// }
// CREATORS
// export function getCoursesForAdmin() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionCoursesLoaded(data.filter((courses) => courses === core))); //or any other relevant condition
//             });
//     };
// }

export function getCoursesForAdmin() {
    return {
        type: ACTION_GET_COURSES,
        payload: courses
    };
}

export function showModalDeletePart(id) {
    return {
        type: ACTION_SHOW_MODAL_DELETE_PART,
        payload: id
    }
}

export function hideModalDeletePart() {
    return {type: ACTION_HIDE_MODAL_DELETE_PART}
}

export function deleteChapterPart(id) {
    return {
        type: ACTION_DELETE_CHAPTER_PART,
        payload: id
    };
}

export function editChapterInformation(chapter) {
    return {
        type: ACTION_EDIT_CHAPTER_INFORMATION,
        payload: chapter
    }
}
export function addChapter(chapter, id) {
    return {
        type: ACTION_ADD_NEW_CHAPTER,
        payload: {
            newChapter: chapter,
            courseId: id
        }
    }
}
export function deleteChapter(id) {
    return {
        type: ACTION_DELETE_ONE_CHAPTER,
        payload: id
    }
}