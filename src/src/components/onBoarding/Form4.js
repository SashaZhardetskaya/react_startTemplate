import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


class renderForm4 extends Component {

    //Renders
    receiveNextFormNumber = () => {
        this.props.receiveNextFormNumber(3);
    };

    renderCourseTokenInfo = () => {
        if (this.props.values.tokeLSAT === 'true') {
            return (
                <div className="course_taken_info">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Test Date</label>
                                <Field
                                    type="date"
                                    name='testDate'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Official Test Score</label>
                                <Field
                                    type="number"
                                    name='testScore'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="font-16 text-orange font-400">
                        SCORE BREAKDOWN:
                        What was the score in each section?
                    </h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Logical reasoning</label>
                                <Field
                                    type="number"
                                    name='logicScore'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Analytical Reasoning</label>
                                <Field
                                    type="number"
                                    name='analyticScore'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Reading Comprehension</label>
                                <Field
                                    type="number"
                                    name='readingScore'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    };

    renderButtons = (isSubmitting, handleSubmit) => (
        <div className="onboarding-form-step sm-top50 form-actions">
            <div className="row">
                <div className="col-md-12 text-right">
                    <button className="btn btn-default btn-lg font-16 button-previous"
                            onClick={this.receiveNextFormNumber}
                    >
                        <i className="m-icon-swapleft"/>
                        Back
                    </button>
                    <button
                        className="btn btn-base button-next btn-lg font-16"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        Continue
                        <i className="m-icon-swapright m-icon-white"/>
                    </button>
                </div>
            </div>
        </div>
    );

    render() {
        const {
            values,
            isSubmitting,
            handleSubmit,
            isReviewForm
        } = this.props;
        return (
            <Form
                action="#"
                id="submit_form"
                onSubmit={handleSubmit}>
                <div className="form-wizard">
                    <div className="form-body">
                        <div className={
                            "tab-content "+(
                                isReviewForm
                                    ? "review"
                                    : ""
                            )}
                        >
                            <div className="tab-pane active" id="tab4">
                                {
                                    !isReviewForm &&
                                    <h3 className="sm-bottom40">
                                        Great! Tell us about your experience with the LSAT
                                    </h3>
                                }
                                <div className="form-group">
                                    <label>Have you officially taken the LSAT?</label>
                                    <div className="sp-top10">
                                        <label className="radioBtn-ladel">
                                            <div
                                                className={
                                                    values.tokeLSAT === 'false'
                                                        ? "iradio_square checked radio-relative"
                                                        : "iradio_square unactive radio-relative"
                                                }
                                                aria-checked="false"
                                                aria-disabled="false"
                                            >
                                                <Field
                                                    type="radio"
                                                    className="ichekRadioBtn iCheck-custom"
                                                    value="false"
                                                    name="tokeLSAT"
                                                    disabled={!!isReviewForm}
                                                />
                                                <ins className="iCheck-helper iCheck-custom"/>
                                            </div>
                                            No
                                        </label>
                                        <label className="radioBtn-ladel">
                                            <div
                                                className={
                                                    values.tokeLSAT === 'true'
                                                        ? "iradio_square checked radio-relative"
                                                        : "iradio_square unactive radio-relative"
                                                }>
                                                <Field
                                                    type="radio"
                                                    className="ichekRadioBtn iCheck-custom"
                                                    value="true"
                                                    name="tokeLSAT"
                                                    disabled={!!isReviewForm}
                                                />
                                                <ins className="iCheck-helper iCheck-custom" />
                                            </div>
                                            Yes
                                        </label>
                                    </div>
                                </div>

                                <SlideDown className={'my-dropdown-slidedown'}>
                                    {this.renderCourseTokenInfo()}
                                </SlideDown>

                            </div>
                        </div>
                    </div>
                    {
                        !isReviewForm &&
                        this.renderButtons(isSubmitting, handleSubmit)
                    }
                </div>
            </Form>
        )
    }
};

const Form4 = withFormik({
    mapPropsToValues({ parentProps,
                         tokeLSAT,
                         testDate,
                         testScore,
                         logicScore,
                         analyticScore,
                         readingScore })
    {
        return {
            tokeLSAT: tokeLSAT || parentProps.infoLSAT.tokeLSAT || '',
            testDate: testDate || parentProps.infoLSAT.testDate || '',
            testScore: testScore || parentProps.infoLSAT.testScore || '',
            logicScore: logicScore || parentProps.infoLSAT.logicScore || '',
            analyticScore: analyticScore || parentProps.infoLSAT.analyticScore || '',
            readingScore: readingScore || parentProps.infoLSAT.readingScore || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                props.onLsatInfoUpdate(
                    {
                        tokeLSAT:  values.tokeLSAT,
                        testDate:  values.testDate,
                        testScore:  values.testScore,
                        logicScore:  values.logicScore,
                        analyticScore:  values.analyticScore,
                        readingScore:  values.readingScore,
                    }
                );
                // props.receivedValues(values);
                props.receiveNextFormNumber(5);
            }
        }, 200)
    }
})(renderForm4);


Form4.propTypes = {
    receiveNextFormNumber: PropTypes.func.isRequired,
    infoLSAT: PropTypes.shape({
        tokeLSAT: PropTypes.string,
        testDate: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date)
        ]),
        testScore: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        logicScore: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        analyticScore: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        readingScore: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }),
};


export default Form4;
