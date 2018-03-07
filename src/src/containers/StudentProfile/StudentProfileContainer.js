import {connect} from "react-redux";
import StudentProfile from '../../components/StudentProfile/StudentProfile';
import * as AdminActions from "../../store/actions/adminActions";

const mapStateToProps = (state) => ({
    ...state.auth,
    ...state.adminInfo
});

const mapDispatchToProps = (dispatch) => ({
    getStudentProfile: () => {
      dispatch(AdminActions.getInfoAboutStudent())
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentProfile);