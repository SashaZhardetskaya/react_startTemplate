import React from 'react';
import { withFormik, Form, Field } from 'formik';
import RegistrationSteps from '../../onBoarding/RegistrationSteps';


const renderForm2 = ({
                         values,
                         isSubmitting,
                         handleSubmit,
                     }) => {
    return (
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

                                            {/*<RenderRegistrationSteps/>*/}

                                            <div className="tab-content">

                                                <div className="tab-pane active" id="tab2">
                                                    <h3 className="block sm-bottom40">Let's discuss your education bit!</h3>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Highest level of education</label>
                                                                <Field component='select' name='finishedDegree' className="form-control">
                                                                    <option value="">Choose</option>
                                                                </Field>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label>When did you complete your last degree?</label>
                                                                <Field type="text" name='finishedDegreeDate' className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>What was your degree?</label>
                                                                <Field type="text" name='finishedDegreeName' className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <div className="form-group">
                                                                <label>Institution?</label>
                                                                <Field type="text" name='institution' className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Are you currently in school?</label>
                                                                <Field component='select' name='currentEducation' className="form-control" id="InSchoolSelect">
                                                                    <option value="">Choose</option>
                                                                    <option value="No">No</option>
                                                                    <option value="High School">High School</option>
                                                                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                                                                    <option value="Master's Degree">Master's Degree</option>
                                                                    <option value="Doctorate or higher">Doctorate or higher</option>
                                                                    <option value="Other">Other</option>
                                                                </Field>
                                                            </div>
                                                        </div>


                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Current year of study</label>
                                                                <Field type="text" disabled={values.currentEducation === 'No'} name='yearOfStudy' className="form-control InSchoolDependent"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Whats your cGPA?</label>
                                                                <Field type="text" disabled={values.currentEducation === 'No'} name='userCGPA' className="form-control InSchoolDependent"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Expected completion date</label>
                                                                <Field type="text" disabled={values.currentEducation === 'No'} name='completionDate' className="form-control InSchoolDependent"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <label>What are you majoring in?</label>
                                                                <Field type="text" disabled={values.currentEducation === 'No'} name='majorField' className="form-control InSchoolDependent"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-actions sm-top50">

                                            <div className="row">
                                                <div className="col-md-12 text-right">
                                                    <button className="btn btn-default btn-lg font-16 button-previous disabled">
                                                        <i className="m-icon-swapleft"></i>
                                                        Back
                                                    </button>
                                                    <button
                                                        className="btn btn-base button-next btn-lg font-16"
                                                        disabled={isSubmitting}
                                                        onClick={handleSubmit}
                                                    >
                                                        Continue <i className="m-icon-swapright m-icon-white"></i>
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
};

const OnBoarding2 = withFormik({

    mapPropsToValues({ finishedDegree, finishedDegreeDate, finishedDegreeName, institution, currentEducation, yearOfStudy, userCGPA, completionDate, majorField }) {
        return {
            finishedDegree: finishedDegree || '',
            finishedDegreeDate: finishedDegreeDate || '',
            finishedDegreeName: finishedDegreeName || '',
            institution: institution || '',
            currentEducation: currentEducation || '',
            yearOfStudy: yearOfStudy || '',
            userCGPA: userCGPA || '',
            completionDate: completionDate || '',
            majorField: majorField || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                props.history.push('/on-boarding-3');
            }
        }, 2000)
    }

})(renderForm2);


export default OnBoarding2;
















