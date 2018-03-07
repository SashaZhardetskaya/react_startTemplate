import React from 'react';
import {Link} from 'react-router-dom';

import LogoImage from '../../assets/logo-red.png';


/**
 * Site header.
 */
const GeneralHeader = () => {

    //Renders
    const renderBurgerButton = () => (
        <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
        >
                                <span className="sr-only">
                                    Toggle navigation
                                </span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
        </button>
    );

    const renderLogo = () => (
        <Link
            className="navbar-brand"
            to="https://99point9.ca/"
        >
            <img
                src={LogoImage}
                alt="Logo"
            />
        </Link>
    );

    const renderCoursesDropdown = () => (
        <li className="dropdown">
            <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Courses
                <span className="caret"/>
            </Link>
            <ul className="dropdown-menu">
                <li>
                    <a href="https://99point9.ca/course/lsat">
                        LSAT
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/course/scholarships">
                        SCHOLARSHIPS
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/course/mcat">
                        MCAT
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/course/gre">
                        GRE
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/course/gmat">
                        GMAT
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/course/professional-school-admissions">
                        PROFESSIONAL SCHOOL ADMISSIONS
                    </a>
                </li>
            </ul>
        </li>
    );

    const renderInstructorsDropdown = () => (
        <li className="dropdown">
            <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
            >Instructors
                <span className="caret"/>
            </Link>
            <ul className="dropdown-menu">
                <li>
                    <Link to="https://99point9.ca/instructor/humayun">
                        Humayun Ahmed
                    </Link>
                </li>
                <li>
                    <Link to="https://99point9.ca/instructor/sohaib">
                        Sohaib Ahmed
                    </Link>
                </li>
                <li>
                    <Link to="https://99point9.ca/instructor/sophia">
                        Sophia Glisch
                    </Link>
                </li>
            </ul>
        </li>
    );

    const renderStudentsFeedbacksLink = () => (
        <li>
            <a href="https://99point9.ca/testimonials">
                What our students say
            </a>
        </li>
    );

    const renderSignupLink = () => (
        <li>
            <Link
                to="/signup"
            >
                Sign up
            </Link
            >
        </li>
    );

    const renderLoginLink = () => (
        <li className="hidden-xs">
            <Link
                to="/login"
            >
                Log in
            </Link>
        </li>
    );

    return (
        <header className="app app-header-fixed loginSignupPage">
            <div className="app-header">
                <div className="container2">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                {renderBurgerButton()}
                                {renderLogo()}
                            </div>
                            <div className="collapse navbar-collapse"
                                 id="bs-example-navbar-collapse-1"
                            >
                                <ul className="nav navbar-nav navbar-right">
                                    {renderCoursesDropdown()}
                                    {renderStudentsFeedbacksLink()}
                                    {renderInstructorsDropdown()}
                                    {renderSignupLink()}
                                    {renderLoginLink()}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default GeneralHeader;

