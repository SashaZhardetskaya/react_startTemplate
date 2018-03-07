import React, {Component} from 'react';
import {withFormik, Form, Field} from 'formik';
import PropTypes from "prop-types";

class Settings extends Component {

    //Renders
    renderNameForm = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>First Name</label>
                <Field
                    type="text"
                    className="form-control"
                    name="name"
                    disabled
                />
            </div>
        </div>
    );

    renderMiddleNameForm = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>Middle Name</label>
                <Field
                    type="text"
                    className="form-control"
                    name='middleName'
                    disabled
                />
            </div>
        </div>
    );

    renderLastNameForm = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>Last Name</label>
                <Field
                    type="text"
                    className="form-control"
                    name='surname'
                    disabled
                />
            </div>
        </div>
    );

    renderEmailForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>Email</label>
                <Field
                    type="text"
                    className="form-control"
                    name='email'
                    disabled
                />
            </div>
        </div>
    );

    renderGenderForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Gender</label>
                <Field
                    component='select'
                    name='gender'
                    className="form-control"
                    disabled
                >
                    <option value="">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Field>
            </div>
        </div>
    );

    renderBirthdayForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Date of Birth</label>
                <Field
                    type="date"
                    className="form-control"
                    name='birthday'
                    placeholder=""
                    disabled
                />
            </div>
        </div>
    );

    renderAddress1Form = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>Address Line 1</label>
                <Field
                    type="text"
                    name='address1'
                    className="form-control"
                />
            </div>
        </div>
    );

    renderAddress2Form = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>Address Line 2</label>
                <Field type="text"
                       name='address2'
                       className="form-control"
                    // value={this.props.address1}
                />
            </div>
        </div>
    );

    renderCityForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>City</label>
                <Field
                    type="text"
                    name='city'
                    className="form-control"
                />
            </div>
        </div>
    );

    renderDistrictForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>State/Province</label>
                <Field
                    type="text"
                    name='district'
                    className="form-control"
                />
            </div>
        </div>
    );

    renderCountryForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Country</label>
                <Field
                    component='select'
                    name='country'
                    className="form-control"
                >
                    <option value="">Choose</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </Field>
            </div>
        </div>
    );

    renderPostalCodeForm = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Postal Code</label>
                <Field
                    type="text"
                    name='postalCode'
                    className="form-control"
                />
            </div>
        </div>
    );

    renderContactTypeForm = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>Contact Type</label>
                <Field
                    component='select'
                    name='contactType'
                    className="form-control">
                    <option value="">choose</option>
                    <option value="cell">Cell</option>
                    <option value="cell">Cell</option>
                </Field>
            </div>
        </div>
    );

    renderCountryCodeForm = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>Country Code</label>
                <Field
                    type="text"
                    name='countryCode'
                    className="form-control"
                />
            </div>
        </div>
    );

    renderPhoneForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>Phone</label>
                <Field
                    type="text"
                    name='phone'
                    className="form-control"
                />
            </div>
        </div>
    );

    render() {
        const {
            handleSubmit,
        } = this.props;

        return (
            <Form className="panel customPanel">
                <div className="panel-heading">
                    <h3 className="panel-title text-uppercase">
                        <i className="zmdi zmdi-account sm-right20"/>
                        Update Profile Info
                    </h3>
                </div>
                <div className="panel-body">
                    <h3 className="inner-heading-form">
                        General Information
                    </h3>
                    <div className="row">

                        {this.renderNameForm()}
                        {this.renderMiddleNameForm()}
                        {this.renderLastNameForm()}
                        {this.renderEmailForm()}
                        {this.renderGenderForm()}
                        {this.renderBirthdayForm()}

                    </div>
                    <h3 className="inner-heading-form">Address</h3>
                    <div className="row">

                        {this.renderAddress1Form()}
                        {this.renderAddress2Form()}
                        {this.renderCityForm()}
                        {this.renderDistrictForm()}
                        {this.renderCountryForm()}
                        {this.renderPostalCodeForm()}

                    </div>
                    <h3 className="inner-heading-form">Contact Information</h3>
                    <div className="row">

                        {this.renderContactTypeForm()}
                        {this.renderCountryCodeForm()}
                        {this.renderPhoneForm()}

                    </div>
                </div>
                <div className='panel-footer'>
                    <button
                        type="submit"
                        // disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="btn btn-base"
                    >
                        Update Info
                    </button>
                </div>
            </Form>
        )
    }
};

const SettingsFormBig = withFormik({

    mapPropsToValues({ parentProps,
                         name,
                         middleName,
                         surname,
                         email,
                         gender,
                         birthday,
                         address1,
                         address2,
                         city,
                         district,
                         country,
                         postalCode,
                         contactType,
                         countryCode,
                         phone })
    {
        return {
            name: name || parentProps.name || '',
            middleName: middleName || parentProps.middleName || '',
            surname: surname || parentProps.surname || '',
            email: email || parentProps.email || '',
            gender: gender || parentProps.gender || '',
            birthday: birthday || parentProps.birthday || '',
            address1: address1 || parentProps.infoContacts.address1 || '',
            address2: address2 || parentProps.infoContacts.address2 || '',
            city: city || parentProps.infoContacts.city || '',
            district: district || parentProps.infoContacts.district || '',
            country: country || parentProps.infoContacts.country || '',
            postalCode: postalCode || parentProps.infoContacts.postalCode || '',
            contactType: contactType || parentProps.infoContacts.contactType || '',
            countryCode: countryCode || parentProps.infoContacts.countryCode || '',
            phone: phone || parentProps.infoContacts.phone || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {

        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                // props.onInfoUpdate(values);
                props.onBasicInfoUpdate(
                    {
                        name: values.name,
                        middleName: values.middleName ,
                        surname: values.surname,
                        email: values.email,
                        gender: values.gender,
                        birthday: values.birthday,
                    }
                );
                props.onContactsInfoUpdate(
                    {
                        address1: values.address1,
                        address2: values.address2,
                        city: values.city,
                        district: values.district,
                        country: values.country,
                        postalCode: values.postalCode,
                        contactType: values.contactType,
                        countryCode: values.countryCode,
                        phone: values.phone,
                    }
                )
                // props.history.push('/settings');
            }
        }, 2000)
    },

})(Settings);

SettingsFormBig.propTypes = {
    name: PropTypes.string,
    middleName: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    birthday: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]),
    infoContacts: PropTypes.shape({
        address1: PropTypes.string,
        address2: PropTypes.string,
        city: PropTypes.string,
        district: PropTypes.string,
        country: PropTypes.string,
        postalCode: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        contactType: PropTypes.string,
        phone: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }),
};


export default SettingsFormBig;