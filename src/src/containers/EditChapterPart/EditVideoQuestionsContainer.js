import {connect} from "react-redux";
import * as VideoQuestionActions from "../../store/actions/videoQuestionActions";
import EditVideoQuestions from "../../components/EditChapterPart/EditVideoQuestions";

const mapStateToProps = (state) => ({
    ...state.videoQuestions
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(VideoQuestionActions.getVideoQuestions());
    },
    onVideoQuestionDelete: (id) => {
        dispatch(VideoQuestionActions.deleteVideoQuestion(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditVideoQuestions);
