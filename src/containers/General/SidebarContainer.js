import {connect} from "react-redux";
import * as AuthActions from '../../store/actions/authActions';
import Sidebar from "../../components/Common/Sidebar";
import * as SidebarActions from "../../store/actions/sidebarActions";

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.sidebar
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(SidebarActions.getSidebarInitialAction());
    },
    setExpandedOnHover: () => {
        dispatch(SidebarActions.setSidebarExpandedOnHover());
    },
    setCollapsedOnHover: () => {
        dispatch(SidebarActions.setSidebarCollapsedOnHover());
    },
    onLogout: () => {
        dispatch(AuthActions.logoutUserAction());
    },
    handleClickMenuItem: (item) => {
        dispatch(SidebarActions.setSidebarHandleClickMenuItem(item));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);