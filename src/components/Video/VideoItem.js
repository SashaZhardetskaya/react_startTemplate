import React, {Component} from 'react';
import {BigPlayButton, ControlBar, Player, VolumeMenuButton} from 'video-react';
import {Link} from "react-router-dom";

import FinalQuiz from './FinalQuiz';

import back from '../../assets/back-arrow.svg';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import revert from '../../assets/revert.svg';
import fullscreen from '../../assets/fullscreen.svg';
import playbackright from '../../assets/playbackright.svg';
import playbackleft from '../../assets/playbackleft.svg';
import revert15s from '../../assets/revert15s.svg';
import subtitlesIco from '../../assets/subtitlesIco.svg';
import subtitles from './sintel.vtt';
import correctSound from '../../assets/audio/ding.WAV';

// import {LectureObjectives} from '../../data/LectureObjectives'
// import {VideoQuestionSummary} from '../../data/VideoQuestionSummary'


// const marks = [3, 8, 16, 22];

const sources = {
    sintelTrailer: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    // bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};



class VideoItem extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            source: sources['sintelTrailer'],
            count: 0,
            done: false,
            show: false,
            currentPercent: 0,
            durationVideo: 0,
            duration: 0,
            currentTime: 0,
            attemptAnswer: 0,
            globalAttemptAnswer: 0,
            player: {},
            showQuiz: true,
            playing: true,
            backward: false,
            left: 0,
            hoverTime: 0,
            currentModalQuestionIndex: 0,
            currentModalOptionIndex: 0,
            textTracksMode: 'showing'
        };
    }

    // const markss = this.props.quizQuestions.map((item) => {
    //     // console.log(item.timeInVideo);
    //     return new Array(item.timeInVideo)
    //     // console.log(item.timeInVideo);
    //
    //     // const timeInVideoArr = [];
    //     // timeInVideoArr.push(item.timeInVideo);
    // });
    // console.log('-----------------', markss);

    componentDidMount() {
        this.props.onLoad();
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    //Actions

    showQuestion = () => {
        this.setState({
            show: true
        });
    };

    getAttemptAnswer = (marks) => {

        if (this.state.globalAttemptAnswer < 9) {
            if (this.state.attemptAnswer < 4) {
                this.showQuestion()
            } else if (this.state.attemptAnswer === 4) {
                this.toStart(marks);
                this.setState({
                    attemptAnswer: 0
                })
            }
        } else if (this.state.globalAttemptAnswer === 9) {
            this.testSubmit();
            this.setState({
                globalAttemptAnswer: 0,
                attemptAnswer: 0
            })
        }
    };

    handleStateChange = (state) => {
        this.setState({
            player: state
        });

        const current = Math.ceil(state.currentTime);
        let duration = state.duration;
        let currentPercent = current * 100 / duration;
        let durationVideo =
            Math.floor(duration / 60) + ':' +
            (Math.floor(duration % 60) < 10
                ? '0' + Math.floor(duration % 60)
                : Math.floor(duration % 60));
        let currentTime =
            Math.floor(current / 60) + ':' +
            (Math.floor(current % 60) < 10
                ? '0' + Math.floor(current % 60)
                : Math.floor(current % 60));
        this.setState({
            currentPercent: currentPercent,
            durationVideo: durationVideo,
            duration: duration,
            currentTime: currentTime
        });




        if (Math.ceil(this.state.player.currentTime) === Math.ceil(duration)) {
            this.setState({
                showQuiz: true
            })
        }
    };

    handleShowMarksState = (marks) => {
        if (Math.ceil(this.state.player.currentTime) === marks[this.state.count]) {
            this.setState({
                count: this.state.count+1,
            });
            this.pause();
            this.setState({
                show: true
            });
        }
    };

    toStart = (marks) => {
        if (this.state.count - 1 === 0) {
            this.refs.player.seek(0);
        } else {
            this.refs.player.seek(marks[this.state.count - 2]);
        }
        this.play();
        this.setState({
            show: !this.state.show,
            done: false,
            count: this.state.count - 1,
            player: {
                isActive: true
            }
        });
    };

    testSubmit = () => {
        this.play();
        this.setState({
            show: !this.state.show,
            done: false,
            globalAttemptAnswer: 0,
            attemptAnswer: 0
        })
    };

    play = () => {
        this.refs.player.play();
        this.setState({
            playing: true
        });
        console.log('this.refs.video.video', this.refs.player.video.video);
        console.log(this.refs.player.video.video);
    };

    pause = () => {
        this.refs.player.pause();
        this.setState({
            playing: false
        })
    };

    addTextTrack = () => {
        const textTracks = this.refs.player.video.video.textTracks;
        textTracks[0].mode = this.state.textTracksMode;
        const cues = textTracks[0].cues;
        [...cues].forEach((item) => (
            item.line = 1,
            item.size = 75
        ));
    };

    toggleSubtitleShowState = () => {
        const textTracks = this.refs.player.video.video.textTracks;

        if (this.state.textTracksMode === 'showing') {
            this.setState({
                    textTracksMode: 'hidden'
                },
                () => {
                    textTracks[0].mode = this.state.textTracksMode;
                }
            );
        } else {
            this.setState({
                    textTracksMode: 'showing'
                },
                () => {
                    textTracks[0].mode = this.state.textTracksMode;
                }
            );
        }
    };


    changeCurrentTime = (seconds, marks) => {
        return () => {
            const {player} = this.refs.player.getState();
            const currentTime = player.currentTime;
            if(currentTime - seconds < marks[this.state.count-1]){
                if (this.state.count-1 === 0){
                    this.refs.player.seek(0);
                } else {
                    this.refs.player.seek(marks[this.state.count - 1]);
                }
                this.setState({count: (this.state.count - 1)});
            } else {
                this.refs.player.seek(currentTime - seconds);
            }
        }
    };

    seek = (seconds) => {
        return () => {
            this.refs.player.seek(seconds);
        }
    };

    changePlaybackRateRate = (steps) => {
        return () => {
            const {player} = this.refs.player.getState();
            const playbackRate = player.playbackRate;
            this.refs.player.playbackRate = playbackRate + steps;
        }
    };

    setMuted = (muted) => {
        return () => {
            this.refs.player.muted = muted;
        }
    };

    setFullScreen = () => {
        this.refs.player.toggleFullscreen();
    };

    setBackward = (marks) => {
        if (this.state.count-1 === 0){
            this.refs.player.seek(0);
        } else {
            if (!this.state.backward){
                this.refs.player.seek(marks[this.state.count - 1]);
                this.setState({backward: true})
            } else {
                this.refs.player.seek(marks[this.state.count - 2]);
                this.setState({backward: false})
            }
            this.setState({count: (this.state.count - 1)});
        }
    };

    onMouseMove = (e) => {
        let el = document.getElementsByClassName('wrap-progress-yt')[0].offsetWidth;
        let mouseX = e.nativeEvent.offsetX;
        let hoverSeconds = this.state.duration * mouseX / el < 1 ? 0 : this.state.duration * mouseX / el;
        let hoverTime = Math.floor(hoverSeconds / 60) + ':' + (Math.floor(hoverSeconds % 60) < 10 ? '0' + Math.floor(hoverSeconds % 60) : Math.floor(hoverSeconds % 60));
        this.setState({
            left: mouseX,
            hoverTime: hoverTime
        });
    };

    handleSkipQuestionModal = () => {
        this.playAnswerSound();
        setTimeout(() => {
            this.testSubmit();
            this.setState({
                // show: false,
                currentModalQuestionIndex: this.state.currentModalQuestionIndex + 1,
                currentModalOptionIndex: 0
            });
        }, 100);
    };

    checkModalAnswerOption = (index) => {
        this.setState({
            currentModalOptionIndex: index
        })
    };

    playAnswerSound = () => {
        this.audioSource.play();
    };

    //Renders

    renderVideo = (marks) => (
        <div className="panel customPanel">
            <div className="panel-body">
                <div>
                    <Link to="/video/physics">
                        <img
                            className="back-btn"
                            src={back}
                            alt="back"
                        />
                    </Link>
                    {
                        (this.refs.player && this.state.currentPercent > 0) &&
                        this.addTextTrack()
                    }
                    <Player
                        ref="player"
                        autoPlay
                    >
                        <source src={this.state.source}/>
                        <ControlBar disableDefaultControls={true}/>
                        <BigPlayButton disabled/>
                        {/*<track src={subtitles}/>*/}
                        <VolumeMenuButton vertical={true}/>
                        <track kind="subtitles" label="English subtitles" src={subtitles} srcLang="en" default/>
                    </Player>
                </div>

                <div
                    className="wrap-yt"
                    style={{display: this.state.show ? "flex" : ''}}
                >
                    <div className="yt-progress-bar">
                        <div
                            className="wrap-progress-yt"
                            onMouseMove={this.onMouseMove}
                        >
                            <div
                                className="mouse-hover-time"
                                style={{left: `${this.state.left+'px'}`}}
                            >
                                {this.state.hoverTime}
                            </div>
                            {this.renderMarks(marks)}
                            <div
                                style={{
                                    border: "7px solid #9F0432",
                                    borderRadius: 50,
                                    position: "absolute",
                                    left: `${this.state.currentPercent < 99 ? this.state.currentPercent + '%': '99%'}`,
                                    top: -2,
                                    marginLeft: -2,
                                    boxShadow: "0px 0px 1px black"
                                }}>
                            </div>
                            <div className="progress-video-yt"
                                 role="progressbar"
                                 aria-valuenow={this.state.currentPercent}
                                 aria-valuemin="0"
                                 aria-valuemax="100"
                                 style={{width: `${this.state.currentPercent < 99 ? this.state.currentPercent + '%': '99%'}`}}
                            >
                            </div>
                        </div>
                        <span className="yt-time">{this.state.durationVideo}</span>
                    </div>
                    <div className="yt-controls-btn">
                        <div className="wrap-yt-btn btn-play-pause">
                            {!this.state.playing &&
                            <button
                                className="btn-player"
                                onClick={this.play}
                            >
                                <img src={play} alt="play" />
                            </button>
                            }
                            {this.state.playing &&
                            <button
                                className="btn-player"
                                onClick={this.pause}
                            >
                                <img src={pause} alt="pause" />
                            </button>
                            }
                            <div className="yt-title-name">
                                <h1>Chemistry Fundamentals</h1>
                                <p>MCAT Chemistry Chapter 2</p>
                            </div>
                        </div>

                        <div className="wrap-yt-btn">
                            <button
                                className="btn-player"
                                onClick={(marks) => this.setBackward(marks)}
                            >
                                <img src={revert} alt="revert" />
                            </button>
                            <button
                                className="btn-player"
                                onClick={(marks) => this.changeCurrentTime(15, marks)}
                            >
                                <img src={revert15s} alt="revert 15 seconds" />
                            </button>
                            <button
                                className="btn-player"
                                onClick={this.changePlaybackRateRate(-0.5)}
                            >
                                <img src={playbackleft} alt="playback" />
                            </button>
                            <button
                                className="btn-player"
                                onClick={this.changePlaybackRateRate(0.5)}
                            >
                                <img src={playbackright} alt="playback" />
                            </button>

                            <button
                                className="btn-player"
                                onClick={this.toggleSubtitleShowState}
                            >
                                <img src={subtitlesIco} alt="subtitles" />
                            </button>


                            <button
                                className="btn-player"
                                onClick={this.setFullScreen}
                            >
                                <img src={fullscreen} alt="full screen" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderModalOld = (marks) => (
        <div
            className="modal show"
            style={{display: "block"}}
            aria-hidden="true"
            id="MCQModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
        >
            <div
                className="modal-dialog"
                style={{top: 200}}
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header"
                         style={{borderTop: "1px solid #e5e5e5"}}
                    >
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span></button>
                        <h4
                            className="modal-title"
                            id="myModalLabel"
                        >
                            Quick Question
                        </h4>
                    </div>
                    <div className="modal-body">
                        <p>What will be the next in sequence: 19 9 29 8 39?</p>
                        <ul className="list-unstyled">
                            <li><label><input type="radio"/> 59</label></li>
                            <li><label><input type="radio"/> 49</label></li>
                            <li><label><input type="radio"/> 11</label></li>
                            <li><label><input type="radio"/> 7</label></li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                            onClick={() => {
                                this.setState({
                                    attemptAnswer: this.state.attemptAnswer + 1,
                                    globalAttemptAnswer: this.state.globalAttemptAnswer + 1
                                });
                                this.getAttemptAnswer(marks)
                            }}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.testSubmit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    renderModal = () => {
        return this.props.quizQuestions.map((item, index) => {
            if (index === this.state.currentModalQuestionIndex) {
                return (
                    <div
                        key={index}
                        className="modal fade in"
                        id="MCQChallange"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        style={{display: 'block'}}
                    >
                        <div
                            className="modal-dialog"
                            role="document"
                        >
                            <div className="modal-content">
                                {/*<div className="timer">*/}
                                    {/*<h1>36:06</h1>*/}
                                {/*</div>*/}
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h4
                                        className="modal-title"
                                        id="myModalLabel">
                                        Challenge Question
                                    </h4>
                                </div>
                                <div className="modal-body">
                                    <div className="final_quiz_list">
                                        <div
                                            className="question sp-20 active-question"
                                            id="FinalQuizQuestion3"
                                        >
                                            <p className="font-18">
                                                {item.question}
                                            </p>
                                            <ul className="list-unstyled mcqList">
                                                <li>
                                                    <label>
                                                        <div
                                                            className={`iradio_square video-modal-radio-wrapper ${this.state.currentModalOptionIndex === 1 && 'checked'}`}
                                                            // aria-checked="false"
                                                            // aria-disabled="false"
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="radio"
                                                                value="60"
                                                                className='video-modal-radio'
                                                                onClick={()=>this.checkModalAnswerOption(1)}
                                                            />
                                                            <ins className="iCheck-helper video-modal-radio-icon"/>
                                                        </div>
                                                        {item.optionA}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <div
                                                            // className="iradio_square video-modal-radio-wrapper"
                                                            className={`iradio_square video-modal-radio-wrapper ${this.state.currentModalOptionIndex === 2 && 'checked'}`}
                                                            // aria-checked="false"
                                                            // aria-disabled="false"
                                                        >
                                                            <input
                                                                type="radio" name="radio" value="60"
                                                                className='video-modal-radio'
                                                                onClick={(e)=>this.checkModalAnswerOption(2)}
                                                            />
                                                            <ins
                                                                className="iCheck-helper video-modal-radio-icon"
                                                            />
                                                        </div>
                                                        {item.optionB}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <div
                                                            // className="iradio_square video-modal-radio-wrapper"
                                                            className={`iradio_square video-modal-radio-wrapper ${this.state.currentModalOptionIndex === 3 && 'checked'}`}
                                                            aria-checked="false"
                                                            aria-disabled="false"
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="radio"
                                                                value="60"
                                                                className='video-modal-radio'
                                                                onClick={(e) => this.checkModalAnswerOption(3)}
                                                            />
                                                            <ins className="iCheck-helper video-modal-radio-icon"/>
                                                        </div>
                                                        {item.optionC}
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <div
                                                            className={`iradio_square video-modal-radio-wrapper ${this.state.currentModalOptionIndex === 4 && 'checked'}`}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="radio"
                                                                value="60"
                                                                className='video-modal-radio'
                                                                onClick={()=>this.checkModalAnswerOption(4)}
                                                            />
                                                            <ins className="iCheck-helper video-modal-radio-icon"/>
                                                        </div>
                                                        {item.optionD}
                                                    </label>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <div className="final-mcqs-controls">
                                                <a
                                                    href="#"
                                                    className="btn btn-default"
                                                    onClick={this.handleSkipQuestionModal}
                                                >
                                                    Skip Question
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-danger"
                                                    onClick={this.handleSubmitAnswerModal}
                                                >
                                                    Submit Answer
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="paginationFinalQuiz text-right">
                                                {index + 1}/{this.props.quizQuestions.length}
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div*/}
                                        {/*className="alert alert-info sm-bottom0 sm-top20"*/}
                                        {/*// style="display: none;"*/}
                                        {/*id="AlertNoGuessWorkPlease"*/}
                                    {/*>*/}
                                        {/*<p>*/}
                                            {/*We just want to confirm that you are not doing a guess work.*/}
                                            {/*<a href="#">*/}
                                                {/*Yes Thats Correct!*/}
                                            {/*</a>*/}
                                        {/*</p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    };


    renderMarks = (marks) => {
        return marks.map((item, index) => (
            <span
                key={index}
                style={{
                    position: "absolute",
                    left: `${item * 100 / this.state.duration + '%'}`,
                    top: '-10px',
                    border: '5px solid transparent',
                    borderTop: '5px solid #fff'
                }}
            />
        ))
    };

    renderQuizes = () => (
        <div className="nav-tabs-custom">
            <ul className="nav nav-tabs">
                <li className="active">
                    <a
                        href="#video_question_summary"
                        data-toggle="tab"
                    >
                        Video Question Summary
                    </a>
                </li>
                <li>
                    <a
                        href="#final_quiz"
                        data-toggle="tab"
                    >
                        Final Quiz
                    </a>
                </li>
                <li>
                    <Link
                        to="/chat"
                    >
                        Discussion
                    </Link>
                </li>
                <li>
                    <a
                        href="#written_response"
                        data-toggle="tab"
                    >
                        Written Response
                    </a>
                </li>
            </ul>
            <div className="tab-content no-padding">

                {this.renderVideoQuestionSummary()}
                {this.renderWrittenResponse()}

                <div className="tab-pane"
                     id="final_quiz"
                >
                    <FinalQuiz/>
                    {/*{this.renderQuestions()}*/}
                </div>
                <div className="tab-pane" id="discussion">
                </div>
            </div>
        </div>
    );

    renderVideoQuestionSummary = () => (
        <div className="tab-pane active" id="video_question_summary">
            <div className="sp-20">
                <p className="font-24">You got 16/20 questions right (80%)</p>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Result</th>
                            <th>Question</th>
                            <th>Attempts</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {this.renderVideoQuestionAnswer()}
                    </tbody>
                </table>
            </div>
        </div>
    );

    renderWrittenResponse = () => (
        <div className="tab-pane" id="written_response">
            <div className="sp-20">
                <p className="font-24">Write your response</p>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    style={{width: '100%'}}
                />
            </div>
        </div>
    );

    renderVideoQuestionAnswer = () => {
        return this.props.videoQuestionSummery.map((question, index) => (
            <tr key={index}>
                <td className="text-center">
                    <i className={
                        question.result
                            ? "zmdi zmdi-check text-success font-24"
                            : "zmdi zmdi-close text-danger font-24"
                    }
                    />
                </td>
                <td>
                    <p className="font-14">
                        {question.text}
                    </p>
                </td>
                <td className="text-center">
                    <span className={
                        !question.result
                            ? "text-danger font-18"
                            : "text-success font-18"
                        }>
                        {question.status}
                    </span>
                </td>
            </tr>
        ));
    };

    renderLectureObjectives = () => {
        return (
            <div className="col-sm-4">
                <div className="panel customPanel">
                    <div className="panel-heading border-bottom">
                        <h3 className="panel-title">Lecture Objectives</h3>
                    </div>
                    <div className="panel-body no-padding">
                        <div className="sp-top-bottom10 sp-left20">
                            <ul className="list-unstyled lecture_objectives">
                                {this.renderLectureObjective()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    renderLectureObjective = () => {
        return this.props.lectureObjectives.map((objective, index) => (
            <li className="objective_1"
                key={index}
            >
                <i className="zmdi zmdi-square-o"/>
                {objective}
            </li>
        ));
    };

    renderAudioSource = () => (
        <div>
            <audio
                ref={(audio) => this.audioSource = audio}
            >
                <source src={correctSound} type="audio/wav"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );

    playNewVideo = () => {
        // console.log('this.state.currentTime > 10/100', this.state.currentTime < this.state.durationVideo);
        // console.log('this.state.currentTime > 10/100', this.state.currentTime);
        // console.log('---------this.state', this.state);
        // if (this.state.currentTime >= this.state.duration || this.refs.player.ended) {
        if (this.state.currentTime >= this.state.durationVideo) {
            console.log('111---------this.refs.player.ended', this.state.currentTime);
            console.log('TRUE______this.refs.player.ended', this.refs.player.ended);
            this.setState(
                {
                    source: sources['bunnyTrailer'],
                    currentModalQuestionIndex: 0,
                    count: 0
                },
                () => {
                    this.refs.player.load();
                }
            );
        }
    };

    render() {
        // console.log('-----------------', this.props);


        // MOVE IT TO CONNECT
        const marks = [];
        this.props.quizQuestions.map((item) => {
            return marks.push(item.timeInVideo)
        });

        this.handleShowMarksState(marks);

        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.renderVideo(marks)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            {
                                this.state.show
                                && this.renderModal()
                            }
                            {
                                this.state.showQuiz
                                && this.renderQuizes()
                            }
                        </div>
                        {this.renderLectureObjectives()}
                    </div>
                    {this.renderAudioSource()}
                    {
                        setTimeout(() => {
                            this.playNewVideo()
                        }, 400) //400 -
                    }
                </section>
            </div>
        );
    }
}

export default VideoItem;