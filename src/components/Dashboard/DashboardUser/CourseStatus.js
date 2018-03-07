import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CourseItemsContainer from '../../../containers/Dashboard/DashboardUser/CourseItemsContainer';

/**
 * Site course status.
 */

class CourseStatus extends Component {

    render() {
        return (
            <div className="col-sm-8">
                <div className="panel customPanel">
                    <div className="panel-body">
                        <CourseItemsContainer/>
                    </div>
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