import React, {Component} from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import AddQuizQuestionModal from './FormModals/AddQuizQuestionModal'
import EditQuizQuestionModal from './FormModals/EditQuizQuestionModal'

class EditQuizQuestions extends Component {
    state = {
        showAddQuizModal: false,
        showEditQuizModal: false,
        deleteModalIsOpen: false,
        selectedQuizQuestionId: '',
    };

    //LifecycleMethods
    componentDidMount() {
        this.props.onLoad();
    }

    //Actions
    handleDeleteModalShowState = (idDelete, e) => {
        e.preventDefault();
        this.setState({
            deleteModalIsOpen: !this.state.deleteModalIsOpen,
            selectedQuizQuestionId: idDelete || ''
        });
    };

    handleQuizQuestionDelete = (idDelete, e) => {
        e.preventDefault();
        this.setState({
            deleteModalIsOpen: !this.state.deleteModalIsOpen,
        });
        this.props.onQuizQuestionDelete(idDelete);
    };

    handleRewindTo = (time) => {
        this.props.getTimeToRewind(time);
    };

    triggerAddQuestionShowState = () => {
        this.setState({
            showAddQuizModal: !this.state.showAddQuizModal
        });
    };

    triggerEditQuestionShowState = () => {
        this.setState({
            showEditQuizModal: !this.state.showEditQuizModal
        });
    };

    handleEditQuestionClick = (id) => {
        this.setState({
            selectedQuizQuestionId: id,
        });
        this.triggerEditQuestionShowState();
    };

    //Renders
    renderQuizQuestionsItems = () => {
        const isEditedInPreview = this.props.isEditedInPreview;
        return (
            this.props.quizQuestions.map((item) => (
                <div
                    key={item.id}
                    className="video-question sp-10 border-bottom"
                >
                    <div className="row">
                        <div className="col-sm-10">
                            <p>
                                {item.question}
                            </p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className={`${item.correctOption === 1 && "text-orange quiz-correct-option"}`}>
                                        {item.optionA}
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className={`${item.correctOption === 2 && "text-orange quiz-correct-option"}`}>
                                        {item.optionB}
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className={`${item.correctOption === 3 && "text-orange quiz-correct-option"}`}>
                                        {item.optionC}
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className={`${item.correctOption === 4 && "text-orange quiz-correct-option"}`}>
                                        {item.optionD}
                                    </p>
                                </div>
                            </div>
                            <div className="row-actions">
                                <a
                                    onClick={() => this.handleEditQuestionClick(item.id)}
                                    href="#EditVideoQuestionModal"
                                    data-toggle="modal"
                                >
                                    <i className="zmdi zmdi-edit"/>
                                    Edit
                                </a>
                                <a
                                    href="#"
                                    onClick={(e) => this.handleDeleteModalShowState(item.id, e)}
                                >
                                    <i className="zmdi zmdi-delete"/>
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <a onClick={() => (!isEditedInPreview && this.handleRewindTo(item.timeInVideo))}>
                                {moment(item.timeInVideo*1000).format('mm:ss')}
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
                            onClick={(e) => this.handleQuizQuestionDelete(idDelete, e)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    render () {
        return (
            <div
                className="tab-pane chapter_part_quiz_questions"
                id="chapter_part_quiz_questions"
            >
                <div className="text-right sp-10 border-bottom">
                    <a
                        onClick={this.triggerAddQuestionShowState}
                        href="#AddQuizQuestion"
                        data-toggle="modal"
                        className="btn btn-base"
                    >
                        <i className="zmdi zmdi-plus-circle"/>
                        Add Question
                    </a>
                </div>
                {
                    this.state.showEditQuizModal &&
                    <EditQuizQuestionModal
                        triggerEditQuestionShowState={this.triggerEditQuestionShowState}
                        quizQuestionsProps={this.props.quizQuestions}
                        onQuizQuestionUpdate={this.props.onQuizQuestionUpdate}
                        selectedId={this.state.selectedQuizQuestionId}
                    />
                }
                {
                    this.state.showAddQuizModal &&
                    <AddQuizQuestionModal
                        quizQuestionsProps={this.props.quizQuestions}
                        onQuizQuestionAdd={this.props.onQuizQuestionAdd}
                        triggerAddQuestionShowState={this.triggerAddQuestionShowState}
                    />
                }
                {this.renderQuizQuestionsItems()}
                {
                    this.state.deleteModalIsOpen &&
                    this.renderDeleteModal(this.state.selectedQuizQuestionId)
                }
            </div>
        )
    }
}

EditQuizQuestions.propTypes = {
    getTimeToRewind: PropTypes.func,
    onLoad: PropTypes.func.isRequired,
    onQuizQuestionAdd: PropTypes.func.isRequired,
    onQuizQuestionDelete: PropTypes.func.isRequired,
    onQuizQuestionUpdate: PropTypes.func.isRequired,
    quizQuestions: PropTypes.array.isRequired,
};

export default EditQuizQuestions;