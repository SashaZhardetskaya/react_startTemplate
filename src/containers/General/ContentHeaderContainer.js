import {connect} from "react-redux";
import * as AuthActions from '../../store/actions/authActions';
import * as SidebarActions from "../../store/actions/sidebarActions";
import ContentHeader from "../../components/Common/ContentHeader";
import * as NotificationsActions from '../../store/actions/notificationsActions';
import * as TasksProgressActions from '../../store/actions/tasksProgressActions';

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.notifications,
    ...state.tasksProgress
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => {
        dispatch(AuthActions.logoutUserAction());
    },
    onSidebarToggleCollapse: () => {
        dispatch(SidebarActions.toggleSidebarCollapsedAction());
    },
    onNotificationsLoad: () => {
        dispatch(NotificationsActions.getNotifications());
    },
    onTaskProgressLoad: () => {
        dispatch(TasksProgressActions.getTaskProgress());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentHeader);