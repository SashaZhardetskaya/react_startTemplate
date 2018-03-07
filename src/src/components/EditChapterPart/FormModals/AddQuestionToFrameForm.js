import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';
import Yup from "yup";

// I choose 'class' (not 'const') because I'll probably will need 'state' in this component after client tells us his demands
class renderQuestionToFrameForm extends Component {

    //Renders
    renderMultipleChoiceForm = (handleSubmit, touched, errors) => {
        return (
            <div
                className="tab-pane no-padding active"
                id="MultipleChoiceTab"
            >
                <div className="sp-20">
                    <div className="row">
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
                        <div className="col-sm-2">
                            <div className="form-group">
                                <label>
                                    Time In Video
                                </label>
                                <Field
                                    name='timeInVideo'
                                    type="text"
                                    className="form-control"
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
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>
                                    Question
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name='question'
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
                                {
                                    (touched.optionA && errors.optionA) &&
                                    (
                                        <p className="help-block">
                                            {errors.optionA}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
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
                                {
                                    (touched.optionB && errors.optionB) &&
                                    (
                                        <p className="help-block">
                                            {errors.optionB}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
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
                    </div>
                </div>
                <div className="text-right bg-dd sp-10">
                    <a
                        className="btn btn-default"
                        data-dismiss="modal"
                        onClick={this.props.triggerModalOpenState}
                    >
                        Cancel
                    </a>
                    <a
                        className="btn btn-base"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </a>
                </div>
            </div>
        )
    };

    // this form (renderTextBasedQuestionForm) will be changed according to customer requirements.
    // Right now is just a test version. Do not check it
    renderTextBasedQuestionForm = () => {
        return (
            <div className="tab-pane text-based-tab" id="TextBasedQuestionTab">
                <div className="sp-20">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <label>Concept Name:</label>
                                <input type="text" placeholder="e.g. Gravity"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>Concept Audio:</label>
                                <input type="file"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Concept Refers To</label>
                                <input type="text" placeholder="e.g. Gravity"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Time In Video</label>
                                <input
                                    type="text"
                                    // value="120"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Question</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Answer Choices (Each choice should be in its seperate
                                    line)</label>
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    placeholder="e.g. Option 1
                                                            Option 2
                                                            Option 3"
                                    // spellcheck="true"
                                    // style="z-index: auto; position: relative; line-height: 20px; font-size: 14px; transition: none; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right bg-dd sp-10">
                    <a
                        // href="#"
                        className="btn btn-default" data-dismiss="modal">
                        Cancel
                    </a>
                    <a
                        // href="#"
                        className="btn btn-base">
                        Save Changes
                    </a>
                </div>
            </div>
        )
    };

    render () {
        const {
            handleSubmit,
            touched,
            errors,
            selectedTabName
        } = this.props;

        return (
            <Form className="tab-content no-padding bg-grey">
                {
                    selectedTabName === 'multiple' &&
                    this.renderMultipleChoiceForm(handleSubmit, touched, errors)
                }
                {
                    selectedTabName === 'textBased' &&
                    this.renderTextBasedQuestionForm()
                }
            </Form>
        )
    }
}


const AddQuestionToFrameForm = withFormik({
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
            timeInVideo: timeInVideo ||  '',
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
        timeInVideo: Yup.number('timeInVideo must be a number').required('timeInVideo is required'),
        conceptRefersTo: Yup.number('conceptRefersTo must be a number').required('conceptRefersTo is required'),
        question: Yup.string().min(2, 'Question is too short').required('Question is required'),
        optionA: Yup.string().required('optionA is required'),
        optionB: Yup.string().required('optionB is required'),
        correctOption: Yup.number('correct Option must be a number').required('Choose correct Option'),
    }),

    handleSubmit(values, {setErrors, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            }
            else {
                if (props.selectedTabName === "multiple") {
                    console.log(
                        {
                            conceptName: values.conceptName,
                            timeInVideo: values.timeInVideo,
                            conceptRefersTo: values.conceptRefersTo,
                            question: values.question,
                            optionA: values.optionA,
                            optionB: values.optionB,
                            optionC: values.optionC,
                            optionD: values.optionD,
                            correctOption: values.correctOption,
                        }
                    );
                    props.triggerModalOpenState();
                } else {
                    // this condition will be fulfilled after client gives his requirement
                }
            }
        }, 200)
    }

})(renderQuestionToFrameForm);


AddQuestionToFrameForm.propTypes = {
    selectedTabName: PropTypes.string.isRequired,
    triggerModalOpenState: PropTypes.func.isRequired
};

export default AddQuestionToFrameForm;