import React from 'react';
import { withFormik, Form, Field } from 'formik';
import RegistrationSteps from '../../onBoarding/RegistrationSteps';


const renderForm4 = ({
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

                                            <div className="tab-content">

                                                <div className="tab-pane active" id="tab4">
                                                    <h3 className="sm-bottom40">Great! Tell us about your experience with the LSAT</h3>
                                                    <div className="form-group">
                                                        <label>Have you officially taken the LSAT?</label>
                                                        <div className="sp-top10">
                                                            <label>
                                                                <div
                                                                    className={values.tokeLSAT === 'false' ? "iradio_square checked radio-relative" : "iradio_square radio-relative"}
                                                                    aria-checked="false" aria-disabled="false"
                                                                >
                                                                    <Field type="radio" className="ichekRadioBtn iCheck-custom" value="false" name="tokeLSAT"/>
                                                                    <ins className="iCheck-helper iCheck-custom"/>
                                                                </div>
                                                                No
                                                            </label>
                                                            <label>
                                                                <div
                                                                    className={values.tokeLSAT === 'true' ? "iradio_square checked radio-relative" : "iradio_square radio-relative"}>
                                                                    <Field type="radio" className="ichekRadioBtn iCheck-custom" value="true" name="tokeLSAT" />
                                                                    <ins className="iCheck-helper iCheck-custom" />
                                                                </div>
                                                                Yes
                                                            </label>

                                                        </div>
                                                    </div>


                                                    {values.tokeLSAT === 'true' &&

                                                    <div className="course_taken_info"
                                                        // style="display: none"
                                                    >
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label>Test Date</label>
                                                                    <Field type="date" name='testDate' className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label>Official Test Score</label>
                                                                    <Field type="number" name='testScore' className="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="font-16 text-orange font-400">SCORE BREAKDOWN:
                                                            What was the score in each section?</h3>
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label>Logical reasoning</label>
                                                                    <Field type="number" name='logicScore' className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label>Analytical Reasoning</label>
                                                                    <Field type="number" name='analyticScore' className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="form-group">
                                                                    <label>Reading Comprehension</label>
                                                                    <Field type="number" name='readingScore' className="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    }

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

const OnBoarding4 = withFormik({

    mapPropsToValues({ tokeLSAT, testDate, testScore, logicScore, analyticScore, readingScore }) {
        // const newPhone = newVal.replace(/[^0-9.]/g, "");
        return {
            tokeLSAT: tokeLSAT || '',
            testDate: testDate || '',
            testScore: testScore || '',
            logicScore: logicScore || '',
            analyticScore: analyticScore || '',
            readingScore: readingScore || '',
        };
    },


    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                alert('Your form is submitted!')
            }
        }, 2000)
    }

})(renderForm4);


export default OnBoarding4;
