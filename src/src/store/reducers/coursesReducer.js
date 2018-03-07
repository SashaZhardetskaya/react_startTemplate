import * as CoursesActions from '../actions/coursesActions';
import {
    addNewChapterTransformation, deleteChapterPartTransformation, deleteOneChapterTransformation,
    editChapterInformationTransformation
} from "../../utils/chapterDataTransformation";

const defaultState = {
    courses: [],
    showModalDeletePart: false,
    partId: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CoursesActions.ACTION_GET_COURSES:
            return {
                ...state,
                courses: action.payload
            };
        case CoursesActions.ACTION_SHOW_MODAL_DELETE_PART:
            return {
                ...state,
                showModalDeletePart: true,
                partId: action.payload
            };
        case CoursesActions.ACTION_HIDE_MODAL_DELETE_PART:
            return {
                ...state,
                showModalDeletePart: false
            };
        case CoursesActions.ACTION_DELETE_CHAPTER_PART:
            return {
                ...state,
                courses: deleteChapterPartTransformation(state.courses, action.payload)
            };
        case CoursesActions.ACTION_EDIT_CHAPTER_INFORMATION:
            return {
                ...state,
                courses: editChapterInformationTransformation(state.courses, action.payload)
            };
        case CoursesActions.ACTION_ADD_NEW_CHAPTER:
            return {
                ...state,
                courses: addNewChapterTransformation(state.courses, action.payload)
            };
        case CoursesActions.ACTION_DELETE_ONE_CHAPTER:
            return {
                ...state,
                courses: deleteOneChapterTransformation(state.courses, action.payload)
            };
        default:
            return state;
    }
}