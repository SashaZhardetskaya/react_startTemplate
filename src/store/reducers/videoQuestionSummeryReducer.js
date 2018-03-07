import * as VideoActions from '../actions/videoActions';

const defaultState = {
    videoQuestionSummery: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case VideoActions.ACTION_GET_VIDEO_QUESTION_SUMMERY:
            return {
                videoQuestionSummery: action.payload
            };
        default:
            return state;
    }
}