import React, {Component}  from "react";
import PropTypes from 'prop-types';
import SortableChaptersContainer from '../../containers/AdminPanel/SortableChaptersContainer';
import ModalDelete from './ModalDelete';
import ModalAddEditChapter from './ModalAddEditChapter';

class CourseAdmin extends Component {
    state = {
        editChapterModal: false,
        courseId: 0,
        chapter: {
            id: '',
            number: '',
            chapterTitle: '',
            description: '',
        }
    };

    // Renders
    renderHeaderPage = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Course Manager
                    </h1>
                    <small className="text-muted">
                        Manage your all courses
                    </small>
                </div>
            </div>
        </div>
    );

    renderButtonsCourse = () => (
        <ul className="nav nav-tabs">
            {this.renderOneButtonCourse('active', '#course_1', 'MCAT')}
            {this.renderOneButtonCourse('', '#course_2', 'LSAT')}
            {this.renderOneButtonCourse('', '#course_3', 'GMAT')}
        </ul>
    );

    renderOneButtonCourse = (className, link, name) => (
        <li className={className}>
            <a href={link} data-toggle="tab">
                {name}
            </a>
        </li>
    );

    renderTabContentCourses = (courses) => (
        <div className="tab-content no-bg ">
            <div
                className="tab-pane active"
                id="course_1"
            >
                {
                    courses &&
                    this.renderCourses(courses)
                }
                <a
                    href="#"
                    className="btn btn-success btn-lg btn-block btn-no-bg-i"
                >
                    <i className="zmdi zmdi-plus-circle"/>
                    Add Another Subject
                </a>
            </div>
            <div
                className="tab-pane"
                id="course_2"
            >
                <div className="panel customPanel">
                    <div className="panel-body">
                        course_2
                    </div>
                </div>
            </div>
            <div
                className="tab-pane"
                id="course_3"
            >
                <div className="panel customPanel">
                    <div className="panel-body">
                        course_3
                    </div>
                </div>
            </div>
        </div>
    );

    renderCourses = (courses) => (
        courses.map((item, index) => (
            <div
                className="panel customPanel no-bg"
                key={index}
            >
                <div className="panel-heading bg-dd">
                    <div className="panel-control sp-top10">
                        <a
                            href={"#subject_"+item.name}
                            data-toggle="collapse"
                            className="font-24"
                        >
                            <i className="zmdi zmdi-chevron-down"/>
                        </a>
                    </div>
                    <h3 className="panel-title">
                        <a
                            href={"#subject_"+item.name}
                            data-toggle="collapse"
                        >
                            <span className="font-20 font-400">
                                {item.name}
                            </span>
                        </a>
                    </h3>
                </div>
                <div
                    className={`panel-body bg-grey collapse ${index === 0 && "in"}`}
                    id={"subject_"+item.name}
                    style={{paddingLeft: "20px !important"}}
                >
                    {this.renderChapters(item.items)}
                    <a
                        href="#EditChapterModal"
                        data-toggle="modal"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={()=>
                            this.setState({
                                editChapterModal: false,
                                courseId: item.id
                            })
                        }
                    >
                        <i className="zmdi zmdi-plus-circle"/>
                        Add Another Chapter
                    </a>
                </div>
            </div>
        ))
    );

    renderChapters = (chapters) => (
        chapters.map((item,index) => (
                <div
                    key={`chapter_${index}`}
                    className="panel customPanel"
                >
                    <div className="panel-heading bg-gray">
                        <div className="panel-control">

                            <div className="btn-group">
                                <button
                                    data-toggle="dropdown"
                                    className="dropdown-toggle btn btn-info btn-no-bg-i"
                                    aria-expanded="false"
                                >
                                    <i className="zmdi zmdi-chevron-down padding-rgt"/>
                                    Options
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a href="edit-chapter-part">
                                            <i className="zmdi zmdi-plus-circle"/>
                                            &nbsp; Add Chapter Part
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#EditChapterModal"
                                            data-toggle="modal"
                                            onClick={()=>
                                                this.setState({
                                                    editChapterModal: true,
                                                    chapter: item
                                                })
                                            }
                                        >
                                            <i className="zmdi zmdi-edit"/>
                                            &nbsp; Edit Chapter Info
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={()=> this.props.deleteOneChapter(item.id)}
                                        >
                                            <i className="zmdi zmdi-delete"/>
                                            &nbsp;Delete This Chapter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="zmdi zmdi-upload"/>
                                            &nbsp;Upload PDF
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="panel-title">
                            <span className="font-18 font-400 text-uppercase">
                                {item.chapterTitle} {item.number}
                            </span>
                        </h3>
                    </div>
                    <SortableChaptersContainer
                        parts={item.parts}
                        number={index}
                    />
                </div>
            )
        )
    );

    renderNavTabs = () => (
        <ul className="nav nav-tabs bg-white">
            {this.renderNavItem('active', 'course-admin', 'Courses', 'All Courses')}
            {this.renderNavItem('', 'strategy', 'Strategy', 'Setup Strategy')}
            {this.renderNavItem('', 'people', 'People', 'Access Manager')}
            {this.renderNavItem('', 'settings-admin', 'Settings', 'Updates')}
            {this.renderNavPlusButton('pull-right', '#', 'plus-circle')}
        </ul>
    );

    renderNavItem = (className, link, title, name) => (
        <li className={className}>
            <a href={link}>
                {title}
                <span>
                    {name}
                </span>
            </a>
        </li>
    );

    renderNavPlusButton = (className, link, icon) => (
        <li className={className}>
            <a
                href={link}
                style={{paddingRight: "10px"}}
            >
                <div className="font-24 text-orange">
                    <i className={"zmdi zmdi-"+icon}/>
                </div>
            </a>
        </li>
    );

    //Actions
    resetChapterState = () => {
        this.setState({
            chapter: {
                id: '',
                number: '',
                chapterTitle: '',
                description: '',
            }
        })
    };

    //Lifecycle
    componentWillMount() {
        this.props.onLoadCourses();
    }

    render() {
        const {
            courses,
            editChapterInfo,
            addNewChapter
        } = this.props;
        return (
            <div
                className="content-wrapper"
                id="content-container"
            >
                {this.renderHeaderPage()}
                <section className="content no-padding">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="nav-tabs-custom no-bg">
                                {this.renderNavTabs()}
                                <div className="tab-content no-bg no-padding">
                                    <div
                                        className="tab-pane active"
                                        id="tab_2"
                                    >
                                        <div className="nav-tabs-custom no-bg inner-tabs">
                                            {this.renderButtonsCourse()}
                                            {
                                                courses &&
                                                this.renderTabContentCourses(courses)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    this.props &&
                    <ModalDelete
                        hideModalDelete={this.props.hideModalDelete}
                        showModalDeletePart={this.props.showModalDeletePart}
                        removeChapterConfirmation={this.props.removeChapterConfirmation}
                        partId={this.props.partId}
                    />
                }
                <ModalAddEditChapter
                    chapter={this.state.chapter}
                    courseId={this.state.courseId}
                    editChapterModal={this.state.editChapterModal}
                    editChapterInfo={editChapterInfo}
                    addNewChapter={addNewChapter}
                    resetChapterState={this.resetChapterState}
                />
            </div>
        )
    }
}

CourseAdmin.propTypes = {
    onLoadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    editChapterModal: PropTypes.func,
    editChapterInfo: PropTypes.func,
    addNewChapter: PropTypes.func,
    deleteOneChapter: PropTypes.func,
    hideModalDelete: PropTypes.func,
    showModalDeletePart: PropTypes.bool,
    removeChapterConfirmation: PropTypes.func,
    partId: PropTypes.any
};

export default CourseAdmin;