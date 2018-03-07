import React from 'react';
import {Link} from 'react-router-dom';

import userImage from '../../assets/128x128.jpg';

/**
 *
 */
const ForgotPassword = () => {

    //Renders
    const renderUserImg = () => (
        <div className="lockscreen-image">
            <img
                src={userImage}
                alt="User"
            />
        </div>
    );

    const renderPasswordForm = () => (
        <form className="lockscreen-credentials">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                />
                <div className="input-group-btn">
                    <button className="btn">
                        <i className="fa fa-arrow-right text-muted"/>
                    </button>
                </div>
            </div>
        </form>
    );

    const renderSignupLink = () => (
        <div className="text-center">
            <Link to={'/signup'}>
                Or sign in as a different user
            </Link>
        </div>
    );

    return (
        <div className="app app-header-fixed loginSignupPage">
            <div className="container w-xxl w-auto-xs sm-bottom50" >
                <h3 className="font-100 sm-top100 sm-bottom50 text-center">
                    Reset Your Password
                </h3>
                <div className="lockscreen-item">
                    {renderUserImg()}
                    {renderPasswordForm()}
                </div>
                <div className="help-block text-center">
                    Enter your email address to retrieve your password
                </div>
                {renderSignupLink()}
                <p className="text-center sm-bottom100"/>
            </div>
        </div>
    )
};

export default ForgotPassword;