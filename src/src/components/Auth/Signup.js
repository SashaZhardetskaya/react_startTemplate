 import React from 'react';
import {Link} from 'react-router-dom';

/**
 *
 */
const SignUp = () => {

    //Renders
    const renderSignupForm = () => (
        <form
            name="form"
            className="form-validation loginSignupForm"
        >
            <div className="text-danger wrapper text-center">
            </div>
            {renderSignupFormInputs()}
            <button
                type="submit"
                className="btn btn-lg btn-primary btn-block">
                Signup
            </button>
            <div className="text-center m-t m-b">
                <Link
                    to={'/forgot-password'}>
                    Forgot password?
                </Link>
            </div>
            <div className="line line-dashed"/>
            <p className="text-center">
                <small>Already have an account?</small>
            </p>
            <Link
                to={'/login'}
                className="btn btn-lg btn-default btn-block">
                Login
            </Link>
        </form>
    );

    const renderSignupFormInputs = () => (
        <div className="list-group list-group-sm">
            <div className="list-group-item">
                <input
                    type="email"
                    placeholder="Email"
                    className="form-control no-border"
                    required
                />
            </div>
            <div className="list-group-item">
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control no-border"
                    required
                />
            </div>
        </div>
    );

    return (
        <div className="app app-header-fixed loginSignupPage">
            <div className="container w-xxl w-auto-xs sm-bottom50">
                <h3 className="font-100 sm-top100 sm-bottom50 text-center">
                    Student Signup
                </h3>
                <div className="m-b-lg">
                    {renderSignupForm()}
                </div>
                <p className="text-center sm-bottom50"/>
            </div>
        </div>
    )
};

export default SignUp;