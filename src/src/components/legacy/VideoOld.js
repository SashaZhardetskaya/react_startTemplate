import React, {Component} from 'react';
import PropTypes from "prop-types";
import Slider from 'react-slick';
import {Link} from "react-router-dom";
import {Pie} from 'react-chartjs-2';
import scrollToComponent from 'react-scroll-to-component';
import {SlideDown} from 'react-slidedown'

import BackgroundImage from '../../assets/video-bg.jpg';
import {videoDescription} from "../../data/videoDescription";
import {chart2Config} from "../../data/StudentCourse/chartsConfig";


class Video extends Component {

    state = {
        show: false,
        shakeBlockVideo: "disabled-course-click",
        courseClassName: '',
        el: null
    };

    //Actions

    handleChangeShake = (index) => {
        this.setState({
            el: index,
            courseClassName: "disabled-course-click"
        });
        setTimeout(() => {
            this.setState({
                courseClassName: ''
            })
        }, 5000);
    };

    detailsInfo = (item) => {
        this.setState({show: true});
        this.props.videoGallery.map((element) => {
            element.isShow = false;
            if (element === item) {
                element.isShow = true;
            }
        });
    };

    closeDetails = () => {
        this.props.videoGallery.map((element) => {
            return element.isShow = false;
        });
        this.setState({show: false})
    };

    handleVideoItemClick = (index) => {
        this.handleChangeShake(index);
        setTimeout(() => {
            scrollToComponent(this.VideoDescriptionAccardion, { offset: 0, align: 'top', duration: 500, ease:'inExpo'});
        }, 400);
    };

    //Lifecycle methods

    componentDidMount() {
        this.props.onLoad();
    }

    //Renders

