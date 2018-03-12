import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

    //LifecycleMethods
    componentDidMount() {
        this.props.onNotificationsLoad();
        this.props.onTaskProgressLoad();
    }

    render() {
        const {
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