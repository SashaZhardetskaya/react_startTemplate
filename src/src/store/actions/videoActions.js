import videoGallery from '../../data/videoGallery';
import {VideoQuestionSummary} from '../../data/videoQuestionSummary';
import {LectureObjectives} from '../../data/lectureObjectives';
import {videoDescription} from '../../data/videoDescription';

export const ACTION_VIDEO_INITIALIZE = 'ACTION_VIDEO_INITIALIZE';
export const ACTION_GET_VIDEO_QUESTION_SUMMERY = 'ACTION_GET_VIDEO_QUESTION_SUMMERY';
export const ACTION_GET_LECTURE_OBJECTIVES = 'ACTION_GET_LECTURE_OBJECTIVES';
export const ACTION_GET_VIDEO_DESCRIPTION = 'ACTION_GET_VIDEO_DESCRIPTION';

export function getVideoInitialAction() {
    return {
        type: ACTION_VIDEO_INITIALIZE,
        payload: {videoGallery}
    }
}

export function getVideoQuestionSummary() {
    return {
        type: ACTION_GET_VIDEO_QUESTION_SUMMERY,
        payload: VideoQuestionSummary
    }
}

export function getLectureObjectives() {
    return {
        type: ACTION_GET_LECTURE_OBJECTIVES,
        payload: LectureObjectives
    }
}

export function getVideoDescription() {
    return {
        type: ACTION_GET_VIDEO_DESCRIPTION,
        payload: videoDescription
    }
}