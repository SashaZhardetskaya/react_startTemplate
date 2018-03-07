import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const errStyle = {
    color: 'red',
    fontSize: '14'
};

/**
 *
 */
class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    //Actions
    onKeyPress = (username, password) => {
        this.props.onLogin(username, password);
    };

    //Renders
    renderLoginForm = (username, password, errorMessage) => (
        <div className="m-b-lg">
            <form
                name="form"
                className="form-validation loginSignupForm"
                onKeyPress={this.onKeyPress}
                onSubmit={(e) => {
                    e.preventDefault();
                    this.onKeyPress(username, password, e);
                }}
            >
                <div className="text-danger wrapper text-center"/>
                {this.renderLoginFormInputs()}
                <button
                    autoFocus
                    type="submit"
                    className="btn btn-lg btn-primary btn-block">
                    Log in
                </button>
                <div className="text-center m-t m-b">
                    <Link to={'/forgot-password'}>
                        Forgot password?
                    </Link>
                </div>
                <div className="line line-dashed"/>
                <p className="text-center">
                    <small>Do not have an account?</small>
                </p>
                <Link
                    to={'/signup'}
                    className="btn btn-lg btn-default btn-block">
                    Create an account
                </Link>
                {
                    errorMessage &&
                    <span style={errStyle}>
                        {errorMessage}
                    </span>
                }
            </form>
        </div>
    );

    renderLoginFormInputs = () => (
        <div className="list-group list-group-sm">
            <div className="list-group-item">
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control no-border"
                    required
                    value={this.state.username}
                    onChange={
                        ({target: {value}}) => this.setState({username: value})
                    }
                />
            </div>
            <div className="list-group-item">
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control no-border"
                    required
                    value={this.state.password}
                    onChange={
                        ({target: {value}}) => this.setState({password: value})
                    }
                />
            </div>
        </div>
    );

    render() {
        const {errorMessage} = this.props;
        const {username, password} = this.state;

        return (
            <div
                className="app app-header-fixed loginSignupPage"
                onKeyPress={this.onKeyPress}
            >
                <div className="container w-xxl w-auto-xs sm-bottom50">
                    <h3 className="font-100 sm-top100 sm-bottom50 text-center">
                        Student Login
                    </h3>
                    {this.renderLoginForm(username, password, errorMessage)}
                    <p className="text-center sm-bottom50"/>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    errorMessage: PropTypes.string,
    onLogin: PropTypes.func.isRequired
};

export default Login;