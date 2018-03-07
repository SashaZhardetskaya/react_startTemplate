import React, {Component} from "react";
import CourseStatusContainer from "../../../containers/Dashboard/DashboardUser/CourseStatusContainer";
import PropTypes from 'prop-types';


class Dashboard extends Component {

    //LifecycleMethods
    componentDidMount() {
        this.props.onLoad();
        this.props.getLocation()
    }

    //Renders
    renderDashboardHeader = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        The Dashboard
                    </h1>
                    <small className="text-muted">
                        Everything Starts Here
                    </small>
                </div>
            </div>
        </div>
    );


    render() {
        return (
            <div
                id="content-container"
                className="content-wrapper"
            >
                {this.renderDashboardHeader()}
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