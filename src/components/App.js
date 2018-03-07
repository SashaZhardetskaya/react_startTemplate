import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect, Route, Switch} from "react-router-dom";

import '../assets/css/all.css';

import ContentHeaderContainer from "../containers/General/ContentHeaderContainer";
import SidebarContainer from "../containers/General/SidebarContainer";

// import VideoContainer from "../containers/Video/VideoContainer";
// import VideoItemContainer from "../containers/Video/VideoItemContainer";

import OnBoardingContainer from "../containers/OnBoarding/OnBoardingContainer";
import DashboardContainer from "../containers/Dashboard/DashboardUser/DashboardContainer";
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
                path='/on-boarding'
                component={OnBoardingContainer}
            />


            {/*<Route*/}
                {/*exact*/}
                {/*path='/video/:name'*/}
                {/*component={VideoContainer}*/}
            {/*/>*/}
            {/*<Route*/}
                {/*path='/video/physics/id'*/}
                {/*component={VideoItemContainer}*/}
            {/*/>*/}


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
