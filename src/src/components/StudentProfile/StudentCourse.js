import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactHighcharts from 'react-highcharts';
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import {Link} from "react-router-dom";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import CountUp from 'react-countup';
import {chart1Config, chart2Config} from '../../data/StudentCourse/chartsConfig';
import {calendarRemindersStyles} from '../../data/StudentCourse/calendarRemindersStyles';
import {coursesNames} from '../../data/StudentCourse/coursesNames'
import StudentCourseInfo from './StudentCourseInfo'


class StudentCourse extends Component {
    state = {
        show: true,
        showChart: [],
    };

    //Actions
    handleShowChart = (number) => {
        if (this.state.showChart.includes(number)) {
            return this.setState({
                showChart: this.state.showChart.filter((n) => n !== number)
            })
        } else {
            return this.setState({
                showChart: this.state.showChart.concat(number)
            })
        }
    };

    //Renders
    renderNamePage = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Student Profile
                    </h1>
                    <small className="text-muted">
                        Everything Starts Here
                    </small>
                </div>
            </div>
        </div>
    );

    renderTopBlockWithTabs = () => (
        <div className="col-sm-8">
            <div className="nav-tabs-custom no-bg">
                {this.renderHeaderLinks()}
                <div className="tab-content no-bg no-padding">
                    <div className="tab-pane active"
                         id="tab_2"
                    >
                        <div className="nav-tabs-custom no-bg inner-tabs">
                            <ul className="nav nav-tabs">
                                {this.renderCoursesLinks()}
                            </ul>
                            {this.renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderHeaderLinks = () => (
        <ul className="nav nav-tabs bg-white">
            <li>
                <Link to="/student-profile">
                    Overview
                    <span>General Details</span>
                </Link>
            </li>
            <li className="active">
                <Link to="#">
                    MCAT
                    <span>Course Details</span>
                </Link>
            </li>
            <li className="pull-right">
                <Link to="#" style={{paddingRight: 10}}>
                    <div className="font-24 text-orange">
                        <i className="zmdi zmdi-plus-circle"/>
                    </div>
                </Link>
            </li>
        </ul>
    );

    renderCoursesLinks = () => (
        coursesNames.map((item, index) => (
            <li
                className={item.class_name}
                key={index}
            >
                <a
                    href={item.link}
                    data-toggle={item.toggle}
                >
                    {item.name}
                </a>
            </li>
        ))
    );

    renderTabContent = () => (
        <div className="tab-content no-bg no-padding">
            <div className="tab-pane active" id="course_1">
                {this.renderScoreCharts()}
                <div style={{paddingLeft: 10}}>
                    {this.practiceTest()}
                    {this.chemistryFundamentals()}
                </div>
            </div>
            <div className="tab-pane"
                 id="course_2"
            >
                <div className="panel customPanel">
                    <div className="panel-body">
                        course_2
                    </div>
                </div>
            </div>
            <div className="tab-pane"
                 id="course_3"
            >
                <div className="panel customPanel">
                    <div className="panel-body">
                        course_3
                    </div>
                </div>
            </div>
        </div>
    );

    renderScoreCharts = () => (
        <div className="panel customPanel no-margin">
            {this.renderScoreChartsTabs()}
            <div className="panel-body">
                {
                    this.state.show &&
                    <div
                        id="chart_1"
                        className="student_chart"
                        style={{display: "block"}}
                    >
                        <ReactHighcharts config={chart1Config} ref="chart"/>
                    </div>
                }
                {
                    !this.state.show &&
                    <div
                        id="chart_2"
                        className="student_chart"
                        style={{display: "block"}}
                    >
                        <ReactHighcharts config={chart2Config} ref="chart"/>
                    </div>
                }
            </div>
        </div>
    );

    renderScoreChartsTabs = () => (
        <div className="panel-heading bg-light-3">
            <div className="row">
                <div className="col-sm-6">
                    <h3
                        className={
                            "panel-title text-uppercase text-center " +
                            (
                                this.state.show
                                    ? "activeTab"
                                    : ""
                            )
                        }
                    >
                        <Link
                            to="#"
                            onClick={() => {
                                this.setState({show: true});
                            }}
                        >
                            Quiz Progress
                        </Link>
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h3 className={
                        "panel-title text-uppercase text-center " + (
                            this.state.show
                                ? ""
                                : "activeTab"
                        )}
                    >
                        <Link
                            to="#"
                            onClick={() => {
                                this.setState({show: false});
                            }}
                        >
                            Video Question
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );

    renderTestScore = () => (
        this.props.practiceTestScore.map((item, index) => (
            <div
                className="chapter-part"
                key={index}
            >
                <div className="row no-margin">
                    <div className="col-sm-4 no-padding">
                        <div className="sp-10">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <h3 className="font-18 sm-top0">
                                        {item.name}
                                    </h3>
                                </div>
                                <div className="pull-right">
                                    <i className="zmdi zmdi-eye"/>
                                </div>
                            </div>
                            <div className="sm-top0">
                                <div className="progress no-margin">
                                    <div
                                        className="progress-bar progress-bar-success"
                                        role="progressbar"
                                        aria-valuenow={item.progress}
                                        aria-valuemin="0"
                                        data-score={item.progress}
                                        aria-valuemax="100"
                                        style={{width: `${item.progress}%`}}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 no-padding">
                        <div className="row">
                            {this.renderTestTableCell('Time Taken', item.time_taken, ' Minutes')}
                            {this.renderTestTableCell('Content Questions', item.content_question)}
                            {this.renderTestTableCell('Passage Questions', item.passage_quest)}
                            {this.renderTestTableCell('Calculation Errors', item.calculation_error)}
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

    renderTestTableCell = (title, endValue, measurement) => (
        <div className="col-sm-3">
            <div className="head-subhead">
                <p>
                    {title}
                </p>
                <h3>
                    <CountUp
                        start={0}
                        end={endValue}
                        duration={5.75}
                    />
                    {measurement}
                </h3>
            </div>
        </div>
    );

    practiceTest = () => (
        <div className="panel customPanel sm-top20">
            <div className="panel-heading practice-test">
                <h3 className="panel-title text-uppercase">
                    <i className="zmdi zmdi-edit"/>
                    Practice Test Score
                </h3>
            </div>
            <div className="panel-body no-padding">
                {this.renderTestScore()}
            </div>
        </div>
    );

    renderChemistryScore = (items) => (
        items.map((item, index) => (
            <div className="chapter-part"
                 key={index}
            >
                <div className="row no-margin">
                    <div className="col-sm-4 no-padding">
                        <div className="sp-20">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <h3 className="font-18 sm-top0">
                                        {item.name}
                                    </h3>
                                </div>
                                <div className="pull-right">
                                    <i className="zmdi zmdi-eye"/>
                                </div>
                            </div>
                            <div className="sm-top30">
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{width: `${item.progress}%`}}
                                        role="progressbar"
                                        aria-valuenow={item.progress}
                                        aria-valuemin="0"
                                        data-score={item.progress}
                                        aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 no-padding">
                        <div className="row">
                            {this.renderChemistryScoreTableCell('Video Time', item.video_time, 'Hours')}
                            {this.renderChemistryScoreTableCell('Recent Quiz Score', item.recent_quiz_score)}
                            {this.renderChemistryScoreTableCell('Discussion Ratio', item.discussion)}
                            {this.renderChemistryScoreTableCell('Challanges Won', item.challenges)}
                        </div>
                        <div className="row">
                            {this.renderChemistryScoreTableCell('Concepts Wrong', item.concepts_wrong)}
                            {this.renderChemistryScoreTableCell('Recent Quiz Time', item.recent_quiz_time, 'Hours')}
                            {this.renderChemistryScoreTableCell('Merits Earned', item.merits_earned)}
                            {this.renderChemistryScoreTableCell('Challenge Lost', item.challenge_lost)}
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

    renderChemistryScoreTableCell = (title, endValue, measurement) => (
        <div className="col-sm-3">
            <div className="head-subhead">
                <p>{title}</p>
                <h3>
                    <CountUp
                        start={0}
                        end={endValue}
                        duration={5.75}
                    />
                    {measurement}
                </h3>
            </div>
        </div>
    );

    chemistryFundamentals = () => (
        this.props.chemistryTestScore.map((item, index) => (
            <div className="panel customPanel sm-top20 sm-bottom30"
                 key={index}
            >
                <div className="panel-heading bg-light-3">
                    <div className="panel-control text-right">
                        <button
                            className="btn btn-default"
                            onClick={() => this.handleShowChart(item.number)}
                        >
                            Show
                            {
                                this.state.showChart.includes(item.number)
                                    ? "Table"
                                    : "Chart"
                            }
                        </button>
                    </div>
                    <h3 className="panel-title text-uppercase">
                        <i className="zmdi zmdi-library"/>
                        Chapter No. {item.number}: Chemistry Fundamentals
                    </h3>
                </div>
                <div className="panel-body no-padding">
                    <SlideDown className='my-dropdown-slidedown'>
                        {
                            this.state.showChart.includes(item.number) &&
                            <div
                                className="chapter-graph"
                                id="Chart_Chapter_1"
                                data-highcharts-chart="0"
                                style={{position: "relative", marginBottom: 30}}
                            >
                                <ReactHighcharts
                                    config={chart2Config}
                                    ref="chart"/>
                            </div>
                        }
                    </SlideDown>
                    <div className="chapter-parts">
                        {
                            !this.state.showChart.includes(item.number)
                            && this.renderChemistryScore(item.items)
                        }
                    </div>
                </div>
            </div>
        ))
    );

    renderCalendar = () => (
        <div className="sm-bottom30">
            <div id="student-calendar">
                <DayPicker
                    initialMonth={new Date()}
                    showOutsideDays
                    modifiers={this.props.calendarReminders}
                    modifiersStyles={calendarRemindersStyles}
                />
                <div className="calendar-points">
                    <p className="calendar-deadline">
                        Deadline Days
                    </p>
                    <p className="calendar-expect">
                        Expected Deadline
                    </p>
                    <p className="calendar-exam">
                        Exam Day
                    </p>
                    <p className="calendar-graduation">
                        Graduation
                    </p>
                </div>
            </div>
        </div>
    );

    renderActionsPanel = () => (
        <div className="panel customPanel actionsPanel">
            <div className="panel-heading bg-light-3">
                <h3 className="panel-title text-uppercase">
                    Actions
                </h3>
            </div>
            <div className="panel-body">
                <div className="row">
                    {this.renderButton('notifications', 'Send Notification')}
                    {this.renderButton('alarm', 'Send Reminder')}
                    {this.renderButton('lock', 'Restrict Access')}
                    {this.renderButton('alert-triangle', 'Send Alert')}
                    {this.renderButton('refresh', 'Change Lecture Order', 'ChangeLectureOrderModal')}
                    {this.renderButton('lock', 'Lock unlock Videos', 'LockUnlockVideosModal')}
                </div>
            </div>
        </div>
    );

    renderButton = (notifications, text, link) => (
        <div className="col-sm-6">
            <a
                href={
                    link
                        ? '#' + link
                        : '#'
                }
                className="btn btn-default btn-block"
                data-toggle="modal"
                role="button"
            >
                <i className={`zmdi zmdi-${notifications}`}/>
                {text}
            </a>
        </div>
    );

    renderChangeLectureOrderModal = (id, name) => (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
        >
            <div
                className="modal-dialog"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">
                                &times;
                            </span>
                        </button>
                        <h4
                            className="modal-title"
                            id="myModalLabel"
                        >
                            {name}
                        </h4>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    //LifecycleMethods
    componentDidMount() {
        this.props.onLoad();
    };

    render() {

        return (
            <div
                className="content-wrapper"
                id="content-container"
            >
                {this.renderNamePage()}
                <section className="content no-padding">
                    <div className="row">
                        {this.renderTopBlockWithTabs()}
                        <div className="col-sm-4">
                            {
                                this.props.testInfo &&
                                this.props.testInfo.time &&
                                <StudentCourseInfo
                                    testInfo={this.props.testInfo}
                                />
                            }
                            {this.renderCalendar()}
                            {this.renderActionsPanel()}
                        </div>
                    </div>
                </section>
                {this.renderChangeLectureOrderModal('ChangeLectureOrderModal', 'Change Lecture Order')}
                {this.renderChangeLectureOrderModal('LockUnlockVideosModal', 'Lock Unlock Videos')}
            </div>
        )
    }
}

StudentCourse.propTypes = {
    onLoad: PropTypes.func.isRequired,
    calendarReminders: PropTypes.object.isRequired,
    chemistryTestScore: PropTypes.array.isRequired,
    practiceTestScore: PropTypes.array.isRequired,
    testInfo: PropTypes.shape({
        time: PropTypes.object,
        statistic: PropTypes.object,
        sessions: PropTypes.object
    })
};

export default StudentCourse;