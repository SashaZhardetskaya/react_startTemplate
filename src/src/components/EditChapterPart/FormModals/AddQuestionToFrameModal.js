import React, {Component} from 'react';
import PropTypes from "prop-types";
import AddQuestionToFrameForm from './AddQuestionToFrameForm'

class AddQuestionToFrameModal extends Component {
    state = {
        selectedTabName: 'multiple'
    };

    //Actions
    handleTabChange = (tabName) => {
        this.setState({
            selectedTabName: tabName
        });
    };

    render() {
        return (
            <div
                className="add-question-to-frame-modal modal fade in"
                id="AddVideoQuestionModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
            >
                <div
                    className="modal-dialog modal-lg"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header bg-light no-border">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    onClick={this.props.triggerModalOpenState}
                                >
                                    ×
                                </span>
                            </button>
                            <h4
                                className="modal-title"
                                id="myModalLabel"
                            >
                                Add Video Question
                            </h4>
                        </div>
                        <div className="modal-body no-padding">
                            <div className="nav-tabs-custom">
                                <ul className="nav nav-tabs border-bottom">
                                    <li className={` ${this.state.selectedTabName === 'multiple' && 'active'}`}>
                                        <a onClick={(e) => this.handleTabChange('multiple', e)}>
                                            Multiple Choice
                                        </a>
                                    </li>
                                    <li className={` ${this.state.selectedTabName === 'textBased' && 'active'}`}>
                                        <a onClick={(e) => this.handleTabChange('textBased', e)}>
                                            Text Based Question
                                        </a>
                                    </li>
                                </ul>

                                <AddQuestionToFrameForm
                                    selectedTabName={this.state.selectedTabName}
                                    triggerModalOpenState={this.props.triggerModalOpenState}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


AddQuestionToFrameModal.propTypes = {
    triggerModalOpenState: PropTypes.func.isRequired
};

export default AddQuestionToFrameModal;