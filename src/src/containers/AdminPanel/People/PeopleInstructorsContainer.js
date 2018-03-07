import {connect} from "react-redux";
import * as InstructorsActions from '../../../store/actions/instructorsActions';
import PeopleInstructors from '../../../components/AdminPanel/People/PeopleInstructors';

const mapStateToProps = (state) => ({
    ...state.instructors
});

const mapDispatchToProps = (dispatch) => ({
    getInstructorsData: () => {
        dispatch(InstructorsActions.getInstructors());
    },
    instructorDelete: (id) => {
        dispatch(InstructorsActions.deleteInstructor(id));
    },
    editAccessInstructor: (val, id) => {
        dispatch(InstructorsActions.editAccess(val, id));
    },
    editReferralsInstructor: (val, id) => {
        dispatch(InstructorsActions.editReferrals(val, id));
    },
    editCoursesInstructor: (val, id) => {
        dispatch(InstructorsActions.editCourses(val, id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleInstructors);