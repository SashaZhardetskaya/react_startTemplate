import {connect} from "react-redux";
import * as AdminActions from '../../../store/actions/adminActions';
import DashboardAdmin from '../../../components/Dashboard/DashboardAdmin/DashboardAdmin';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    onLoadInfo: () => {
        dispatch(AdminActions.getInfoForAdmin());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardAdmin);