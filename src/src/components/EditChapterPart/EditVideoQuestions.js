import React, {Component} from 'react';
import PropTypes from "prop-types";
import moment from 'moment';

class EditVideoQuestions extends Component {
    state = {
        deleteModalIsOpen: false,
        questionToDeleteId: '',
    };

    //Actions
    handleDeleteModalShowState = (idDelete, e) => {
        e.preventDefault();
        this.setState({
            deleteModalIsOpen: !this.state.deleteModalIsOpen,
            questionToDeleteId: idDelete || ''
        });
    };

    handleVideoQuestionDelete = (idDelete, e) => {
        e.preventDefault();
        this.setState({
            deleteModalIsOpen: !this.state.deleteModalIsOpen,
        });
        this.props.onVideoQuestionDelete(idDelete);
    };

    handleRewindTo = (time) => {
        this.props.getTimeToRewind(time);
    };

    //LifecycleMethods
    componentDidMount() {
        this.props.onLoad();
    }

    //Renders
    renderVideoQuestionsItems = () => {
        const isEditedInPreview = this.props.isEditedInPreview;
        return (
            this.props.videoQuestions.map((item) => (
                <div
                    key={item.id}
                    className="video-question sp-10 border-bottom"
                >
                    <div className="row">
                        <div className="col-sm-8">
                            <p>
                                {item.question}
                            </p>
                            <div className="row-actions">
                                <a data-toggle="modal">
                                    <i className="zmdi zmdi-edit"/>
                                    Edit
                                </a>
                                <a
                                    onClick={(e) => this.handleDeleteModalShowState(item.id, e)}
                                >
                                    <i className="zmdi zmdi-delete"/>
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <p>
                                <label
                                    className={`badge
                                ${item.tag === 'MCQ'
                                        ? 'badge-info'
                                        : 'badge-warning'}`
                                    }
                                >
                                    {item.tag}
                                </label>
                            </p>
                        </div>
                        <div className="col-sm-2">
                            <a
                                onClick={() => (!isEditedInPreview && this.handleRewindTo(item.timeInVideo))}
                            >
                                {moment(item.timeInVideo * 1000).format('mm:ss')}
                            </a>
                        </div>
                    </div>
                </div>
            ))
        );
    };

    renderDeleteModal = (idDelete) => (
        <div className='delete-modal-wrapper bootbox modal fade bootbox-confirm in'>
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            type="button"
                            className="bootbox-close-button close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            onClick={(e) => this.handleDeleteModalShowState(null, e)}
                        >
                            ×
                        </button>
                        <div className="bootbox-body">
                            <div className="sp-10 font-16">
                                Do you really want to remove this question?
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={(e) => this.handleDeleteModalShowState(null, e)}
                        >
                            CANCEL
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => this.handleVideoQuestionDelete(idDelete, e)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <div
                className="tab-pane"
                id="chapter_part_video_questions"
            >
                {this.renderVideoQuestionsItems()}
                {
                    this.state.deleteModalIsOpen &&
                    this.renderDeleteModal(this.state.questionToDeleteId)
                }
            </div>
        )
    }
}

EditVideoQuestions.propTypes = {
    videoQuestions: PropTypes.array.isRequired,
    onVideoQuestionDelete: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    getTimeToRewind: PropTypes.func
};

export default EditVideoQuestions;