import {connect} from "react-redux";
import * as AuthActions from '../../store/actions/authActions';
import * as SidebarActions from "../../store/actions/sidebarActions";
import ContentHeader from "../../components/Common/ContentHeader";

const mapStateToProps = (state) => ({
    ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => {
        dispatch(AuthActions.logoutUserAction());
    },
    onSidebarToggleCollapse: () => {
        dispatch(SidebarActions.toggleSidebarCollapsedAction());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentHeader);