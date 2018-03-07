import React from 'react';
import PropTypes from 'prop-types';


const StudentCourseInfo = ({testInfo}) => {

    //Renders
    const renderTime = (time) => (
        <ul className="half-aligned-list">
            <li>
                <span className="span-left">Test Date</span>
                <span className="span-right">{time.testDate}</span>
            </li>
            <li>
                <span className="span-left">Days Remaining</span>
                <span className="span-right">{time.DaysRemaining}</span>
            </li>
            <li>
                <span className="span-left">Total Video Hours Remaining</span>
                <span className="span-right">{time.TotalVideoHours}</span>
            </li>
            <li>
                <span className="span-left">Expected Score</span>
                <span className="span-right">{time.ExpectedScore}</span>
            </li>
        </ul>
    );

    const importantStats = (statistic) => (
        <ul className="half-aligned-list">
            <li>
                <span className="span-left">Deadlines Set</span>
                <span className="span-right">{statistic.DdlSet}</span>
            </li>
            <li>
                <span className="span-left">Deadlines Missed</span>
                <span className="span-right">{statistic.DdlMissed}</span>
            </li>
            <li>
                <span className="span-left">Recommendations Given</span>
                <span className="span-right">{statistic.RecommendationsGiven}</span>
            </li>
            <li>
                <span className="span-left">Recommendations Followed</span>
                <span className="span-right">{statistic.RecommendationsFollowed}</span>
            </li>
        </ul>
    );

    const sessionsInfo = (sessions) => (
        <ul className="half-aligned-list">
            <li>
                <span className="span-left">Sessions per week</span>
                <span className="span-right">{sessions.sessionsPerWeek}</span>
            </li>
            <li>
                <span className="span-left">Avg. Session Duration</span>
                <span className="span-right">{sessions.avgSessionDuration}</span>
            </li>
            <li>
                <span className="span-left">Avg. Chap. Completed per Session</span>
                <span className="span-right">{sessions.avgChapCompletedPerSession}</span>
            </li>
            <li>
                <span className="span-left">Recommendations Followed</span>
                <span className="span-right">{sessions.RecommendationsFollowed}</span>
            </li>
        </ul>
    );

    return (
        <div>
            <div className="panel customPanel">
                <div className="panel-heading bg-light-3">
                    <h3 className="panel-title text-uppercase">
                        <i className="zmdi zmdi-hourglass"/>
                        {''} Time
                    </h3>
                </div>
                <div className="panel-body no-padding">
                    {renderTime(testInfo)}
                </div>
            </div>
            <div className="panel customPanel">
                <div className="panel-heading bg-light-3">
                    <h3 className="panel-title text-uppercase">
                        <i className="fa fa-flag-checkered"/>
                        {''} Important Stats
                    </h3>
                </div>
                <div className="panel-body no-padding">
                    {importantStats(testInfo)}
                </div>
            </div>
            <div className="panel customPanel">
                <div className="panel-heading bg-light-3">
                    <h3 className="panel-title text-uppercase">
                        <i className="fa fa-lightbulb-o"/>
                        {''} Sessions Info
                    </h3>
                </div>
                <div className="panel-body no-padding">
                    {sessionsInfo(testInfo)}
                </div>
            </div>
        </div>
    )
};

StudentCourseInfo.propTypes = {
    testInfo: PropTypes.shape({
        time: PropTypes.object.isRequired,
        statistic: PropTypes.object.isRequired,
        sessions: PropTypes.object.isRequired
    })
};

export default StudentCourseInfo;