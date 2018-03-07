import * as QuizQuestionActions from '../actions/quizQuestionActions';
import {deleteQuizQuestion, updateQuizQuestion} from '../../utils/quizQuestionDataTransformation'

const defaultState = {
    quizQuestions: [
        // {
        //     id: 123,
        //     // conceptName: 'Newton\'s second law of motion',
        //     timeInVideo: 11,
        //     // conceptRefersTo: 110,
        //     question: 'What is equation for Newton\'s second law of motion',
        //     optionA: 'F = ma',
        //     optionB: 'm = FA',
        //     optionC: 'F != ma',
        //     optionD: 'F = ga',
        //     correctOption: 2
        // },
        // {
        //     id: 12678,
        //     // conceptName: 'Newton\'s second law of motion',
        //     timeInVideo: 14,
        //     // conceptRefersTo: 110,
        //     question: 'Much opposite up shoddy sensitive unsuccessfully that dalmatian solemnly grasshopper tig?',
        //     optionA: 'Jeepers illicit yike',
        //     optionB: 'By spite a',
        //     optionC: 'Jeepers illicit yike',
        //     optionD: 'Justly away shak',
        //     correctOption: 1
        // },
        // {
        //     id: 3456123,
        //     // conceptName: 'Newton\'s second law of motion',
        //     timeInVideo: 21,
        //     // conceptRefersTo: 110,
        //     question: 'Justly away shaky re-laid including therefore much dangerous aside mu?',
        //     optionA: 'F = ma',
        //     optionB: 'm = FA',
        //     optionC: 'Justly away shak',
        //     optionD: 'F = ga',
        //     correctOption: 4
        // },
        // {
        //     id: 8909123,
        //     // conceptName: 'Newton\'s second law of motion',
        //     timeInVideo: 35,
        //     // conceptRefersTo: 110,
        //     question: 'Justly away shaky re-laid including therefore much dangerous aside mu?',
        //     optionA: 'F = ma',
        //     optionB: 'm = FA',
        //     optionC: 'Justly away shak',
        //     optionD: 'F = ga',
        //     correctOption: 2
        // }
    ],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case QuizQuestionActions.ACTION_GET_QUIZ_QUESTIONS:
            return {
                ...state,
                quizQuestions: action.payload
            };
        case QuizQuestionActions.ACTION_DELETE_QUIZ_QUESTION:
            return {
                ...state,
                quizQuestions:
                    deleteQuizQuestion(state, action.payload)
            };
        case QuizQuestionActions.ACTION_UPDATE_QUIZ_QUESTION:
            return {
                ...state,
                quizQuestions:
                    updateQuizQuestion(state, action.payload)
            };
        case QuizQuestionActions.ACTION_ADD_QUIZ_QUESTION:
            return {
                ...state,
                quizQuestions:
                    [...state.quizQuestions, action.payload],
            };
        default:
            return state;
    }
}