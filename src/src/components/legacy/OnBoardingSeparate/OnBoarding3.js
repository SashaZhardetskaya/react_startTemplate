import React from 'react';
import { withFormik, Form, Field } from 'formik';
import RegistrationSteps from '../../onBoarding/RegistrationSteps';

const renderForm3 = ({
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

                                                <div className="tab-pane active" id="tab3">
                                                    <h3 className="block sm-bottom40">We'd love to know your circumstances; it helps us plan better!</h3>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Whats your martial status?</label>
                                                                <Field component='select' name='martialStatus' className="form-control">
                                                                    <option value="">Choose</option>
                                                                </Field>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Do you have any children?</label>
                                                                <div className="sp-top10">
                                                                    <label>
                                                                        <div
                                                                            className={values.hasChildren !== 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}
                                                                            aria-checked="false" aria-disabled="false"
                                                                        >
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="false" name="hasChildren"/>
                                                                            <ins className="iCheck-helper iCheck-custom"/>
                                                                        </div>
                                                                        No
                                                                    </label>
                                                                    {/*&nbsp;&nbsp;&nbsp;*/}
                                                                    <label>
                                                                        <div
                                                                            className={values.hasChildren === 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}>
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="true" name="hasChildren" />
                                                                            <ins className="iCheck-helper iCheck-custom" />
                                                                        </div>
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Are you diagnosed with any disabilities?</label>
                                                                <div className="sp-top10">
                                                                    <label>
                                                                        <div
                                                                            className={values.hasDisabilities !== 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}
                                                                            aria-checked="false" aria-disabled="false"
                                                                        >
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="false" name="hasDisabilities"/>
                                                                            <ins className="iCheck-helper iCheck-custom"/>
                                                                        </div>
                                                                        No
                                                                    </label>
                                                                    {/*&nbsp;&nbsp;&nbsp;*/}
                                                                    <label>
                                                                        <div
                                                                            className={values.hasDisabilities === 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}>
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="true" name="hasDisabilities" />
                                                                            <ins className="iCheck-helper iCheck-custom" />
                                                                        </div>
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group">
                                                                <label>Are you currently employed?</label>
                                                                <div className="sp-top10">
                                                                    <label>
                                                                        <div
                                                                            className={values.isEmployed !== 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}
                                                                            aria-checked="false" aria-disabled="false"
                                                                        >
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="false" name="isEmployed"/>
                                                                            <ins className="iCheck-helper iCheck-custom"/>
                                                                        </div>
                                                                        No
                                                                    </label>
                                                                    {/*&nbsp;&nbsp;&nbsp;*/}
                                                                    <label>
                                                                        <div
                                                                            className={values.isEmployed === 'false' ? "iradio_square radio-relative" : "iradio_square checked radio-relative"}>
                                                                            <Field type="radio" className="ichekRadioBtn iCheck-custom" value="true" name="isEmployed" />
                                                                            <ins className="iCheck-helper iCheck-custom" />
                                                                        </div>
                                                                        Yes
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row">

                                                        {values.isEmployed === 'true' &&
                                                            <div className="employment-info"
                                                                // style={{display: "none"}}
                                                            >
                                                                <div className="col-sm-4">
                                                                    <div className="form-group">
                                                                        <label>How many hours you work in a week?</label>
                                                                        <Field type="text" name='workingHours' className="form-control"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }

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

const OnBoarding3 = withFormik({

    mapPropsToValues({ martialStatus, hasChildren, hasDisabilities, isEmployed, workingHours,
    }) {
        return {
            martialStatus: martialStatus || '',
            hasChildren: hasChildren || 'false',
            hasDisabilities: hasDisabilities || 'false',
            isEmployed: isEmployed || 'false',
            workingHours: workingHours || '',
        };
    },

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            } else {
                // props.receivedValues(values, 'third');
                props.history.push('/on-boarding-4');
            }
        }, 2000)
    }

})(renderForm3);


export default OnBoarding3;
