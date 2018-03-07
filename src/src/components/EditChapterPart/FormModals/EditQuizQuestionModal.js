import React from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';


const renderQuizQuestionEdit = ({
        handleSubmit,
        triggerEditQuestionShowState
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
                    onClick={triggerEditQuestionShowState}
                    aria-hidden="true"
                >
                    ×
                </span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
                Edit Quiz Question
            </h4>
        </div>
    );

    const renderConceptNameForm = () => (
        <div className="col-sm-8">
            <div className="form-group">
                <label>Concept Name:</label>
                <Field
                    type="text"
                    className="form-control"
                    name='conceptName'
                />
            </div>
        </div>
    );
    const renderTimeInVideoForm = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>Time In Video</label>
                <Field
                    type="text"
                    className="form-control"
                    name='timeInVideo'
                />
            </div>
        </div>
    );
    const renderConceptRefersToForm = () => (
        <div className="col-sm-2">
            <div className="form-group">
                <label>Concept Refers To</label>
                <Field
                    type="text"
                    className="form-control"
                    name='conceptRefersTo'
                />
            </div>
        </div>
    );
    const renderQuestionForm = () => (
        <div className="col-sm-12">
            <div className="form-group">
                <label>Question</label>
                <Field
                    type='text'
                    name='question'
                    className="form-control"
                />
            </div>
        </div>
    );
    const renderOptionAForm = () => (
        <div className="col-sm-6">
            <div className="form-group">
                <label>Option A</label>
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
                <label>Option B</label>
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
                <label>Option C</label>
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
                <label>Option D</label>
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
                <label>Correct Option</label>
                <Field
                    type="text"
                    className="form-control"
                    name='correctOption'
                />
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
                onClick={triggerEditQuestionShowState}
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
                                onClick={triggerEditQuestionShowState}
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


const EditQuizQuestionModal = withFormik({
    mapPropsToValues({
                         quizQuestionsProps,
                         selectedId,
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
        const currentQuizQuestionsProps = quizQuestionsProps.filter((item) => item.id === selectedId)[0];
        return {
            conceptName: conceptName || currentQuizQuestionsProps.conceptName || 'parentProp',
            timeInVideo: timeInVideo || currentQuizQuestionsProps.timeInVideo || 0,
            conceptRefersTo: conceptRefersTo || currentQuizQuestionsProps.conceptRefersTo || 'parentProp',
            question: question || currentQuizQuestionsProps.question || 'parentProp',
            optionA: optionA || currentQuizQuestionsProps.optionA || 'optionA',
            optionB: optionB || currentQuizQuestionsProps.optionB || 'optionB',
            optionC: optionC || currentQuizQuestionsProps.optionC || 'optionC',
            optionD: optionD || currentQuizQuestionsProps.optionD || 'optionD',
            correctOption: correctOption || currentQuizQuestionsProps.correctOption || 'prop 1 || prop A'
        };
    },

    handleSubmit(values, {setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            }
            else {
                props.triggerEditQuestionShowState();
                props.onQuizQuestionUpdate(
                    props.selectedId,
                     {
                         ...values,
                         correctOption: +values.correctOption
                     }
                );
            }
        }, 200)
    }
})(renderQuizQuestionEdit);


EditQuizQuestionModal.propTypes = {
    onQuizQuestionUpdate: PropTypes.func.isRequired,
    quizQuestionsProps: PropTypes.array.isRequired,
    selectedId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    triggerEditQuestionShowState: PropTypes.func.isRequired
};

export default EditQuizQuestionModal;