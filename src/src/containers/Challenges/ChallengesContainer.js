import {connect} from "react-redux";
import Challenges from "../../components/Challenges/Challenges";
import * as ChallengesActions from "../../store/actions/challengeActions";

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.challenges
});

const mapDispatchToProps = (dispatch) => ({
    onLoadChallenges: () => {
        dispatch(ChallengesActions.getChallengesInitialAction());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Challenges);