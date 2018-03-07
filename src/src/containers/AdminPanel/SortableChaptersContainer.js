import {connect} from "react-redux";
import * as CoursesActions from '../../store/actions/coursesActions';
import SortableChapters from '../../components/AdminPanel/SortableChapters';

const mapStateToProps = (state) => ({
    ...state.courses
});

const mapDispatchToProps = (dispatch) => ({
    showModalDelete: (id) => {
        dispatch(CoursesActions.showModalDeletePart(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortableChapters);