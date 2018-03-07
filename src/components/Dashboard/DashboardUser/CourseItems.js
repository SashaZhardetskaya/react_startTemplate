import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

/**
 * Site courses.
 */
class CourseItems extends Component {
    state = {
        courseClassName: "disabled-course-click",
        el: null
    };

    //Actions
    handleChangeShake = (index) => {
        this.setState({
            el: index,
            courseClassName: "disabled-course-click"
        });

        setTimeout(() => {
            this.setState({
                courseClassName: ''
            })
        }, 500);
    };

    //Renders
    renderItems = (courseList) => (
        courseList.map((course, index) => (
            <li
                key={index}
                className={
                    course.unlocked
                        ?  "active-course"
                        : "disabled-course "
                        + (this.state.el === index
                            ? this.state.courseClassName
                            : "")
                }
            >
                <Link
                    to={course.unlocked
                        ? `/video/${course.name.toLowerCase()}`
                        : '#'}
                    onClick={ () => this.handleChangeShake(index) }
                >
                    {
                        !course.unlocked &&
                        <i className="zmdi zmdi-lock"/>
                    }
                    <h3>
                        {course.name}
                    </h3>
                    <p className="course-completed">
                        {course.progress}% Complete
                    </p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={course.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                                width: `${course.progress + '%'}`
                            }}
                        />
                    </div>
                </Link>
            </li>
        ))
    );

    render() {
        const {courseList} = this.props.user;

        return (
            <div className="subjects-with-status">
                <ul>
                    {this.renderItems(courseList)}
                </ul>
            </div>
        );
    }
}

CourseItems.propTypes = {
    user: PropTypes.shape({
        rank: PropTypes.number.isRequired,
        commonProgress: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        courseList: PropTypes.array.isRequired
    })

};

export default CourseItems;