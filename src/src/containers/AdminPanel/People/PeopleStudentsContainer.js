import {connect} from "react-redux";
import * as StudentsPeopleActions from '../../../store/actions/studentsPeopleActions';
import PeopleStudents from '../../../components/AdminPanel/People/PeopleStudents';

const mapStateToProps = (state) => ({
    ...state.studentsPeople
});

const mapDispatchToProps = (dispatch) => ({
    getStudentsData: () => {
        dispatch(StudentsPeopleActions.getStudents());
    },
    studentDelete: (id) => {
        dispatch(StudentsPeopleActions.deleteStudent(id));
    },
    editAccessStudent: (val, id) => {
        dispatch(StudentsPeopleActions.editAccess(val, id));
    },
    editReferralsStudent: (val, id) => {
        dispatch(StudentsPeopleActions.editReferrals(val, id));
    },
    editCoursesStudent: (val, id) => {
        dispatch(StudentsPeopleActions.editCourses(val, id))
    },
    editNextPaymentStudent: (val, id) => {
        dispatch(StudentsPeopleActions.editNextPayment(val, id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleStudents);