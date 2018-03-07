import {connect} from "react-redux";

import CourseStatus from "../../../components/Dashboard/DashboardUser/CourseStatus";

const mapStateToProps = (state) => ({
    ...state.auth,
});

export default connect(
    mapStateToProps,
    null
)(CourseStatus);