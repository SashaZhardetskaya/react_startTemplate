import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import CourseItemsContainer from '../../../containers/Dashboard/DashboardUser/CourseItemsContainer';

/**
 * Site course status.
 */

class CourseStatus extends Component {

    //Actions
    nextMission = () => {
        alert('Next Mission');
    };

    //Renders
    renderPanelHeader = () => (
        <div className="panel-heading">
            <div className="panel-control">
                <button className="btn btn-link text-dark">
                    {this.props.user.commonProgress}
                    % Completed
                </button>
            </div>
            <h3 className="panel-title text-uppercase">
                Course Status
            </h3>
        </div>
    );

    renderPanelBody = () => (
        <div className="panel-body">
            <div className="row">
                <div className="col-xs-6">
                    <h2 className="rank">
                        Rank
                        <span>
                            {this.props.user.rank}
                        </span>
                    </h2>
                </div>
                <div className="col-xs-6">
                    <div className="text-right">
                        <Link
                            to="#"
                            className="btn btn-info"
                            onClick={this.nextMission}
                        >
                            Next Mission
                        </Link>
                    </div>
                </div>
            </div>

            {this.renderWarningMessage()}

            <CourseItemsContainer/>
        </div>
    );

    renderWarningMessage = () => {
        if (this.props.user.message) {
            return (
                <div className="sm-top-bottom20">
                    <p className="text-danger font-14">
                        <i className="zmdi zmdi-alert-triangle"/>
                        {this.props.user.message}
                    </p>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="col-sm-8">
                <div className="panel customPanel">
                    {this.renderPanelHeader()}
                    {this.renderPanelBody()}
                </div>
            </div>
        )
    }
}

CourseStatus.propTypes = {
    user: PropTypes.shape({
        rank: PropTypes.number.isRequired,
        commonProgress: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    })
};


export default CourseStatus;