import React, {Component} from 'react';
import VideoEdit from '../../components/EditChapterPart/VideoEdit'
import EditVideoQuestionsContainer from "../../containers/EditChapterPart/EditVideoQuestionsContainer";
import EditQuizQuestionsContainer from "../../containers/EditChapterPart/EditQuizQuestionsContainer";
import EditBasicInfoContainer from "../../containers/EditChapterPart/EditBasicInfoContainer"

class EditChapterPart extends Component {
    state = {
        timeRewindTo: '',
    };

    //Actions
    getTimeToRewind = (time) => {
        this.setState({
            timeRewindTo: time
        });
    };

    //Renders
    renderContentHeader = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Edit Chapter Details
                    </h1>
                    <small className="text-muted">
                        Chapter No 1 Part 1
                    </small>
                </div>
            </div>
        </div>
    );

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
                className="content-wrapper"
                id="content-container"
            >
                {this.renderContentHeader()}
                <section className="content">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="nav-tabs-custom">
                                {this.renderTabsHeader()}
                                <div className="tab-content no-bg no-padding">
                                    <EditBasicInfoContainer/>
                                    <EditVideoQuestionsContainer
                                        getTimeToRewind={this.getTimeToRewind}
                                    />
                                    <EditQuizQuestionsContainer
                                        getTimeToRewind={this.getTimeToRewind}
                                    />
                                </div>
                            </div>
                        </div>
                        <VideoEdit
                            rewindTo={this.state.timeRewindTo}
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default EditChapterPart;