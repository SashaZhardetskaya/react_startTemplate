import React, {Component} from 'react';
import PropTypes from "prop-types";
import {BigPlayButton, ControlBar, Player, VolumeMenuButton} from 'video-react';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import revert from '../../assets/revert.svg';
import fullscreen from '../../assets/fullscreen.svg';
import playbackright from '../../assets/playbackright.svg';
import playbackleft from '../../assets/playbackleft.svg';
import revert15s from '../../assets/revert15s.svg';
import AddQuestionToFrameModal from "./FormModals/AddQuestionToFrameModal";

const marks = [3, 8, 16, 22];

const sources = {
    sintelTrailer: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
};

class VideoEdit extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isVideoUploaded: false,
            addQuestionModalIsOpen: false,
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
            hoverTime: 0
        };
    }

    //Lifecycle methods
    componentDidMount() {
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        this.refs.player.seek(nextProps.rewindTo)
    }

    //Actions
    triggerModalOpenState = () => {
        this.setState({
            addQuestionModalIsOpen: !this.state.addQuestionModalIsOpen
        })
    };

    handleStateChange(state) {
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

        if (Math.ceil(this.state.player.currentTime) === marks[this.state.count]) {
            this.setState({
                count: this.state.count+1,
            });
            this.pause();
            this.setState({
                show: true
            });
        }

        if (Math.ceil(this.state.player.currentTime) === Math.ceil(duration)) {
            this.setState({
                showQuiz: true
            })
        }
    }

    play = () => {
        this.refs.player.play();
        this.setState({
            playing: true
        })
    };

    pause = () => {
        this.refs.player.pause();
        this.setState({
            playing: false
        })
    };

    changeCurrentTime = (seconds) => {
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
        };
    };

    seek = (seconds) => {
        return () => {
            this.refs.player.seek(seconds);
        };
    };

    changePlaybackRateRate = (steps) => {
        if (this.state.playing) {
            return () => {
                const {player} = this.refs.player.getState();
                const playbackRate = player.playbackRate;
                if (this.refs.player.playbackRate > 0) {
                    this.refs.player.playbackRate = playbackRate + steps;
                }
            };
        } else {
            return null
        }
    };

    setMuted = (muted) => {
        return () => {
            this.refs.player.muted = muted;
        };
    };

    setFullScreen = () => {
        this.refs.player.toggleFullscreen();
    };

    setBackward = () => {
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
        let hoverSeconds = (this.state.duration * mouseX / el < 1)
            ? 0
            : this.state.duration * mouseX / el;
        let hoverTime = (Math.floor(hoverSeconds / 60) + ':' + (Math.floor(hoverSeconds % 60) < 10)
            ? ('0' + Math.floor(hoverSeconds % 60))
            : Math.floor(hoverSeconds % 60));
        this.setState({
            left: mouseX,
            hoverTime: hoverTime
        });
    };

    //Renders
    renderVideo = () => (
        <div className="panel customPanel">
            <div className="panel-body">
                <div>
                    <Player
                        ref="player"
                        autoPlay
                    >
                        <source src={this.state.source}/>
                        <ControlBar disableDefaultControls={true}/>
                        <BigPlayButton disabled/>
                        <VolumeMenuButton vertical={true}/>
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
                            {this.renderMarks()}
                            <div
                                className='video-progress-pin'
                                style={{
                                    left: `${this.state.currentPercent < 99
                                        ? this.state.currentPercent + '%'
                                        : '99%'}`
                                }}
                            />
                            <div className="progress-video-yt"
                                 role="progressbar"
                                 aria-valuenow={this.state.currentPercent}
                                 aria-valuemin="0"
                                 aria-valuemax="100"
                                 style={{
                                     width: `${this.state.currentPercent < 99
                                         ? this.state.currentPercent + '%'
                                         : '99%'}`
                                 }}
                            >
                            </div>
                        </div>
                        <span className="yt-time">{this.state.durationVideo}</span>
                    </div>
                    <div className="yt-controls-btn">
                        <div className="wrap-yt-btn btn-play-pause">
                            {
                                !this.state.playing &&
                                <button
                                    className="btn-player"
                                    onClick={this.play}
                                >
                                    <img
                                        src={play}
                                        alt="play"
                                    />
                                </button>
                            }
                            {
                                this.state.playing &&
                                <button
                                    className="btn-player"
                                    onClick={this.pause}
                                >
                                    <img
                                        src={pause}
                                        alt="pause"
                                    />
                                </button>
                            }
                        </div>
                        <div className="wrap-yt-btn">
                            <button
                                className="btn-player"
                                onClick={this.setBackward}
                            >
                                <img
                                    src={revert}
                                    alt="revert"
                                />
                            </button>
                            <button
                                className="btn-player"
                                onClick={this.changeCurrentTime(15)}
                            >
                                <img
                                    src={revert15s}
                                    alt="revert 15 seconds"
                                />
                            </button>
                            <button
                                className="btn-player"
                                onClick={
                                    this.changePlaybackRateRate(-0.5)
                                }
                            >
                                <img
                                    src={playbackleft}
                                    alt="playback"
                                />
                            </button>
                            <button
                                className="btn-player"
                                onClick={this.changePlaybackRateRate(0.5)}
                            >
                                <img
                                    src={playbackright}
                                    alt="playback"
                                />
                            </button>
                            <button
                                className="btn-player"
                                onClick={this.setFullScreen}
                            >
                                <img
                                    src={fullscreen}
                                    alt="full screen"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderMarks = () => {
        return marks.map((item, index) => (
            <span
                key={index}
                className='video-mark-style'
                style={{left: `${item * 100 / this.state.duration + '%'}`}}
            />
        ))
    };

    renderUploadVideoBlock = () => (
        <div
            className="bg-white">
            <div id="player">
                <div className="sp-20 video-upload-controls">
                    <form>
                        <div
                            className="fileinput fileinput-new"
                            data-provides="fileinput"
                        >
                                    <span className="btn btn-default btn-file">
                                        <span className="fileinput-new">
                                            <i className="zmdi zmdi-upload"/>
                                            Upload New Video
                                        </span>
                                        {
                                            this.state.isVideoUploaded &&
                                            <span className="fileinput-exists">
                                                Change
                                            </span>
                                        }
                                        <input
                                            type="file"
                                            name="..."
                                        />
                                    </span>
                            <span className="fileinput-filename"/>
                            &nbsp;
                            <a
                                className="close fileinput-exists"
                                data-dismiss="fileinput"
                            />
                        </div>
                        <button className="btn btn-danger text-white">
                            <i className="zmdi zmdi-delete"/>
                            Remove This Video
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

    renderAddQuestionBlock = () => (
        <div className="sm-top20">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>
                            Current Frame Time
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.currentTime}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>&nbsp;</label>
                        <a
                            href="#"
                            onClick={this.triggerModalOpenState}
                            className="btn btn-default btn-block">
                            Add Question at this Frame
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    render() {
        return (
            <div className="col-sm-5">
                {
                    this.state.addQuestionModalIsOpen &&
                    <AddQuestionToFrameModal
                        triggerModalOpenState={this.triggerModalOpenState}
                    />
                }
                <div>
                    <section>
                        <div className="row">
                            <div className="col-sm-12">
                                {this.renderVideo()}
                            </div>
                        </div>
                    </section>
                </div>
                {this.renderUploadVideoBlock()}
                {this.renderAddQuestionBlock()}
            </div>
        );
    }
}

VideoEdit.propTypes = {
    rewindTo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default VideoEdit;