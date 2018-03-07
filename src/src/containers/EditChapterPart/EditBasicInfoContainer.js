import {connect} from "react-redux";
import * as ChapterPartActions from "../../store/actions/chapterPartActions";
import EditBasicInfo from "../../components/EditChapterPart/EditBasicInfo";

const mapStateToProps = (state) => ({
    ...state.chapterPart
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(ChapterPartActions.getChapterPartInfo());
    },
    onChapterPartUpdate: (info) => {
        dispatch(ChapterPartActions.updateChapterPartInfo(info))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBasicInfo);