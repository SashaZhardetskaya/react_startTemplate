import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'


class renderForm3 extends Component {

    //Actions
    receiveNextFormNumber = () => {
        this.props.receiveNextFormNumber(2);
    };

    //Renders
    renderWorkingHours = () => {
        if (this.props.values.isEmployed === 'true') {
            return (
                <div className="row">
                    <div className="employment-info">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>How many hours you work in a week?</label>
                                <Field
                                    type="text"
                                    name='workingHours'
                                    className="form-control"
                                    disabled={!!this.props.isReviewForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    };

    renderMartialStatus = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Whats your martial status?</label>
                <Field
                    component='select'
                    name='martialStatus'
                    className="form-control"
                    disabled={!!this.props.isReviewForm}>
                    <option value="">
                        Choose
                    </option>
                </Field>
            </div>
        </div>
    );

    renderHasChildren = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Do you have any children?</label>
                <div className="sp-top10">
                    <label className="radioBtn-ladel">
                        <div
                            className={
                                this.props.values.hasChildren !== 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }
                            aria-checked="false"
                            aria-disabled="false"
                        >
                            <Field
                                type="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="false"
                                name="hasChildren"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom"/>
                        </div>
                        No
                    </label>
                    <label className="radioBtn-ladel">
                        <div
                            className={
                                this.props.values.hasChildren === 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }
                        >
                            <Field
                                type="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="true"
                                name="hasChildren"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom" />
                        </div>
                        Yes
                    </label>
                </div>
            </div>
        </div>
    );

    renderHasDisabilities = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Are you diagnosed with any disabilities?</label>
                <div className="sp-top10">
                    <label className="radioBtn-ladel">
                        <div
                            className={
                                this.props.values.hasDisabilities !== 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }
                            aria-checked="false" aria-disabled="false"
                        >
                            <Field
                                type="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="false"
                                name="hasDisabilities"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom"/>
                        </div>
                        No
                    </label>
                    <label className="radioBtn-ladel">
                        <div
                            className={
                                this.props.values.hasDisabilities === 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }>
                            <Field
                                type="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="true"
                                name="hasDisabilities"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom" />
                        </div>
                        Yes
                    </label>
                </div>
            </div>
        </div>
    );

    renderIsEmployed = () => (
        <div className="col-sm-3">
            <div className="form-group">
                <label>Are you currently employed?</label>
                <div className="sp-top10">
                    <label className="radioBtn-ladel">
                        <div
                            className={
                                this.props.values.isEmployed !== 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }
                            aria-checked="false"
                            aria-disabled="false"
                        >
                            <Field
                                ype="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="false"
                                name="isEmployed"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom"/>
                        </div>
                        No
                    </label>
                    <label>
                        <div
                            className={
                                this.props.values.isEmployed === 'false'
                                    ? "iradio_square unactive radio-relative"
                                    : "iradio_square checked radio-relative"
                            }>
                            <Field
                                type="radio"
                                className="ichekRadioBtn iCheck-custom"
                                value="true"
                                name="isEmployed"
                                disabled={!!this.props.isReviewForm}
                            />
                            <ins className="iCheck-helper iCheck-custom" />
                        </div>
                        Yes
                    </label>
                </div>
            </div>
        </div>
    );

    render () {
        const {
            values,
            isSubmitting,
            handleSubmit,
            isReviewForm,
        } = this.props;
        return (
            <Form
                action="#"
                id="submit_form"
                onSubmit={handleSubmit}
            >
                <div className="form-wizard">
                    <div className="form-body">
                        <div className={
                            "tab-content "+ (
                                isReviewForm
                                ? "review"
                                : ""
                            )
                        }>
                            <div
                                className="tab-pane active"
                                id="tab3">
                                {
                                    !isReviewForm &&
                                    <h3 className="block sm-bottom40">
                                        We'd love to know your circumstances; it helps us plan better!
                                    </h3>
                                }
                                <div className="row">

                                    {this.renderMartialStatus()}
                                    {this.renderHasChildren()}
                                    {this.renderHasDisabilities()}
                                    {this.renderIsEmployed()}

                                </div>

                                <SlideDown className={'my-dropdown-slidedown'}>
                                    {this.renderWorkingHours()}
                                </SlideDown>

                            </div>
                        </div>
                    </div>
                    {
                        !isReviewForm &&
                        <div className="onboarding-form-step form-actions sm-top50">
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button
                                        className="btn btn-default btn-lg font-16 button-previous"
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
                                        Continue <i className="m-icon-swapright m-icon-white"/>
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

const Form3 = withFormik({

    mapPropsToValues({ parentProps,
                         martialStatus,
                         hasChildren,
                         hasDisabilities,
                         isEmployed,
                         workingHours,
                     })
    {
        return {
            martialStatus: martialStatus || parentProps.infoCircumstances.martialStatus || '',
            hasChildren: hasChildren || parentProps.infoCircumstances.hasChildren || 'false',
            hasDisabilities: hasDisabilities || parentProps.infoCircumstances.hasDisabilities || 'false',
            isEmployed: isEmployed || parentProps.infoCircumstances.isEmployed || 'false',
            workingHours: workingHours || parentProps.infoCircumstances.workingHours || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                props.onCircumstancesInfoUpdate(
                    {
                        martialStatus: values.martialStatus,
                        hasChildren: values.hasChildren,
                        hasDisabilities: values.hasDisabilities,
                        isEmployed: values.isEmployed,
                        workingHours: values.workingHours,
                    }
                );
                // props.receivedValues(values);
                props.receiveNextFormNumber(4);
            }
        }, 200)
    }

})(renderForm3);


Form3.propTypes = {

    receiveNextFormNumber: PropTypes.func.isRequired,

    infoCircumstances: PropTypes.shape({
        martialStatus: PropTypes.string,
        hasChildren: PropTypes.string,
        hasDisabilities: PropTypes.string,
        isEmployed: PropTypes.string,
        workingHours: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }),
};


export default Form3;
