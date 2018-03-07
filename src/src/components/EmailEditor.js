import React, {Component} from 'react';
import CKEditor from "react-ckeditor-component";

class Example extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent = (newContent) => {
        this.setState({
            content: newContent
        })
    };

    onChange = (evt) => {
        console.log("onChange fired with event info: ", evt);
        let newContent = evt.editor.getData();
        this.setState({
            content: newContent
        });
        console.log('newContent', newContent);
    };

    onBlur = (evt) => {
        console.log("onBlur event called with event info: ", evt);
    };

    afterPaste = (evt) => {
        console.log("afterPaste event called with event info: ", evt);
    };

    render() {
        return (
            <div
                className="content-wrapper"
                id="content-container"
            >


                <div className="panel customPanel sm-bottom0">
                    <div className='panel-heading border-bottom'>
                        <h3 className="panel-title text-uppercase font-400">
                            <span className="font-16">
                                <i className="zmdi zmdi-email"/>
                                Template Email
                            </span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="btn-group" data-toggle="button">
                                <a href="#" className="btn btn-default active w-sm">Instructor</a>
                                <a href="#" className="btn btn-default w-sm">Student</a>
                            </div>
                        </div>
                        <div className="form-group">

                            <CKEditor
                                activeclassName="p10"
                                content={this.state.content}
                                events={{
                                    "blur": this.onBlur,
                                    "afterPaste": this.afterPaste,
                                    "change": this.onChange
                                }}
                            />

                        </div>

                        <div className="form-group text-right no-margin text-edit-btns">
                            <a className="btn btn-default w-xs">
                                <i className="zmdi zmdi-close"/>
                                Cancel
                            </a>
                            <a className="btn btn-default w-xs">
                                <i className="zmdi zmdi-eye"/>
                                Preview
                            </a>
                            <a className="btn btn-base w-xs">
                                <i className="zmdi zmdi-save"/>
                                Save
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Example;