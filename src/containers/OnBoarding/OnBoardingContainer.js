import {connect} from "react-redux";
import * as InfoActions from '../../store/actions/infoActions';
import OnBoarding from "../../components/onBoarding/OnBoarding";

const mapStateToProps = (state) => ({
    ...state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    onBasicInfoUpdate: (update) => {
        dispatch(InfoActions.updateBasicUserInfo(update));
    },
    onContactsInfoUpdate: (update) => {
        dispatch(InfoActions.updateContactsUserInfo(update));
    },
    onEducationInfoUpdate: (update) => {
        dispatch(InfoActions.updateEducationUserInfo(update));
    },
    onCircumstancesInfoUpdate: (update) => {
        dispatch(InfoActions.updateCircumstancesUserInfo(update));
    },
    onLsatInfoUpdate: (update) => {
        dispatch(InfoActions.updateLsatUserInfo(update));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OnBoarding);