import React from 'react';
import {Redirect, Route} from "react-router-dom";

import ForgotPassword from './ForgotPassword';
import LoginContainer from '../../containers/Auth/LoginContainer';
import SignUp from './Signup'

/**
 *
 */
const Authorization = ({pathname}) => (
    <div>
        {
            pathname !== '/login' &&
            pathname !== '/signup' &&
            pathname !== '/forgot-password' &&
                <Route
                    path="/"
                    render={() => (
                        <Redirect
                            to="/login"
                        />
                    )}
                />
        }
        <Route
            path='/login'
            component={LoginContainer}
        />
        <Route
            path='/signup'
            component={SignUp}
        />
        <Route
            path='/forgot-password'
            component={ForgotPassword}
        />
    </div>
);

export default Authorization;