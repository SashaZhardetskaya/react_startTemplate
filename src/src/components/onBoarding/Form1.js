import React from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const renderForm1 = ({
                         isReviewForm,
                         touched,
                         errors,
                         isSubmitting,
                         handleSubmit,
                     }) => {

    const renderFirstNameForm = () => (
        <div className="col-sm-4">
            <div className={
                touched.firstName ?
                    (errors.firstName
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    First Name
                    <span className="required" aria-required="true">* </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="firstName"
                    disabled={!!isReviewForm}
                />
                {
                    touched.firstName
                    && errors.firstName
                    && <p className="help-block">
                        {errors.firstName}
                    </p>
                }
            </div>
        </div>
    );

    const renderMiddleNameForm = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>
                    Middle Name
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="middleName"
                    disabled={!!isReviewForm}
                />
            </div>
        </div>
    );

    const renderLastNameForm = () => (
        <div className="col-sm-4">
            <div className={
                touched.lastName ?
                    (errors.lastName
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Last Name
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="lastName"
                    disabled={!!isReviewForm}
                />
                {
                    touched.lastName
                    && errors.lastName
                    && <p className="help-block">
                        {errors.lastName}
                    </p>
                }
            </div>
        </div>
    );

    const renderEmailForm = () => (
        <div className="col-sm-4">
            <div className={
                touched.email ?
                    (errors.email
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Email Address
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="email"
                    className="form-control"
                    name="email"
                    disabled={!!isReviewForm}
                />
                {
                    touched.email
                    && errors.email
                    && <p className="help-block">
                        {errors.email}
                    </p>
                }
            </div>
        </div>
    );

    const renderPhoneForm = () => (
        <div className="col-sm-3">
            <div className={
                touched.phone ?
                    (errors.phone
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Cell Number
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="tel"
                    className="form-control"
                    name="phone"
                    disabled={!!isReviewForm}
                />
                {
                    touched.phone
                    && errors.phone
                    && <p className="help-block">
                        {errors.phone}
                    </p>
                }
            </div>
        </div>
    );

    const renderGenderForm = () => (
        <div className="col-sm-2">
            <div className={
                touched.gender ?
                    (errors.gender
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Gender
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    component='select'
                    className="form-control"
                    name="gender"
                    disabled={!!isReviewForm}
                >
                    <option value="">Choose</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Field>
                <span className="help-block"/>
                {
                    touched.gender
                    && errors.gender
                    && <p className="help-block">
                        {errors.gender}
                    </p>
                }
            </div>
        </div>
    );

    const renderDobForm = () => (
        <div className="col-sm-3">
            <div className={
                touched.dob ?
                    (errors.dob
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Date of Birth
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="date"
                    className="form-control"
                    name="dob"
                    disabled={!!isReviewForm}
                />
                {
                    touched.dob
                    && errors.dob
                    && <p className="has-error help-block">
                        {errors.dob}
                    </p>
                }
            </div>
        </div>
    );

    const renderAddressForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>
                    Address
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="address"
                    disabled={!!isReviewForm}
                />
            </div>
        </div>
    );

    const renderCityForm = () => (
        <div className="col-sm-2">
            <div className={
                touched.city ?
                    (errors.city
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    City
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="city"
                    disabled={!!isReviewForm}
                />
                {
                    touched.city
                    && errors.city
                    && <p className="help-block">
                        {errors.city}
                    </p>
                }
            </div>
        </div>
    );

    const renderStateForm = () => (
        <div className="col-sm-2">
            <div className={
                touched.state ?
                    (errors.state
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    State/Province
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="state"
                    disabled={!!isReviewForm}
                />
            </div>
        </div>
    );

    const renderZipcodeForm = () => (
        <div className="col-sm-2">
            <div className={
                touched.zipcode ?
                    (errors.zipcode
                        ? "has-error form-group"
                        : "has-success form-group")
                    : "form-group"
            }>
                <label>
                    Postal Code
                    <span
                        className="required"
                        aria-required="true">
                        *
                    </span>
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name="zipcode"
                    disabled={!!isReviewForm}
                />
            </div>
        </div>
    );

    return (
        <Form
            action="#"
            id="submit_form"
            onSubmit={handleSubmit}
        >
            <div className="form-wizard">
                <div className="form-body">
                    <div className={"tab-content "+(isReviewForm ? "review" : "")}>
                        {Object.keys(errors).length > 0 &&
                        <div
                            className="alert alert-danger display-none sm-bottom0 error-popup-show"
                            style={{display: 'block'}}
                        >
                            <button
                                className="close"
                                data-dismiss="alert"
                            />
                            You have some form errors. Please check below.
                        </div>
                        }
                        <div className="tab-pane active" id="tab1">
                            {
                                !isReviewForm &&
                                <h3 className="block">Lets start from the basic:</h3>
                            }
                            <div className="row">
                                {renderFirstNameForm()}
                                {renderMiddleNameForm()}
                                {renderLastNameForm()}
                            </div>
                            <div className="row">
                                {renderEmailForm()}
                                {renderPhoneForm()}
                                {renderGenderForm()}
                                {renderDobForm()}
                            </div>
                            <div className="row">
                                {renderAddressForm()}
                                {renderCityForm()}
                                {renderStateForm()}
                                {renderZipcodeForm()}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    !isReviewForm &&
                    <div className="form-actions sm-top50 onboarding-form-step">
                        <div className="row">
                            <div className="col-md-12 text-right">

                                <button
                                    className="btn btn-base button-next btn-lg font-16"
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    Continue
                                    <i className="m-icon-swapright m-icon-white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Form>
    );
};


const Form1 = withFormik({

    mapPropsToValues({ parentProps,
                         firstName,
                         middleName,
                         lastName,
                         email,
                         phone,
                         gender,
                         dob,
                         address,
                         city,
                         state,
                         zipcode })
    {
        return {
            firstName: firstName || parentProps.name || '',
            middleName: middleName || parentProps.middleName || '',
            lastName: lastName || parentProps.surname || '',
            email: email || parentProps.email || '',
            phone: phone || parentProps.infoContacts.phone || '',
            gender: gender || parentProps.gender || '',
            birthday: dob || parentProps.birthday || '',
            city: city || parentProps.infoContacts.city || '',
            state: state || parentProps.infoContacts.state || '',
            zipcode: zipcode || parentProps.infoContacts.postalCode || '',
            address: address || parentProps.infoContacts.address1 || '',
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        phone: Yup.string().min(9, 'Phone not valid').required('Phone is required'),
        gender: Yup.string().required('Choose your gender'),
        birthday: Yup.date().max(new Date(), 'Phone not valid'),
        city: Yup.string().required('City is required'),
    }),

    handleSubmit(values, {setErrors, errors, setStatus, setSubmitting, props}) {

        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {

                props.onBasicInfoUpdate(
                    {
                        name: values.firstName,
                        middleName: values.middleName,
                        surname: values.lastName,
                        email: values.email,
                        gender: values.gender,
                        birthday: values.birthday,
                    }
                );
                props.onContactsInfoUpdate(
                    {
                        phone: values.phone,
                        city: values.city,
                        district: values.state,
                        postalCode: values.zipcode,
                        address1: values.address,
                    }
                );
                // props.receivedValues(values);
                props.receiveNextFormNumber(2);
            }
        }, 200)
    }
})(renderForm1);

Form1.propTypes = {
    receiveNextFormNumber: PropTypes.func.isRequired,
    name: PropTypes.string,
    middleName: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    birthday: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]),
    phone: PropTypes.string,
    city: PropTypes.string,
    district: PropTypes.string,
    postalCode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    address1: PropTypes.string,
};

export default Form1;