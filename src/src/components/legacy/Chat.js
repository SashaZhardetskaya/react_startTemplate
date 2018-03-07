import React, {Component} from 'react';

import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import {stateToHTML} from 'draft-js-export-html';
import {Link} from "react-router-dom";
import emoji from 'react-easy-emoji';
import Dropzone from 'react-dropzone';


import userImage from '../../assets/128x128.jpg';
import admin1 from '../../assets/1.jpg';
import admin2 from '../../assets/2.jpg';
import admin3 from '../../assets/3.jpg';
import * as EditorState from "draft-js/lib/EditorState";

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
let dropzoneRef;

class Chat extends Component {

    state = {
        shareFiles: [],
        editorState: EditorState.createEmpty(),
        message: '',
        chats:[{
            userName: this.props.user.name,
            userImage: userImage,
            content: 'Hello every one 🐲',
            time: '09:54 AM',
            date: '23.01.2018',
            subject: 'Physics',
            authUser: true
        },{
            userName: 'Humayon',
            userImage: admin1,
            content: 'Hello',
            time: '09:55 AM',
            date: '23.01.2018',
            subject: 'Physics',
            authUser: false
        },{
            userName: 'Sohaib Ahmed',
            userImage: admin2,
            content: 'Hello',
            time: '09:56 AM',
            date: '23.01.2018',
            subject: 'Physics',
            authUser: false
        }]

    };

    onChange = (editorState) => {

        this.setState({
            editorState
        });
    };



    renderMessage = () => (
        this.state.chats.map((item, index)=>{
            let emojiSmile = emoji(item.content);
            return(
                <li className={"chat-item " + (item.authUser ?  "chat-item-right": "chat-item-left")} key={index}>
                    <div className="chat-item-content">
                        <img src={item.userImage} className="chat-avatar" alt="User"/>
                        <div className="chat-item-text">
                            {item.authUser? <i className="fa fa-caret-right"></i> : <i className="fa fa-caret-left"></i>}

                            <p>{emojiSmile}</p>

                        </div>
                        <span className="seen"><i className="zmdi zmdi-check-all"></i> Seen {item.time}</span>
                    </div>
                </li>
        )})
    );
    sendMessage = (e) => {
        e.preventDefault();
        let time = new Date().toLocaleTimeString('en-US');
        let date = new Date().toLocaleDateString('en-US', { day: 'numeric' , year: 'numeric', month: 'long' });
        let content = stateToHTML(this.state.editorState.getCurrentContent()).replace(/<[^>]+>|&nbsp;/g, '');
        this.setState({
            chats: this.state.chats.concat([{
                userName: this.props.user.name,
                content: content,
                userImage: userImage,
                time: time,
                date: date,
                subject: 'Physics',
                authUser: true
            }]),
            editorState: EditorState.createEmpty()
        });
    };

    renderSharedFiles = () => (
        this.state.shareFiles.map((item, index) => (
        <li key={index}>
            <a href={item.path}>
                <span className="icon file f-html">html</span>
                <span className="filename">{item.name}</span>
            </a>
        </li>
            )
        )
    );

