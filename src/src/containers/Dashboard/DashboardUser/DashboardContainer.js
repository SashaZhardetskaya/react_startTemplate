import {connect} from "react-redux";

import Dashboard from "../../../components/Dashboard/DashboardUser/Dashboard";
import * as StudentActions from "../../../store/actions/studentActions";
import * as RemindersActions from "../../../store/actions/remindersActions";

const mapStateToProps = (state) => ({
    ...state.reminders
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(RemindersActions.getReminders());
    },
    getLocation: () =>{
        dispatch(StudentActions.getLocationStudent())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);