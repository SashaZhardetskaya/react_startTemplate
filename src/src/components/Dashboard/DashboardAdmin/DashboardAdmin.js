import React, {Component}  from "react";
import PropTypes from 'prop-types';
import CourseStatistic from './CourseStatistic';
import OverviewStudents from './OverviewStudents';
import ResponsesModal from './ResponsesModal';
import OnlineStudentsModal from './OnlineStudentsModal';

class DashboardAdmin extends Component {

    //Renders
    renderContentDashboard = (adminInfo) => (
        <div className="nav-tabs-custom no-bg">
            <ul className="nav nav-tabs bg-white">
                {
                    adminInfo.navbarMenu &&
                    this.renderNavList(adminInfo.navbarMenu)
                }
            </ul>
            <div className="tab-content no-bg">
                <div
                    className="tab-pane active"
                    id="tab_1"
                >
                    {
                        adminInfo.adminEvents &&
                        <OverviewStudents adminEvents={adminInfo.adminEvents} />
                    }
                </div>
                <div
                    className="tab-pane"
                    id="tab_2"
                >
                    {
                        adminInfo.usersStatus &&
                        <CourseStatistic usersStatus={adminInfo.usersStatus}/>
                    }
                </div>
            </div>
        </div>
    );

    renderNavList = (navbarMenu) => (
        navbarMenu.map((item,index) => {
            if (!item.childList) {
                return (
                    <li
                        className={item.class_name}
                        key={index}
                    >
                        <a
                            href={item.link}
                            className={item.link_class}
                            data-toggle={item.toggle}
                        >
                            {item.name}
                            <span>
                                {item.subheading}
                            </span>
                        </a>
                    </li>
                );
            } else {
                return (
                    <li
                        className={item.class_name}
                        key={index}
                    >
                        <a
                            href={item.link}
                            className={item.link_class}
                            data-toggle="dropdown"
                            role={item.role}
                        >
                            {item.name}
                            <small className={item.caret}/>
                            <span>
                                {item.subheading}
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            {this.renderNavListDropdown(item.childList)}
                        </ul>
                    </li>
                );
            }
        })
    );

    renderNavListDropdown = (childlist) => (
        childlist.map((item, index) => (
            <li
                role={item.role}
                key={index}
            >
                <a
                    role={item.roleLink}
                    tabIndex="-1"
                    href={item.link}
                >
                    {item.title}
                </a>
            </li>
        ))
    );

    //Lifecycle
    componentDidMount() {
        this.props.onLoadInfo();
    }

    render() {
        const {adminInfo} = this.props;

        return (
            <div
                className="content-wrapper"
                id="content-container"
            >
                <div className="bg-light lter b-b wrapper-md">
                    <div className="row">
                        <div className="col-sm12 col-xs-12">
                            <h1 className="m-n font-thin h3 text-black">
                                The Dashboard
                            </h1>
                            <small className="text-muted">
                                Everything Starts Here
                            </small>
                        </div>
                    </div>
                </div>
                <section className="content no-padding">
                    {
                        adminInfo &&
                        this.renderContentDashboard(adminInfo)
                    }
                </section>
                {
                    adminInfo.usersResponses &&
                    <ResponsesModal usersResponses={adminInfo.usersResponses} />
                }

                {
                    adminInfo.usersOnline &&
                    <OnlineStudentsModal usersOnline={adminInfo.usersOnline} />
                }
            </div>
        );
    }

}

DashboardAdmin.propTypes = {
    onLoadInfo: PropTypes.func.isRequired,
    adminInfo: PropTypes.shape({
        adminEvents: PropTypes.object,
        usersStatus: PropTypes.object,
        usersOnline: PropTypes.object,
        usersResponses: PropTypes.array,
        navbarMenu: PropTypes.array
    })
};

export default DashboardAdmin;