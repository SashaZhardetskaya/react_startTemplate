import React from 'react';
import PropTypes from 'prop-types';
// import {Link, Redirect, Route, Switch} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router-dom";

import '../assets/css/all.css';

import ContentHeaderContainer from "../containers/General/ContentHeaderContainer";
import SidebarContainer from "../containers/General/SidebarContainer";

import DashboardContainer from "../containers/Dashboard/DashboardUser/DashboardContainer";
import NotFound from './Common/NotFound'

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

            <Route path="*" component={NotFound}/>
        </Switch>

        <footer
            className="main-footer"
            id="footer"
        >
            <div className="pull-right hidden-xs">
                <b>By</b> Sasha
            </div>
        </footer>
    </div>
);

App.propTypes = {
    collapsed: PropTypes.bool,
    expandedOnHover: PropTypes.bool,
};

export default App;
