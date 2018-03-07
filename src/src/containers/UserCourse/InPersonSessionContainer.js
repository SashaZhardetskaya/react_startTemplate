import {connect} from "react-redux";
import * as StudentsActions from '../../store/actions/studentsActions';
import InPersonSession from "../../components/UserCourse/InPersonSession";

const mapStateToProps = (state) => ({
    ...state.students
});


const mapDispatchToProps = (dispatch) => ({
    onStudentsLoad: () => {
        dispatch(StudentsActions.getStudents());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InPersonSession);

