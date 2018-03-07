import {connect} from "react-redux";
import * as InfoActions from '../../store/actions/infoActions';
import Settings from "../../components/Settings/Settings";

const mapStateToProps = (state) => ({
    ...state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    onBasicInfoUpdate: (update) => {
        dispatch(InfoActions.updateBasicUserInfo(update));
    },
    onContactsInfoUpdate: (update) => {
        dispatch(InfoActions.updateContactsUserInfo(update));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);