import React from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';
import Yup from "yup";
import uuid from 'uuid'

const renderQuizQuestionAdd = ({
    handleSubmit,
    touched,
    errors,
    triggerAddQuestionShowState
}) => {

    //Renders
    const renderModalHeader = () => (
        <div className="modal-header bg-light no-border">
            <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <span
                    onClick={triggerAddQuestionShowState}
                    aria-hidden="true"
                >
                    ×
                </span>
            </button>
            <h4
                className="modal-title"
                id="myModalLabel"
            >
                Add Quiz Question
            </h4>
        </div>
    );

    const renderConceptNameForm = () => (
        <div className="col-sm-8">
            <div className="form-group">
                <label>
                    Concept Name:
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='conceptName'
                />
                {
                    (touched.conceptName && errors.conceptName) &&
                    (
                        <p className="help-block">
                            {errors.conceptName}
                        </p>
                    )
                }
            </div>
        </div>
    );

    const renderTimeInVideoForm = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>
                    Time In Video
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='timeInVideo'
                />
                {
                    (touched.timeInVideo && errors.timeInVideo) &&
                    (
                        <p className="help-block">
                            {errors.timeInVideo}
                        </p>
                    )
                }
            </div>
        </div>
    );

    const renderConceptRefersToForm = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>
                    Concept Refers To
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='conceptRefersTo'
                />
                {
                    (touched.conceptRefersTo && errors.conceptRefersTo) &&
                    (
                        <p className="help-block">
                            {errors.conceptRefersTo}
                        </p>
                    )
                }
            </div>
        </div>
    );

    const renderQuestionForm = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>
                    Question
                </label>
                <Field
                    component='textarea'
                    name='question'
                    className="form-control"
                    rows="5"
                />
                {
                    (touched.question && errors.question) &&
                    (
                        <p className="help-block">
                            {errors.question}
                        </p>
                    )
                }
            </div>
        </div>
    );

    const renderUploadPictureForm = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>
                    Upload Picture
                </label>
                <input type="file"/>
            </div>
        </div>
    );

    const renderOptionAForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>
                    Option A
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='optionA'
                />
            </div>
        </div>
    );

    const renderOptionBForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>
                    Option B
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='optionB'
                />
            </div>
        </div>
    );

    const renderOptionCForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>
                    Option C
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='optionC'
                />
            </div>
        </div>
    );

    const renderOptionDForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>
                    Option D
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='optionD'
                />
            </div>
        </div>
    );

    const renderCorrectOptionForm = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>
                    Correct Option
                </label>
                <Field
                    type="text"
                    className="form-control"
                    name='correctOption'
                />
                {
                    (touched.correctOption && errors.correctOption) &&
                    (
                        <p className="help-block">
                            {errors.correctOption}
                        </p>
                    )
                }
            </div>
        </div>
    );

    return (
        <Form
            className="modal fade in"
            id="AddQuizQuestion"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
        >
            <div
                className="add_quiz_question_modal_wrapper"
                onClick={triggerAddQuestionShowState}
            />
            <div
                className="modal-dialog modal-lg"
                role="document"
            >
                <div className="modal-content">

                    {renderModalHeader()}

                    <div className="modal-body no-padding">
                        <div className="sp-20">
                            <div className="row">

                                {renderConceptNameForm()}
                                {renderTimeInVideoForm()}
                                {renderConceptRefersToForm()}
                                {renderQuestionForm()}
                                {renderUploadPictureForm()}
                                {renderOptionAForm()}
                                {renderOptionBForm()}
                                {renderOptionCForm()}
                                {renderOptionDForm()}
                                {renderCorrectOptionForm()}

                            </div>
                        </div>
                        <div className="text-right bg-dd sp-10">
                            <button
                                type="button"
                                className='btn btn-default'
                                data-dismiss="modal"
                                onClick={triggerAddQuestionShowState}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-base"
                                onClick={handleSubmit}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    )
};


const AddQuizQuestionModal = withFormik({
    mapPropsToValues({
                         conceptName,
                         timeInVideo,
                         conceptRefersTo,
                         question,
                         optionA,
                         optionB,
                         optionC,
                         optionD,
                         correctOption
                     })
    {
        return {
            conceptName: conceptName || '',
            timeInVideo: timeInVideo || '',
            conceptRefersTo: conceptRefersTo || '',
            question: question || '',
            optionA: optionA || '',
            optionB: optionB || '',
            optionC: optionC || '',
            optionD: optionD || '',
            correctOption: correctOption || ''
        };
    },

    validationSchema: Yup.object().shape({
        conceptName: Yup.string().required('concept Name is required'),
        timeInVideo: Yup.number().required('Number is required'),
        conceptRefersTo: Yup.number().required('conceptRefersTo is required'),
        question: Yup.string().min(2, 'Question is too short').required('Question is required'),
        correctOption: Yup.number().required('Choose correct Option'),
    }),

    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            }
            else {
                props.onQuizQuestionAdd(
                    {
                        ...values,
                        id: uuid()
                    }
                );
                props.triggerAddQuestionShowState();
                resetForm();
            }
        }, 200)
    }
})(renderQuizQuestionAdd);

AddQuizQuestionModal.propTypes = {
    onQuizQuestionAdd: PropTypes.func.isRequired,
    quizQuestionsProps: PropTypes.array.isRequired,
    triggerAddQuestionShowState: PropTypes.func.isRequired
};

export default AddQuizQuestionModal;