import {videoQuestions} from "../../data/EditChapterPart/videoQuestions";
import {ACTION_DELETE_QUIZ_QUESTION} from "./quizQuestionActions";
// import * as net from "../../utils/network";

export const ACTION_GET_VIDEO_QUESTIONS = 'ACTION_GET_VIDEO_QUESTIONS';
export const ACTION_VIDEO_QUIZ_QUESTION = 'ACTION_VIDEO_QUIZ_QUESTION';


// function actionVideoQuestionsLoaded(notifications) {
//     return {
//         type: ACTION_GET_VIDEO_QUESTIONS,
//         payload: videoQuestions
//     };
// }
//
// CREATORS
// export function getVideoQuestions() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionVideoQuestionsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getVideoQuestions() {
    return {
        type: ACTION_GET_VIDEO_QUESTIONS,
        payload: videoQuestions
    };
}

export function deleteVideoQuestion(id) {
    return {
        type: ACTION_VIDEO_QUIZ_QUESTION,
        payload: id
    };
}