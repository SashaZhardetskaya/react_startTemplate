import {connect} from "react-redux";
import * as QuizQuestionActions from "../../store/actions/quizQuestionActions";
import EditQuizQuestions from "../../components/EditChapterPart/EditQuizQuestions";

const mapStateToProps = (state) => ({
    ...state.quizQuestions
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(QuizQuestionActions.getQuizQuestions());
    },
    onQuizQuestionDelete: (id) => {
        dispatch(QuizQuestionActions.deleteQuizQuestion(id));
    },
    onQuizQuestionUpdate: (id, info) => {
        dispatch(QuizQuestionActions.updateQuizQuestion(id, info))
    },
    onQuizQuestionAdd: (info) => {
        dispatch(QuizQuestionActions.addQuizQuestion(info))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditQuizQuestions);