import * as VideoActions from '../actions/videoActions';

const defaultState = {
    videoGallery: [],
    videoDescription: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case VideoActions.ACTION_VIDEO_INITIALIZE:
            return {
                ...state,
                ...action.payload
            };
        case VideoActions.ACTION_GET_VIDEO_DESCRIPTION:
            return {
                ...state,
                videoDescription: action.payload
            };
        default:
            return state;
    }
};