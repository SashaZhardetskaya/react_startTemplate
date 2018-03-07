import React from 'react';
import PropTypes from "prop-types";


const RegistrationSteps = ({formNumber}) => {

    //Renders
    const renderStep1 = () => (
        <li className={
            formNumber === 1
                ? "active"
                : "done"
        }
        >
            <a className="step">
                    <span className="wizard_info">
                       <span className="number">1</span>
                       <span className="desc">
                           <i className="zmdi zmdi-check"/>
                       </span>
                    </span>
                <span className="wizard_title">
                        Basic Info
                    </span>
            </a>
        </li>
    );
    const renderStep2 = () => (
        <li
            className={
                formNumber === 2
                    ? "active"
                    : (formNumber > 2 ? "done" : "")
            }
        >
            <a className="step">
                    <span className="wizard_info">
                       <span className="number">2</span>
                       <span className="desc">
                           <i className="zmdi zmdi-check"/>
                       </span>
                    </span>
                <span className="wizard_title">
                        Education
                    </span>
            </a>
        </li>
    );
    const renderStep3 = () => (
        <li
            className={
                formNumber === 3
                    ? "active"
                    : (formNumber > 3 ? "done" : '')
            }
        >
            <a className="step active">
                    <span className="wizard_info">
                       <span className="number">3</span>
                       <span className="desc">
                           <i className="zmdi zmdi-check"/>
                       </span>
                    </span>
                <span className="wizard_title">
                        Circumstances
                    </span>
            </a>
        </li>
    );
    const renderStep4 = () => (
        <li
            className={
                formNumber === 4
                    ? "active"
                    : (formNumber > 4 ? "done" : '')
            }
        >
            <a className="step">
                    <span className="wizard_info">
                       <span className="number">4</span>
                       <span className="desc">
                           <i className="zmdi zmdi-check"/>
                       </span>
                    </span>
                <span className="wizard_title">
                        Official Test
                    </span>
            </a>
        </li>
    );
    const renderStep5 = () => (
        <li
            className={
                formNumber === 5
                    ? "active"
                    : ""
            }
        >
            <a className="step">
                    <span className="wizard_info">
                       <span className="number">5</span>
                       <span className="desc">
                           <i className="zmdi zmdi-check"/>
                       </span>
                    </span>
                <span className="wizard_title">
                        Review
                    </span>
            </a>
        </li>
    );

    return (
        <ul className="nav nav-pills nav-justified steps registration-steps">
            {renderStep1()}
            {renderStep2()}
            {renderStep3()}
            {renderStep4()}
            {renderStep5()}
        </ul>
    )
};

RegistrationSteps.propTypes = {
    formNumber: PropTypes.number.isRequired,
};


export default RegistrationSteps;
















