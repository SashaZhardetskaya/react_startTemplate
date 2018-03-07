import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../assets/Loading_icon.gif';
import {connect} from "react-redux";

/**
 *
 */
const LoadingOverlay = ({visible}) => (
    <div
        className="loading-overlay"
        style={{
            display: visible ? 'block' : 'none'
        }}
    >
        <img
            src={Loading}
            alt="Loading..."
        />
    </div>
);

LoadingOverlay.propTypes = {
    visible: PropTypes.bool
};

export default connect((state) => ({
    visible: state.app.loading
}), null)(LoadingOverlay);