    render() {
        return (
            <div
                className="content-wrapper"
                id="content-container"
                style={{minHeight: 627}}
            >
                <section className="content chat-area">
                    <div className="chat-box">
                        <div className="chat-contents-wrapper">
                            <ul className="chat-items-wrapper">

                                <li className="chat-day">
                                    <h3>Jan 31, 2018</h3>
                                </li>
                                {this.renderMessage()}

                            </ul>
                        </div>
                        <div className="chatbox-input-area">
                            <div className="chat-input">
                                <Editor
                                    editorState={this.state.editorState}
                                    onChange={this.onChange}
                                    plugins={plugins}
                                    ref={(element) => { this.editor = element; }}
                                    placeholder="Type your message and hit enter to send"
                                />
                            </div>
                            <div className="chat-input-extra">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <ul className="">
                                            <li>
                                                <EmojiSuggestions />
                                                <EmojiSelect />
                                            </li>
                                            <Dropzone style={{display: 'none'}} ref={(node) => { dropzoneRef = node; }}
                                                      onDrop={(accepted) => {
                                                          console.log(accepted);
                                                          this.state.shareFiles.push({path: accepted.map(f=>f.preview), name: accepted.map(f=>f.name), type: accepted.map(f=>f.type)});
                                                          this.setState({
                                                          shareFiles: this.state.shareFiles,
                                                      })}
                                                      }
                                            >
                                            </Dropzone>
                                            <li><Link to='#' onClick={() => { dropzoneRef.open() }}><i className="fa fa-paperclip"></i></Link></li>
                                            <li className="w-150">
                                                <select className="form-control">
                                                    <option value="">Message For:</option>
                                                    <option value="">Humayon</option>
                                                    <option value="">Sophia</option>
                                                    <option value="">Sohaib</option>
                                                    <option value="">All</option>
                                                </select>
                                            </li>
                                            <li className="w-150">
                                                <select className="form-control">
                                                    <option value="">Subject:</option>
                                                    <option value="">Physics</option>
                                                    <option value="">Chemistry</option>
                                                    <option value="">English</option>
                                                </select>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="pull-right">
                                        <div className="relative">
                                            <button
                                                type="submit"
                                                className="btn btn-success SendMessageBtn"
                                                onClick={(e)=>{this.sendMessage(e)}}
                                            ><i className="fa fa-paper-plane"></i> Send Message </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-dets">
                        <div className="chat-dets-content">
                            <ul className="people-in-chat">
                                <li>
                                    <div className="chat-people-avatar">
                                        <i className="fa fa-circle text-success"></i>
                                        <img src={userImage} alt="User"/>
                                    </div>
                                    <h4>Mike Taylor (Student)</h4>
                                </li>
                                <li>
                                    <div className="chat-people-avatar">
                                        <i className="fa fa-circle text-success"></i>
                                        <img src={admin1} alt="Admin"/>
                                    </div>
                                    <h4>Humayon</h4>
                                </li>
                                <li>
                                    <div className="chat-people-avatar">
                                        <i className="fa fa-circle text-grey"></i>
                                        <img src={admin2} alt="Admin"/>
                                    </div>
                                    <h4>Sohaib Ahmed</h4>
                                </li>
                                <li>
                                    <div className="chat-people-avatar">
                                        <i className="fa fa-circle text-danger"></i>
                                        <img src={admin3} alt="Admin"/>
                                    </div>
                                    <h4>Sohpia Glisch</h4>
                                </li>
                            </ul>
                            <div className="chat-files">
                                <h3>Shared Files</h3>
                                <ul className="shared-files-list">
                                    {this.renderSharedFiles()}
                                    {/*<li>*/}
                                        {/*<a href={this.state.shareFilesPath}>*/}
                                            {/*<span className="icon file f-html">html</span>*/}
                                            {/*<span className="filename">{this.state.shareFilesName}</span>*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-mp4">mp4</span>*/}
                                            {/*<span className="filename">thisismp4filesample.mp4</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-pdf">pdf</span>*/}
                                            {/*<span className="filename">pdffilesample.pdf</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-zip">zip</span>*/}
                                            {/*<span className="filename">a-sample-for-zip-file</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-doc">docx</span>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<img src={userImage} alt="User"/>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-doc">docx</span>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<img src={userImage} alt="User"/>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-doc">docx</span>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<img src={userImage} alt="User"/>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-pdf">pdf</span>*/}
                                            {/*<span className="filename">pdffilesample.pdf</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-zip">zip</span>*/}
                                            {/*<span className="filename">a-sample-for-zip-file</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-doc">docx</span>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-pdf">pdf</span>*/}
                                            {/*<span className="filename">pdffilesample.pdf</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-zip">zip</span>*/}
                                            {/*<span className="filename">a-sample-for-zip-file</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                        {/*<Link to="#">*/}
                                            {/*<span className="icon file f-doc">docx</span>*/}
                                            {/*<span className="filename">chapter-1.doc</span>*/}
                                        {/*</Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Chat;