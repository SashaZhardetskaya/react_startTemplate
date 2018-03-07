import React, {Component} from 'react';
import PropTypes from "prop-types";
import { withFormik, Form, Field } from 'formik';
import ImageUpload from "./ImgUpload";

class renderBasicInfo extends Component {

    //LifeCycle Methods
    componentDidMount() {
        this.props.onLoad();
    }

    //Renders
    renderBasicInfoForms = () => (
        <div className="col-sm-8">
            <div className="form-group">
                <label>Title</label>
                <Field
                    type="text"
                    name='title'
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <Field
                    className="form-control"
                    name='description'
                    component="textarea"
                    rows="4"
                />
            </div>
            <div className="form-group">
                <label>Internal Notes</label>
                <Field
                    type="text"
                    className="form-control"
                    name='internalNotes'
                />
            </div>
            <div className="form-group">
                <label>Expected Finish Time</label>
                <Field
                    type="text"
                    className="form-control"
                    name='finishTime'
                />
            </div>
        </div>
    );

    render() {
        const {
            isSubmitting,
            handleSubmit,
            handleReset,
            dirty
        } = this.props;
        return (
            <Form
                className="tab-pane no-padding active"
                id="chapter_part_basic_info"
                onSubmit={handleSubmit}
            >
                <div className="sp-10">
                    <div className="row">
                        {this.renderBasicInfoForms()}
                        <div className="col-sm-4">
                            <div className="sp-top20">
                                <ImageUpload/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right bg-grey sp-10">
                    <button
                        type="button"
                        className={
                            `btn btn-default disabled
                            ${!isSubmitting
                            && ' resetBasicInfo-btn'}`
                        }
                        onClick={this.props.isEditedInPreview ? this.props.handleCloseForm : handleReset}
                        disabled={!this.props.isEditedInPreview && (!dirty || isSubmitting)}
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
            </Form>
        )
    }
}

const EditBasicInfo = withFormik({
    mapPropsToValues({
                         chapterPartInfo,
                         title,
                         description,
                         internalNotes,
                         finishTime
    })
    {
        return {
            title: title || chapterPartInfo.title || 'Chapter Part Video Title',
            description: description || chapterPartInfo.description || 'Chapter Part Video Description',
            internalNotes: internalNotes || chapterPartInfo.internalNotes || 'Some Internal Notes about this video',
            finishTime: finishTime || chapterPartInfo.finishTime || 'Expected Finish Time'
        };
    },

    handleSubmit(values, {setErrors, setSubmitting, props}) {
        setTimeout(() => {
            if (values.email === 'test@test.io') {
                setErrors({ email: 'This email is already token' })
            }
            else {
                props.onChapterPartUpdate(values);
                if (props.isEditedInPreview) {
                    props.handleCloseForm();
                }
            }
        }, 200)
    }
})(renderBasicInfo);

EditBasicInfo.propTypes = {
    chapterPartInfo: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            internalNotes: PropTypes.string,
            finishTime: PropTypes.string,
            thumbnail: PropTypes.string
        }),
    onChapterPartUpdate: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired
};

export default EditBasicInfo;