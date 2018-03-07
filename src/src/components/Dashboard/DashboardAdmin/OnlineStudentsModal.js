import React, {Component} from "react";
import PropTypes from "prop-types";
import {Sparklines, SparklinesBars} from 'react-sparklines';
import CountUp from 'react-countup';

class OnlineStudentsModal extends Component{

    //Renders
    renderList = (usersInCourse) => (
        usersInCourse.map((item, index) => (
            <li key={index}>
                {item.nameCourse}
                <span>
                {item.countStudents}
            </span>
            </li>
        ))
    );

    renderCountUser = (total) => (
        <div className="sm-bottom20">
            <p>
                Users Right Now
            </p>
            <div className="font-60 font-300">
                <CountUp
                    start={0}
                    end={total}
                    duration={3.75}
                />
            </div>
        </div>
    );

    renderSparkline = (activeUsers) => (
        <div id="sparkline">
            <Sparklines
                data={activeUsers}
                height={100}
                width={300}
                barWidth={8}
                zeroAxis={false}
            >
                <SparklinesBars
                    style={{fill: "#dbe6fd"}}
                    barWidth={8}
                />
            </Sparklines>
        </div>
    );

    renderContentModal = (usersOnline) => (
        <div
            className="modal-dialog modal-sm"
            role="document"
        >
            <div className="modal-content">
                <div
                    className="modal-body no-padding modal-style"
                >
                    <div className="sp-10">
                        {this.renderCountUser(usersOnline.total)}
                        <p className="border-bottom sp-bottom10">
                            Active Users Per Minute
                        </p>
                        {this.renderSparkline(usersOnline.activeUsers)}
                    </div>
                    <div className="sm-top20">
                        <ul className="active-visitor-list">
                            {this.renderList(usersOnline.countUsersInCourses)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    render() {
        return(
            <div
                className="modal fade"
                id="OnlineStudentsModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
            >
                {this.renderContentModal(this.props.usersOnline)}
            </div>
        );
    }
}

OnlineStudentsModal.propTypes = {
    usersOnline: PropTypes.shape({
        total: PropTypes.number.isRequired,
        countUsersInCourses: PropTypes.array.isRequired,
        activeUsers: PropTypes.array.isRequired
    })
};

export default OnlineStudentsModal;