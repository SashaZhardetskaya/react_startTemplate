import * as VideoQuestionActions from '../actions/videoQuestionActions';
import {videoQuizQuestion} from '../../utils/videoDataTransformation'

const defaultState = {
    videoQuestions: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case VideoQuestionActions.ACTION_GET_VIDEO_QUESTIONS:
            return {
                ...state,
                videoQuestions: action.payload
            };
        case VideoQuestionActions.ACTION_VIDEO_QUIZ_QUESTION:
            return {
                ...state,
                videoQuestions:
                    videoQuizQuestion(state, action.payload)
            };
        default:
            return state;
    }
}