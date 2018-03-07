import React, {Component} from 'react';
import PropTypes from 'prop-types';

import userImage from '../../assets/128x128.jpg';
import {Link} from "react-router-dom";

/**
 * Site header.
 */

class ContentHeader extends Component {

    //Renders
    renderLogo = () => (
        <a
            href="/"
            className="logo"
        >
            <span className="logo-mini">
                <b>99</b>
            </span>
            <span className="logo-lg">
                <b>99point9</b>.ca
            </span>
        </a>
    );

    renderMessagesMenu = (notifications) => (
        <li className="dropdown messages-menu">
            <a className="dropdown-toggle"
               data-toggle="dropdown"
            >
                <i className="glyphicon glyphicon-envelope"/>
                <span className="label label-success">
                    {notifications.length}
                </span>
            </a>
            <ul className="dropdown-menu pull-right">
                <li className="header">
                    You have {notifications.length} messages
                </li>
                <li>
                    <div className="slimScrollDiv">
                        <ul className="menu">
                            {
                                notifications
                                && notifications.length > 0
                                && this.renderMessagesList()
                            }
                        </ul>
                        <div className="slimScrollBar"/>
                        <div className="slimScrollRail"/>
                    </div>
                </li>
                <li className="footer">
                    <a>See All Messages</a>
                </li>
            </ul>
        </li>
    );

    renderMessagesList = () => {
        return this.props.notifications.map((message, index) => (
                <li key={index}>
                    <a>
                        <div className="pull-left">
                            <img
                                src={message.photo}
                                className="img-circle"
                                alt="User"
                            />
                        </div>
                        <h4>
                            {message.name}
                            <small>
                                <i className="fa fa-clock-o"/>
                                {message.time}
                            </small>
                        </h4>
                        <p>
                            {message.text}
                        </p>
                    </a>
                </li>
            )
        );
    };

    renderTasksMenu = (tasksProgress) => (
        <li className="dropdown tasks-menu">
            <a
                className="dropdown-toggle"
                data-toggle="dropdown">
                <i className="fa fa-flag"/>
                <span className="label label-danger">
                {tasksProgress.length}
            </span>
            </a>
            <ul className="dropdown-menu pull-right">
                <li className="header">
                    You have {tasksProgress.length} tasks
                </li>
                <li>
                    <div className="slimScrollDiv">
                        <ul className="menu">

                            {
                                tasksProgress
                                && tasksProgress.length > 0
                                && this.renderTasksList()
                            }

                        </ul>
                        <div className="slimScrollBar"/>
                        <div className="slimScrollRail"/>
                    </div>
                </li>
                <li className="footer">
                    <a>View all tasks</a>
                </li>
            </ul>
        </li>
    );

    renderTasksList = () => (
         this.props.tasksProgress.map((task, index) => {
            if (task.percentage) {
                return (
                    <li key={index}>
                        <a>
                            <h3>
                                {task.text}
                                <small className="pull-right">
                                    {task.percentage}
                                </small>
                            </h3>
                            <div className="progress xs">
                                <div
                                    className={`progress-bar progress-bar-${task.color}`}
                                    style={{"width": (task.percentage)}}
                                    role="progressbar"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <span className="sr-only">
                                        20% Complete
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                )
            } else {
                return (
                    <li key={index}>
                        <a>
                            <h3>
                                {task.text}
                                <small className="pull-right">
                                    {task.percentage}
                                </small>
                            </h3>
                        </a>
                    </li>
                )
            }
         })
     );

    renderUserMenu = (user, onLogout) => (
        <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
                <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                >
                    <i className="glyphicon glyphicon-user"/>
                    <span>
                        {user.name}
                        {user.surname}
                        <i className="caret"/>
                    </span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="user-header bg-light-blue">
                        <img
                            src={userImage}
                            className="img-circle"
                            alt="Admin"
                        />
                        <p>
                            {user.name} {user.surname} - {user.position}
                            <small>Admin since Nov. 2014</small>
                        </p>
                    </li>
                    <li className="user-footer">
                        <div className="pull-right">
                            <Link
                                to="/login"
                                className="btn btn-default btn-flat"
                                onClick={() => {
                                    onLogout();
                                }}
                            >Sign out</Link>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    );

    //LifecycleMethods
    componentDidMount() {
        this.props.onNotificationsLoad();
        this.props.onTaskProgressLoad();
    }

    render() {
        const {
            notifications,
            tasksProgress,
            user,
            onLogout,
            onSidebarToggleCollapse
        } = this.props;
        return (
            <header className="main-header">
                {this.renderLogo()}
                <nav
                    className="navbar navbar-static-top"
                    role="navigation"
                >
                    <Link
                        to="#"
                        className="sidebar-toggle"
                        data-toggle="offcanvas"
                        role="button"
                        onClick={(e) => {
                            e.preventDefault();
                            onSidebarToggleCollapse();
                        }}
                    >
                    </Link>
                    <div className="navbar-custom-menu">
                        <div className="navbar-left">
                            <ul className="nav navbar-nav">
                                {this.renderMessagesMenu(notifications)}
                                {this.renderTasksMenu(tasksProgress)}
                            </ul>
                        </div>
                        {this.renderUserMenu(user, onLogout)}
                    </div>
                </nav>
            </header>
        )
    }
}

ContentHeader.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
    }),
    onLogout: PropTypes.func.isRequired,
    onSidebarToggleCollapse: PropTypes.func.isRequired,
    onNotificationsLoad: PropTypes.func.isRequired,
    onTaskProgressLoad: PropTypes.func.isRequired,
    notifications: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired,
    ]),
    tasksProgress: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired,
    ]),
};

export default ContentHeader;