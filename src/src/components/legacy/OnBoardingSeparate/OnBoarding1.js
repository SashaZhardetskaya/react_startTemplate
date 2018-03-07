import React from 'react';
import { withFormik, Form, Field } from 'formik';
import RegistrationSteps from '../../onBoarding/RegistrationSteps';

import Yup from 'yup';



const renderForm1 = ({
         touched,
         errors,
         isSubmitting,
         handleSubmit,
     }) => (
    <div className="content-wrapper" id="content-container">
        <section className="content no-padding">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel no-bg"
                         // style="box-shadow: none;"
                         id="form_wizard_1">

                        <div className="panel-body form no-bg on-board-form no-padding">
                            <Form action="#" id="submit_form" onSubmit={handleSubmit}>
                                <div className="form-wizard">
                                    <div className="form-body">

                                        <RegistrationSteps/>

                                        <div className="tab-content">


                                            {/*<div className="alert alert-danger display-none sm-bottom0">*/}
                                                {/*<button className="close" data-dismiss="alert"></button>*/}
                                                {/*You have some form errors. Please check below.*/}
                                            {/*</div>*/}
                                            {/*<div className="alert alert-success display-none">*/}
                                                {/*<button className="close" data-dismiss="alert"></button>*/}
                                                {/*Your form validation is successful!*/}
                                            {/*</div>*/}



                                            <div className="tab-pane active" id="tab1">
                                                <h3 className="block">Lets start from the basic:</h3>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label>First Name <span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="firstName"/>
                                                            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label>Middle Name <span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="middleName"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label>Last Name <span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="lastName"/>
                                                            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label>Email Address <span className="required" aria-required="true">* </span></label>
                                                            <Field type="email" className="form-control" name="email"/>
                                                            {touched.email && errors.email && <p>{errors.email}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label>Cell Number <span className="required" aria-required="true">* </span></label>
                                                            <Field type="tel" className="form-control" name="phone"/>
                                                            {touched.phone && errors.phone && <p>{errors.phone}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label>Gender <span className="required" aria-required="true">* </span></label>
                                                            <Field component='select' className="form-control" name="gender">
                                                                <option value="">Choose</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </Field>
                                                            <span className="help-block"> </span>
                                                            {touched.gender && errors.gender && <p>{errors.gender}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group">
                                                            <label>Date of Birth <span className="required" aria-required="true">* </span></label>
                                                            <Field type="date" className="form-control" name="dob"/>
                                                                {/*<span className="help-block"></span>*/}
                                                                {touched.dob && errors.dob && <p className="help-block">{errors.dob}</p>}
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label>Address<span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="address"/>
                                                                {/*<span className="help-block"></span>*/}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label>City<span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="city"/>
                                                                {/*<span className="help-block"></span>*/}
                                                            {touched.city && errors.city && <p className="help-block">{errors.city}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label>State/Province<span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="state"/>
                                                                {/*<span className="help-block"></span>*/}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="form-group">
                                                            <label>Postal Code<span className="required" aria-required="true">* </span></label>
                                                            <Field type="text" className="form-control" name="zipcode"/>
                                                                {/*<span className="help-block"></span>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions sm-top50">
                                        <div className="row">
                                            <div className="col-md-12 text-right">

                                                <button
                                                    className="btn btn-base button-next btn-lg font-16"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    onClick={handleSubmit}
                                                >
                                                    Continue
                                                    <i className="m-icon-swapright m-icon-white"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const OnBoarding1 = withFormik({

    mapPropsToValues({ firstName, middleName, lastName, email, phone, gender, dob, city, state, zipcode }) {
        return {
            firstName: firstName || '',
            middleName: middleName || '',
            lastName: lastName || '',
            email: email || '',
            phone: phone || '',
            gender: gender || '',
            dob: dob || '',
            city: city || '',
            state: state || '',
            zipcode: zipcode || '',
        };
    },


    validationSchema: Yup.object().shape({
        firstName: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        // phone: Yup.string().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, { message: 'Phone not valid', excludeEmptyString: true }).required('Phone is required'),
        phone: Yup.string().min(9, 'Phone not valid').required('Phone is required'),
        gender: Yup.string().required('Choose your gender'),
        dob: Yup.date().max(new Date(), 'Phone not valid'),
        city: Yup.string().required('City is required'),
    }),

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                props.history.push('/on-boarding-2');
            }
        }, 2000)
    }

})(renderForm1);


export default OnBoarding1;
















