import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect, Route, Switch} from "react-router-dom";

import '../assets/css/all.css';

import ContentHeaderContainer from "../containers/General/ContentHeaderContainer";
import SidebarContainer from "../containers/General/SidebarContainer";

import VideoContainer from "../containers/Video/VideoContainer";
import ChatContainer from '../containers/legacy/ChatContainer';
import InPersonSessionContainer from "../containers/UserCourse/InPersonSessionContainer";
import StudentProfileContainer from "../containers/StudentProfile/StudentProfileContainer";
import OnBoarding1 from "./legacy/OnBoardingSeparate/OnBoarding1"
import OnBoarding2 from "./legacy/OnBoardingSeparate/OnBoarding2";
import OnBoarding3 from "./legacy/OnBoardingSeparate/OnBoarding3";
import OnBoarding4 from "./legacy/OnBoardingSeparate/OnBoarding4";
import ChallengesContainer from "../containers/Challenges/ChallengesContainer";
import SettingsContainer from '../containers/Settings/SettingsContainer';
import DashboardAdminContainer from '../containers/Dashboard/DashboardAdmin/DashboardAdminContainer';
import OnBoardingContainer from "../containers/OnBoarding/OnBoardingContainer";
import VideoItemContainer from "../containers/Video/VideoItemContainer";
import DashboardContainer from "../containers/Dashboard/DashboardUser/DashboardContainer";
import StudentCourseContainer from "../containers/StudentProfile/StudentCourseContainer";
import EditChapterPart from "./EditChapterPart/EditChapterPart";
import CourseAdminContainer from "../containers/AdminPanel/CoursesAdminContainer";
import SettingsAdmin from './AdminPanel/SettingsAdmin';
import EmailEditor from './EmailEditor';
import PeopleManager from './AdminPanel/People/PeopleManager';
import NotFound from './Generals/NotFound'

/**
 *
 */
const App = ({collapsed, expandedOnHover}) => (
    <div
        id="container"
        className={"wrapper mainnav-out skin-blue sidebar-mini fixed "
        + (collapsed
            ? expandedOnHover
                ? "sidebar-expanded-on-hover"
                : "sidebar-collapse"
            : "")
        }
    >
        <ContentHeaderContainer/>
        <SidebarContainer/>

        <Switch>
            <Route
                exact
                path="/login"
                render={
                    () => (
                        <Redirect
                            to="/dashboard"
                            component={DashboardContainer}
                        />
                    )
                }
            />

            <Route
                exact
                path="/"
                render={
                    () => (
                        <Redirect
                            to="/dashboard"
                            component={DashboardContainer}
                        />
                    )
                }
            />
            <Route
                path='/dashboard'
                component={DashboardContainer}
            />
            <Route
                path='/dashboard-admin'
                component={DashboardAdminContainer}
            />
            <Route
                path='/chat'
                component={ChatContainer}
            />
            <Route
                path='/in-person-session'
                component={InPersonSessionContainer}
            />
            <Route
                path='/student-profile'
                component={StudentProfileContainer}
            />
            <Route
                path='/student-course'
                component={StudentCourseContainer}
            />
            <Route
                path='/challenges'
                component={ChallengesContainer}
            />
            <Route
                path='/settings'
                component={SettingsContainer}
            />
            <Route
                path='/edit-chapter-part'
                component={EditChapterPart}
            />
            <Route
                path='/course-admin'
                component={CourseAdminContainer}
            />
            <Route
                path='/settings-admin'
                component={SettingsAdmin}
            />
            <Route
                path='/email'
                component={EmailEditor}
            />
            <Route
                path='/people'
                component={PeopleManager}
            />

            {/*each form as separate view realization*/}
            <Route path='/on-boarding-1' component={OnBoarding1} />
            <Route path='/on-boarding-2' component={OnBoarding2} />
            <Route path='/on-boarding-3' component={OnBoarding3} />
            <Route path='/on-boarding-4' component={OnBoarding4} />

            {/*all forms as one view realization*/}
            <Route
                path='/on-boarding'
                component={OnBoardingContainer}
            />


            {/*fix it when two or more courses are open. Add redirects*/}
            <Route
                exact
                path='/video/:name'
                component={VideoContainer}
            />
            <Route
                path='/video/physics/id'
                component={VideoItemContainer}
            />
            {/*fix it when two or more courses are open. Add redirects*/}


            <Route path = "*" component = {NotFound}/>
        </Switch>

        <footer
            className="main-footer"
            id="footer"
        >
            <div className="pull-right hidden-xs">
                <b>By</b> 99point9.ca
            </div>
            <strong>
                Copyright &copy; 2016-2017
                <Link to="#">
                    99point9.ca
                </Link>.
            </strong>
            All rights reserved.
        </footer>
    </div>
);

App.propTypes = {
    collapsed: PropTypes.bool,
    expandedOnHover: PropTypes.bool,
};

export default App;
