import React, {Component} from 'react';
import PropTypes from "prop-types";
import {withFormik, Form, Field} from 'formik';

class Settings extends Component {

    // Renders
    renderUsernameForm = () => (
        <div className="form-group">
            <label>Username</label>
            <Field
                type="text"
                name='username'
                className="form-control"
            />
        </div>
    );

    renderCurrentPass = () => (
        <div className="form-group">
            <label>Current Password</label>
            <Field
                type="password"
                name='password'
                className="form-control"
                disabled
            />
        </div>
    );

    renderNewPass = () => (
        <div className="form-group">
            <label>New Password</label>
            <Field
                type="text"
                name='updatedPassword'
                className="form-control"
            />
        </div>
    );

    renderNewPassConfirm = (errors, touched) => (
        <div className="form-group">
            <label>Confirm New Password</label>
            <Field
                type="text"
                name='updatedPassword2'
                className="form-control"
            />
            {
                touched.updatedPassword2
                && errors.updatedPassword2
                && <p>{errors.updatedPassword2}</p>
            }
        </div>
    );

    render() {
        const {
            errors,
            touched,
            handleSubmit,
        } = this.props;

        return (

        <Form className="panel customPanel">
            <div className="panel-heading">
                <h3 className="panel-title text-uppercase">
                    <i className="zmdi zmdi-settings sm-right20"/>
                    Update Login Info
                </h3>
            </div>
            <div className="panel-body">

                {this.renderUsernameForm()}
                {this.renderCurrentPass()}
                {this.renderNewPass()}
                {this.renderNewPassConfirm(errors, touched,)}

            </div>
            <div className='panel-footer'>
                <button
                    type="submit"
                    className="btn btn-base"
                    // disabled={isSubmitting}
                    onClick={handleSubmit}
                >
                    Save Info
                </button>
            </div>
        </Form>
        )
    }
};

const SettingsFormSide = withFormik({
    mapPropsToValues({ parentProps, username, password, updatedPassword, updatedPassword2 }) {
        return {
            username: username || parentProps.username || '',
            password: password || parentProps.password || '',
            updatedPassword: updatedPassword || '',
            updatedPassword2: updatedPassword2 || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, isSubmitting, props}) {
        setTimeout(() => {
            if (values.updatedPassword !== values.updatedPassword2) {
                setErrors({ updatedPassword2: 'Passwords do not matches' })
            } else {
                props.onBasicInfoUpdate(
                    {
                        username: values.username,
                        password: values.updatedPassword2 ,
                    }
                );
            }
        }, 200)
    },

})(Settings);

SettingsFormSide.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

export default SettingsFormSide;