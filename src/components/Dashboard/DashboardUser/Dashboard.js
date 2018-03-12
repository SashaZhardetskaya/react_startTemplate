import React, {Component} from "react";
import CourseStatusContainer from "../../../containers/Dashboard/DashboardUser/CourseStatusContainer";
import PropTypes from 'prop-types';


class Dashboard extends Component {

    //LifecycleMethods
    componentDidMount() {
    }

    render() {
        return (
            <div
                id="content-container"
                className="content-wrapper"
            >
                <section className="content">
                    <div className="row">
                        <CourseStatusContainer/>
                    </div>
                </section>
            </div>
        )
    }
}

Dashboard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        rank: PropTypes.number.isRequired,
        commonProgress: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        courseList: PropTypes.array.isRequired
    })
};

export default Dashboard;