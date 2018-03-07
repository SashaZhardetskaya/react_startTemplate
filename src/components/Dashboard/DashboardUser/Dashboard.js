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

    renderActivityPanel = () => (
        <div className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    <i className="zmdi zmdi-run"/>
                    Live Feed
                </h3>
            </div>
            <div className="panel-body sp-10">
                <div className="timeline">
                    {this.renderActivityItem()}
                </div>
            </div>
        </div>
    );

    renderActivityItem = () => (
        this.props.reminders.map((item, index) => (
            <div
                key={index}
                className="timeline-entry"
            >
                <div className="timeline-stat">
                    <div className={`timeline-icon bg-${item.status}`}>
                        <i className={`zmdi zmdi-${item.type}`}/>
                    </div>
                </div>
                <div className="timeline-label">
                    <h3>{item.title}</h3>
                    <p>{item.text} </p>
                    <p>
                        {
                            item.date
                            && <i className="zmdi zmdi-calendar"/>
                        }
                        {item.date}
                    </p>
                </div>
            </div>
        ))
    );

    renderReminders = () => (
        <div className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    <i className="zmdi zmdi-notifications-active"/>
                    Reminders
                </h3>
            </div>
            <div className="panel-body">
                <ul className="reminders">
                    {this.renderReminder()}
                </ul>
            </div>
        </div>
    );

    renderReminder = () => (
        this.props.reminders.map((item, index) => (
            <li key={index}>
                <div className={`alert alert-${item.status}`}>
                    <h3>{item.title}</h3>
                    <p className="due-date">
                        {item.date}
                    </p>
                    <p>
                        {item.text}
                    </p>
                </div>
            </li>
        ))
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
                        <div className="col-sm-4">
                            {this.renderActivityPanel()}
                            {this.renderReminders()}
                        </div>
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