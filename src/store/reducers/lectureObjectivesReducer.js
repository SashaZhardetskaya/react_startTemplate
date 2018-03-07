import * as VideoActions from '../actions/videoActions';

const defaultState = {
    lectureObjectives: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case VideoActions.ACTION_GET_LECTURE_OBJECTIVES:
            return {
                ...state,
                lectureObjectives: action.payload
            };
        default:
            return state;
    }
}