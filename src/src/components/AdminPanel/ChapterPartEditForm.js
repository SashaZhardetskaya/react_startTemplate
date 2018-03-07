import React, {Component}  from "react";
import PropTypes from 'prop-types';
import EditBasicInfoContainer from "../../containers/EditChapterPart/EditBasicInfoContainer";
import EditVideoQuestionsContainer from "../../containers/EditChapterPart/EditVideoQuestionsContainer";
import EditQuizQuestionsContainer from "../../containers/EditChapterPart/EditQuizQuestionsContainer";

class ChapterPartEditForm extends Component {
    state = {
        timeRewindTo: '',
        selectedTab: ''
    };

    //Actions
    getTimeToRewind = (time) => {
        this.setState({
            timeRewindTo: time
        });
    };
    handleCloseForm = () => {
        this.props.setSelectedEditChapterPartId('')
    };
    handleSaveChanges = () => {
        //some code to save changes
        this.handleCloseForm()
    };

    //Lifecycle

    //Renders
    renderTabsHeader = () => (
        <ul
            className="nav nav-tabs"
            id="ChapterPartVideoTab"
        >
            <li className="active">
                <a
                    href="#chapter_part_basic_info"
                    data-toggle="tab"
                >
                    Basic Info
                </a>
            </li>
            <li>
                <a
                    href="#chapter_part_video_questions"
                    data-toggle="tab"
                >
                    Video Questions
                </a>
            </li>
            <li>
                <a
                    href="#chapter_part_quiz_questions"
                    data-toggle="tab"
                >
                    Quiz Questions
                </a>
            </li>
        </ul>
    );

    render() {
        return (
            <div
                className='chapter-editable chapter-edited-in-preview'
                // style={{height: '700px', position: 'relative'}}
            >
                <div className="panel-heading bg-grey">
                    <div className="panel-control">
                        <a
                            className="btn btn-default"
                            onClick={this.handleCloseForm}
                        >
                            Cancel
                        </a>
                        <a
                            className="btn btn-base"
                            onClick={this.handleSaveChanges}
                        >
                            Save Changes
                        </a>
                    </div>
                    <h3
                        className="panel-title chapter-edited-in-preview"
                    >
                        Chapter 1 Part 1
                    </h3>
                </div>
                <div className="nav-tabs-custom">
                    {this.renderTabsHeader()}
                    <div className="tab-content no-bg no-padding">
                        <EditBasicInfoContainer
                            isEditedInPreview={true}
                            handleCloseForm={this.handleCloseForm}
                        />
                        <EditVideoQuestionsContainer
                            isEditedInPreview={true}
                            getTimeToRewind={this.getTimeToRewind}
                        />
                        <EditQuizQuestionsContainer
                            isEditedInPreview={true}
                            getTimeToRewind={this.getTimeToRewind}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ChapterPartEditForm.propTypes = {
    // parts: PropTypes.array.isRequired,
    // number: PropTypes.number,
    // showModalDelete: PropTypes.func.isRequired
};

export default ChapterPartEditForm;