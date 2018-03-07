import {connect} from "react-redux";
import * as StudentsActions from "../../store/actions/studentsActions";
import * as RemindersActions from "../../store/actions/remindersActions";
import * as TestInfoActions from "../../store/actions/testInfoActions";
import StudentCourse from "../../components/StudentProfile/StudentCourse";

const mapStateToProps = (state) => ({
    ...state.testsScore,
    calendarReminders: state.reminders.calendarReminders,
    ...state.testInfo
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(StudentsActions.getStudentChemistryTestInfo());
        dispatch(RemindersActions.getCalendarReminders());
        dispatch(StudentsActions.getStudentPracticeTestInfo());
        dispatch(TestInfoActions.getTestInfo());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentCourse);