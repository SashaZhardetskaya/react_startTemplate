import * as ChapterPartActions from "../actions/chapterPartActions";


const defaultState = {
    chapterPartInfo: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ChapterPartActions.ACTION_GET_CHAPTER_PART_INFO:
            return {
                ...state,
                chapterPartInfo: action.payload
            };
        case ChapterPartActions.ACTION_UPDATE_CHAPTER_PART_INFO:
            return {
                ...state,
                chapterPartInfo: {
                    ...state.chapterPartInfo,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}