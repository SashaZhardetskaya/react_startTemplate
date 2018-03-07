import {connect} from "react-redux";
import * as CoursesActions from '../../store/actions/coursesActions';
import CourseAdmin from '../../components/AdminPanel/CourseAdmin';

const mapStateToProps = (state) => ({
    ...state.courses
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCourses: () => {
        dispatch(CoursesActions.getCoursesForAdmin());
    },
    removeChapterConfirmation: (id) => {
        dispatch(CoursesActions.deleteChapterPart(id));
    },
    hideModalDelete: () => {
        dispatch(CoursesActions.hideModalDeletePart());
    },
    editChapterInfo: (chapter) => {
        dispatch(CoursesActions.editChapterInformation(chapter));
    },
    addNewChapter: (chapter, id) => {
        dispatch(CoursesActions.addChapter(chapter, id));
    },
    deleteOneChapter: (id) => {
        dispatch(CoursesActions.deleteChapter(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseAdmin);