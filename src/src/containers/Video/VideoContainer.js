import {connect} from "react-redux";
import Video from '../../components/Video/Video';
import * as VideoActions from "../../store/actions/videoActions";

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.video
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(VideoActions.getVideoInitialAction());
        dispatch(VideoActions.getVideoDescription());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Video);