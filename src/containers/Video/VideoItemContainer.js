import {connect} from "react-redux";
import VideoItem from '../../components/Video/VideoItem';
import * as VideoActions from "../../store/actions/videoActions";
import * as QuizQuestionActions from "../../store/actions/quizQuestionActions";

const mapStateToProps = (state) => ({
    ...state.lectureObjectives,
    ...state.videoQuestionSummery,
    ...state.quizQuestions,
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(VideoActions.getVideoQuestionSummary());
        dispatch(VideoActions.getLectureObjectives());
        dispatch(QuizQuestionActions.getQuizQuestions());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoItem);
