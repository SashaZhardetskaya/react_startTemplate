import React from 'react';

import LogoImage from '../../assets/logo-red.png';

/**
 * Site footer.
 */
const GeneralFooter = () => {

    //Renders
    const renderContacts = () => (
        <div className="col-sm-4">
            {renderLogo()}
            <div className="address-section">
                <p>
                    <strong>Office Hours</strong>
                </p>
                <p>8:00am - 6:00pm</p>
            </div>
            <div className="address-section">
                <p>
                    <strong>Telephone</strong>
                </p>
                <p>(647)-899-0337</p>
            </div>
            <div className="address-section">
                <p>
                    <strong>Email</strong>
                </p>
                <p>info@99point9prep.com</p>
            </div>
        </div>
    );

    const renderLogo = () => (
        <div className="sm-top-bottom20">
            <a href="https://99point9.ca/">
                <img
                    src={LogoImage}
                    alt="Logo"
                    style={{
                        width: "100px"
                    }}
                />
            </a>
        </div>
    );

    const renderImportantLinks = () => (
        <div className="col-sm-4">
            <h3>Important Links</h3>
            <ul>
                <li>
                    <a href="https://99point9.ca/events">
                        Events
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/blog">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/contents/media/">
                        Media
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/contents/about-us/">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="https://99point9.ca/contact-us">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );

    const renderCourses = () => (
        <div className="col-sm-4">
            <h3>Courses</h3>
            <ul>
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
        </div>
    );

    const renderFooter = () => (
        <div className="container">
            <div className="copyrights">
                <div className="row">
                    <div className="col-sm-6">
                        <p>Copyright &copy; 2018 99point9 - All Rights Reserved </p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <a href="https://99point9.ca/contents/privacy-policy/">
                            Privacy Policy
                        </a> |
                        <a href="https://99point9.ca/contents/terms-of-use/">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    {renderContacts()}
                    {renderImportantLinks()}
                    {renderCourses()}
                </div>
            </div>
            <hr style={{opacity: 0.1}}
                className="sm-bottom0"
            />
            {renderFooter()}
        </section>
    )
};

export default GeneralFooter;