    renderVideoPgHeader = () => {
        const data = {
            labels: [
                'Completed',
                'Remaing'
            ],
            datasets: [{
                data: [30, 70],
                backgroundColor: [
                    '#0376b2',
                    '#ff851b'
                ],
                hoverBackgroundColor: [
                    '#0376b2',
                    '#ff851b'
                ]
            }]
        };
        return (
            <div className="bg-light lter b-b wrapper-md">
                <div className="row">
                    <div className="col-sm-6 col-xs-6">
                        <h1 className="m-n font-thin h3 text-black">
                            MCAT
                        </h1>
                        <small className="text-muted">
                            Admin Panel
                        </small>
                    </div>
                    <div className="col-sm-6 col-xs-6">
                        <div className="pull-right">
                            <div className="pull-left sp-right20">
                                <p className="sm-bottom0">
                                    Remaining:
                                    <span style={{color: "#00c152"}}>
                                            2 Hours
                                        </span>
                                </p>
                                <p>Total Time::
                                    <span style={{color: "#0a6be4"}}>
                                            8 Hours
                                        </span>
                                </p>
                            </div>
                            <div className="pull-left">
                                <div id="demo-sparkline-pie-2"/>
                                <Pie
                                    data={data}
                                    width={50}
                                    height={50}
                                    options={{
                                        maintainAspectRatio: false,
                                        legend: {
                                            display: false,
                                        },
                                        tooltips: {
                                            enabled: false
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    renderMainVideoDescription = () => (
        <div className="sm-bottom20 wow fadeIn">
            <div className="videoDescWrapper"
                 style={{position: "static"}}
            >
                <div className="videoDesc"
                     style={{
                         backgroundImage: `url(${BackgroundImage})`,
                         backgroundSize: "contain"
                     }}>
                    <h3 className="font-24"
                        style={{borderBottomColor: "#fff"}}>
                        Current Lecture
                    </h3>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="lecture-image wow fadeIn"
                                 data-wow-delay='1s'
                                 style={{backgroundImage: "url('http://webworldpk.com/demo/99point9/assets/videos/5.jpg')"}}
                            >
                            </div>
                            <div className="sm-top-bottom40  wow bounceInUp"
                                 data-wow-delay='1.9s'>
                                <Link
                                    to={'/video/physics/id'}
                                    className="btn btn-danger btn-block"
                                    onClick={this.closeDetails}
                                >
                                    <i className="zmdi zmdi-play"/>
                                    Resume
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            {
                                this.props.videoDescription.goals &&
                                <div className="sp-20 bg-light wow fadeIn p-bottom-10"
                                     data-wow-delay='1.3s'>
                                    <h2 className="sm-top0 sm-bottom20">
                                        Lecture Goals
                                    </h2>
                                    <ul className="list-unstyled lecture-goals">
                                        {this.renderLectureGoals()}
                                    </ul>
                                </div>
                            }
                            <div
                                className="sm-top-bottom40  wow bounceInUp"
                                data-wow-delay='2.1s'
                            >
                                <Link
                                    to="#"
                                    className="btn btn-default btn-block"
                                >
                                    <i className="zmdi zmdi-library"/>
                                    Take Quiz
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="sp-20 bg-light text-center  wow fadeIn"
                                 data-wow-delay='1.7s'
                            >
                                <h2 className="sm-top0 sm-bottom10">
                                    Merits Earned
                                </h2>
                                <h4 className="sm-top-bottom0"
                                    style={{fontSize: "150px"}}>
                                    5
                                </h4>
                                <div className="sm-bottom10"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    renderLectureGoals = () => {
        return this.props.videoDescription.goals.map((item, index) => (
            <li key={index}>
                <i className={
                    item.points === 0
                        ? item.icoClass + ' bounce'
                        : item.icoClass
                    }
                />
                {item.text}
                {
                    item.points >= 0 &&
                    <span className={`badge badge-${item.pointsType}`}>
                        {item.points}
                    </span>
                }
            </li>
        ))
    };

    renderVideosSlider = () => {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: false,
            arrows: true,
            centerPadding: '50px'
        };
        return (
            <Slider {...settings}>
                {this.renderVideos()}
            </Slider>
        )
    };

    renderVideos = () => {
        return this.props.videoGallery.map((item, index) => {
            return (
                <div
                    className={"video-item "
                    + (item.isShow
                        ? " videoDescTriangle"
                        : ''+ (item.isActive
                            ? (!item.isComplete && 'active-video-wrapper')
                            : (this.state.el === index
                                ? this.state.courseClassName
                                : '')
                            )
                        )
                    }
                    key={index}
                    style={{padding: "10px"}}
                    onClick={() => this.handleVideoItemClick(index)}
                    // onClick={() => scrollToComponent(this, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}
                    // onClick={
                    //     ()=>
                    //     {this.handleChangeShake(index)}
                    // }
                >
                    <div
                        className={"video-item "
                        + (item.isActive
                            ? item.isComplete
                                ? "completed-video"
                                : "active-video"
                            : "video-locked"
                        )}
                    >
                        <i className={(
                            item.isActive
                                ? item.isComplete
                                    ? "zmdi zmdi-check-circle"
                                    : "zmdi zmdi-"
                                : "glyphicon glyphicon-lock"
                        )}/>
                        <Link
                            to="#"
                            onClick={() => {
                                this.detailsInfo(item)
                            }}
                        >
                            <img src={item.image} alt=""/>
                        </Link>
                        <div
                            className="completedPercentage"
                            style={{width: `${item.progress + '%'}`}}
                        >
                        </div>
                        <p>
                            <Link to="#">
                                {item.title}
                            </Link>
                        </p>
                    </div>
                </div>
            )
        })
    };

    renderVideoDescription = () => (
        <div
            className="videoDescWrapper videoDescPopUp"
            ref={(div) => { this.VideoDescriptionAccardion = div; }}
        >
            {this.state.show &&
            <div className="videoDesc">
                <Link
                    to="#"
                    className="closeDesc"
                    onClick={this.closeDetails}
                >
                    <i className="zmdi zmdi-close"/>
                </Link>
                <h3>
                    Some table of contents
                </h3>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="sp-top20">
                            <h2 className="sm-top0 sm-bottom10">
                                Lecture Goals
                            </h2>
                            <ul className="list-unstyled lecture-goals">
                                {this.renderVideoDescriptionGoals()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="sp-top20 text-center">
                            <h2 className="sm-top0 sm-bottom10">
                                Merits Earned
                            </h2>
                            <h4 className="sm-top-bottom0"
                                style={{fontSize: "150px"}}>
                                {this.props.videoDescription.meritsEarned}
                            </h4>
                        </div>
                    </div>
                </div>
                {this.renderVideoDescriptionBtns()}
            </div>
            }
        </div>
    );

    renderVideoDescriptionGoals = () => {
        return this.props.videoDescription.goals.map((item, index) => (
            <li key={index}>
                <i className={item.icoClass}/>
                {item.text}
                {
                    item.points >= 0 &&
                    <span className={`badge badge-${item.pointsType}`}>
                        {item.points}
                    </span>
                }
            </li>
        ))
    };

    renderVideoDescriptionBtns = () => (
        <div className="desc-controls">
            <Link
                to={'/video/physics/id'}
                className="btn btn-danger btn-block"
                onClick={this.closeDetails}
            >
                <i className="zmdi zmdi-play"/>
                Resume
            </Link>
            <Link
                to="#"
                className="btn btn-default btn-block">
                <i className="zmdi zmdi-library"/>
                Take Quiz
            </Link>
        </div>
    );

    render() {
        return (
            <div
                className="content-wrapper"
                id="content-container"
            >
                {this.renderVideoPgHeader()}
                <section className="content video-gallery-content">
                    {this.renderMainVideoDescription()}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel customPanel">
                                <div className="panel-heading border-bottom">
                                    <h3 className="panel-title">Chapter </h3>
                                </div>
                                <div className="panel-body video-item-description-content">
                                    <div className="videos-slider-wrapper">
                                        {this.renderVideosSlider()}
                                        <SlideDown className='my-dropdown-slidedown'>
                                            {this.renderVideoDescription()}
                                        </SlideDown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

Video.propTypes = {
    videoGallery: PropTypes.array.isRequired,
    videoDescription: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired
};

export default Video;