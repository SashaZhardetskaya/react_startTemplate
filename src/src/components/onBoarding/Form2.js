import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';


class renderForm2 extends Component {
    receiveNextFormNumber = () => {
        this.props.receiveNextFormNumber(1);
    };

    renderFinishedDegree = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Highest level of education</label>
                <Field
                    component='select'
                    name='finishedDegree'
                    className="form-control"
                    disabled={!!this.props.isReviewForm}
                >
                    <option value="">Choose</option>
                </Field>
            </div>
        </div>
    );
    renderFinishedDegreeDate = () => (
        <div className="col-sm-4">
            <div className="form-group">
                <label>When did you complete your last degree?</label>
                <Field
                    type="text"
                    name='finishedDegreeDate'
                    className="form-control"
                    disabled={!!this.props.isReviewForm}
                />
            </div>
        </div>
    );
    renderFinishedDegreeName = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>What was your degree?</label>
                <Field
                    type="text"
                    name='finishedDegreeName'
                    className="form-control"
                    disabled={!!this.props.isReviewForm}
                />
            </div>
        </div>
    );
    renderInstitution = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>Institution?</label>
                <Field
                    type="text"
                    name='institution'
                    className="form-control"
                    disabled={!!this.props.isReviewForm}
                />
            </div>
        </div>
    );
    renderCurrentEducation = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Are you currently in school?</label>
                <Field
                    component='select'
                    name='currentEducation'
                    className="form-control"
                    id="InSchoolSelect"
                    disabled={!!this.props.isReviewForm}
                >
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
    );
    renderYearOfStudy = ({values, isReviewForm}) => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Current year of study</label>
                <Field
                    type="text"
                    disabled={
                        values.currentEducation === 'No'
                        || values.currentEducation === ''
                        || !!isReviewForm
                    }
                    name='yearOfStudy'
                    className="form-control InSchoolDependent"
                />
            </div>
        </div>
    );
    renderUserCGPA = ({values, isReviewForm}) => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Whats your cGPA?</label>
                <Field
                    type="text"
                    disabled={
                        values.currentEducation === 'No'
                        || values.currentEducation === ''
                        || !!isReviewForm
                    }
                    name='userCGPA'
                    className="form-control InSchoolDependent"
                />
            </div>
        </div>
    );

    renderCompletionDate = ({values, isReviewForm}) => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Expected completion date</label>
                <Field
                    type="text"
                    disabled={
                        values.currentEducation === 'No'
                        || values.currentEducation === ''
                        || !!isReviewForm
                    }
                    name='completionDate'
                    className="form-control InSchoolDependent"
                />
            </div>
        </div>
    );
    renderMajorField = ({values, isReviewForm}) => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>What are you majoring in?</label>
                <Field
                    type="text"
                    disabled={
                        values.currentEducation === 'No'
                        || values.currentEducation === ''
                        || !!isReviewForm
                    }
                    name='majorField'
                    className="form-control InSchoolDependent"
                />
            </div>
        </div>
    );

    render () {
        const {
            isSubmitting,
            handleSubmit,
            isReviewForm,
        } = this.props;
        return (
            <Form action="#" id="submit_form" onSubmit={handleSubmit}>
                <div className="form-wizard">
                    <div className="form-body">
                        <div className={"tab-content "+(isReviewForm ? "review" : "")}>
                            <div className="tab-pane active" id="tab2">
                                {
                                    !isReviewForm &&
                                    <h3 className="block sm-bottom40">Let's discuss your education bit!</h3>
                                }
                                <div className="row">
                                    {this.renderFinishedDegree()}
                                    {this.renderFinishedDegreeDate()}
                                    {this.renderFinishedDegreeName()}
                                    {this.renderInstitution()}
                                </div>
                                <hr/>
                                <div className="row">
                                    {this.renderCurrentEducation()}
                                    {this.renderYearOfStudy(this.props)}
                                    {this.renderUserCGPA(this.props)}
                                    {this.renderCompletionDate(this.props)}
                                    {this.renderMajorField(this.props)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !isReviewForm &&
                        <div className="onboarding-form-step form-actions sm-top50">
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button className="btn btn-default btn-lg font-16 button-previous"
                                            onClick={this.receiveNextFormNumber}
                                    >
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
                    }
                </div>
            </Form>
        )
    }
};


const Form2 = withFormik({

    mapPropsToValues({ parentProps,
                         finishedDegree,
                         finishedDegreeDate,
                         finishedDegreeName,
                         institution,
                         currentEducation,
                         yearOfStudy,
                         userCGPA,
                         completionDate,
                         majorField })
    {
        return {
            finishedDegree: finishedDegree || parentProps.infoEducation.finishedDegree || '',
            finishedDegreeDate: finishedDegreeDate || parentProps.infoEducation.finishedDegreeDate || '',
            finishedDegreeName: finishedDegreeName || parentProps.infoEducation.finishedDegreeName || '',
            institution: institution || parentProps.infoEducation.institution || '',
            currentEducation: currentEducation || parentProps.infoEducation.currentEducation || '',
            yearOfStudy: yearOfStudy || parentProps.infoEducation.yearOfStudy || '',
            userCGPA: userCGPA || parentProps.infoEducation.userCGPA || '',
            completionDate: completionDate || parentProps.infoEducation.completionDate || '',
            majorField: majorField || parentProps.infoEducation.majorField || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            }
            else {
                props.onEducationInfoUpdate(
                    {
                        finishedDegree: values.finishedDegree,
                        finishedDegreeDate: values.finishedDegreeDate,
                        finishedDegreeName: values.finishedDegreeName,
                        institution: values.institution,
                        currentEducation: values.currentEducation,
                        yearOfStudy: values.yearOfStudy,
                        userCGPA: values.userCGPA,
                        completionDate: values.completionDate,
                        majorField: values.majorField,
                    }
                );
                props.receiveNextFormNumber(3)
            }
        }, 200)
    }

})(renderForm2);


Form2.propTypes = {

    receiveNextFormNumber: PropTypes.func.isRequired,

    infoEducation: PropTypes.shape({
        finishedDegree: PropTypes.string,
        finishedDegreeDate: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date)
        ]),
        finishedDegreeName: PropTypes.string,
        institution: PropTypes.string,
        currentEducation: PropTypes.string,
        yearOfStudy: PropTypes.string,
        userCGPA: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        completionDate: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date)
        ]),
        majorField: PropTypes.string,
    }),
};

export default Form2;