import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalAddEditChapter extends Component {
    state = {
        chapter: {
            ...this.props.chapter
        }
    };

    //Renders
    renderModalHeader = () => (
        <div className="modal-header">
            <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.resetChapterState}
            >
                <span aria-hidden="true">
                    &times;
                </span>
            </button>
            <h4
                className="modal-title"
                id="myModalLabel"
            >
                Add/Edit Chapter Info
            </h4>
        </div>
    );

    renderModalFooter = () => (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={this.props.resetChapterState}
            >
                Close
            </button>
            <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={()=>
                    {
                        this.props.editChapterModal
                            ? this.props.editChapterInfo(this.state.chapter)
                            : this.props.addNewChapter(this.state.chapter, this.props.courseId);
                        this.props.resetChapterState()
                    }
                }
            >
                Save changes
            </button>
        </div>
    );

    renderInputs = (title, name, placeholder) => (
        <div className="form-group">
            <label>{title}</label>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={this.state.chapter[name]}
                onChange={(e)=> this.onChangeState(e, name)}
            />
        </div>
    );

    renderTextArea = (name) => (
        <div className="form-group">
            <label>Description</label>
            <textarea
                className="form-control"
                rows="5"
                value={this.state.chapter[name]}
                onChange={(e)=> this.onChangeState(e, name)}
            >
            </textarea>
        </div>
    );

    //Actions
    onChangeState = (e, name) => (
        this.setState({
            chapter: {
                ...this.state.chapter,
                [name]: e.target.value
            }
        })
    );

    //Lifecycle
    componentWillReceiveProps(nextProps) {
        if (this.props.chapter !== nextProps.chapter) {
            this.setState({chapter: nextProps.chapter});
        }
    };

    render() {
        return (
            <div
                className="modal fade"
                id="EditChapterModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        {this.renderModalHeader()}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    {this.renderInputs('Chapter Number', 'number', 'No.')}
                                </div>
                                <div className="col-sm-9">
                                    {this.renderInputs('Chapter Title', 'chapterTitle', 'Chapter')}
                                </div>
                                <div className="col-sm-12">
                                    {this.renderTextArea('description')}
                                </div>
                            </div>
                        </div>
                        {this.renderModalFooter()}
                    </div>
                </div>
            </div>
        )
    };
}

ModalAddEditChapter.propTypes = {
    chapter: PropTypes.object.isRequired,
    editChapterInfo: PropTypes.func.isRequired,
    addNewChapter: PropTypes.func.isRequired,
    courseId: PropTypes.number,
    resetChapterState: PropTypes.func.isRequired
};

export default ModalAddEditChapter;