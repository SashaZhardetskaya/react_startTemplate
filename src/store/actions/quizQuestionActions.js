import {quizQuestions} from "../../data/EditChapterPart/quizQuestions";
// import * as net from "../../utils/network";

export const ACTION_GET_QUIZ_QUESTIONS = 'ACTION_GET_QUIZ_QUESTIONS';
export const ACTION_DELETE_QUIZ_QUESTION = 'ACTION_DELETE_QUIZ_QUESTION';
export const ACTION_UPDATE_QUIZ_QUESTION = 'ACTION_UPDATE_QUIZ_QUESTION';
export const ACTION_ADD_QUIZ_QUESTION = 'ACTION_ADD_QUIZ_QUESTION';


// function actionQuizQuestionsLoaded(notifications) {
//     return {
//         type: ACTION_GET_QUIZ_QUESTIONS,
//         payload: quizQuestions
//     };
// }
//
// CREATORS
// export function getQuizQuestions() {
//     return (dispatch, getState) => {
//         const {core} = getState();
//
//         net.aGet('')
//             .then(data => {
//                 dispatch(actionQuizQuestionsLoaded(data.filter((student) => student.course === core.user.course))); //or any other relevant condition
//             });
//     };
// }

export function getQuizQuestions() {
    return {
        type: ACTION_GET_QUIZ_QUESTIONS,
        payload: quizQuestions
    };
}

export function deleteQuizQuestion(id) {
    return {
        type: ACTION_DELETE_QUIZ_QUESTION,
        payload: id
    };
}

export function updateQuizQuestion(id, info) {
    return {
        type: ACTION_UPDATE_QUIZ_QUESTION,
        payload: {
            id : id,
            info : info
        }
    };
}

export function addQuizQuestion(info) {
    return {
        type: ACTION_ADD_QUIZ_QUESTION,
        payload: info
    };
}