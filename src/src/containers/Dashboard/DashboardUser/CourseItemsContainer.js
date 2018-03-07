import {connect} from "react-redux";

import CourseItems from '../../../components/Dashboard/DashboardUser/CourseItems';

const mapStateToProps = (state) => ({
    ...state.auth
});

export default connect(
    mapStateToProps,
    null
)(CourseItems);