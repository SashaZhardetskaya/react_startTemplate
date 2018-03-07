import React, {Component} from 'react';
import PropTypes from "prop-types";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import RegistrationSteps from './RegistrationSteps';


class OnBoarding extends Component {

    state = {
        formSubmited: 1,
    };

    //Actions
    receiveNextFormNumber = (formSubmited) => {
        this.setState({formSubmited: formSubmited});
    };
    onBasicInfoUpdate = (update) => {
        this.props.onBasicInfoUpdate(update);
    };
    onContactsInfoUpdate = (update) => {
        this.props.onContactsInfoUpdate(update);
    };
    onEducationInfoUpdate = (update) => {
        this.props.onEducationInfoUpdate(update);
    };
    onCircumstancesInfoUpdate = (update) => {
        this.props.onCircumstancesInfoUpdate(update);
    };
    onLsatInfoUpdate = (update) => {
        this.props.onLsatInfoUpdate(update);
    };
    lastFormClickBack = () => {
        this.setState({formSubmited: 4});
    };

    //Renders
    renderForm1 = () => (
        <Form1
            onBasicInfoUpdate = {this.onBasicInfoUpdate}
            onContactsInfoUpdate = {this.onContactsInfoUpdate}
            parentProps = {this.props}
            // receivedValues={this.receiveValues}
            receiveNextFormNumber={this.receiveNextFormNumber}
        />
    );

    renderForm2 = () => (
        <Form2
            onEducationInfoUpdate = {this.onEducationInfoUpdate}
            parentProps = {this.props}
            stepNumber = {this.state.formSubmited}
            // receivedValues={this.receiveValues}
            receiveNextFormNumber={this.receiveNextFormNumber}
        />
    );

    renderForm3 = () => (
        <Form3
            parentProps = {this.props}
            onCircumstancesInfoUpdate={this.onCircumstancesInfoUpdate}
            // receivedValues={this.receiveValues}
            receiveNextFormNumber={this.receiveNextFormNumber}
        />
    );

    renderForm4 = () => (
        <Form4
            onLsatInfoUpdate = {this.onLsatInfoUpdate}
            parentProps = {this.props}
            // receivedValues={this.receiveValues}
            receiveNextFormNumber={this.receiveNextFormNumber}
        />
    );

    renderReviewForm = () => (
        <div>
            <Form1
                isReviewForm
                onBasicInfoUpdate = {this.onBasicInfoUpdate}
                onContactsInfoUpdate = {this.onContactsInfoUpdate}
                parentProps = {this.props}
                // receivedValues={this.receiveValues}
                receiveNextFormNumber={this.receiveNextFormNumber}
            />
            <Form2
                isReviewForm
                onEducationInfoUpdate = {this.onEducationInfoUpdate}
                parentProps = {this.props}
                // receivedValues={this.receiveValues}
                receiveNextFormNumber={this.receiveNextFormNumber}
            />
            <Form3
                isReviewForm
                parentProps = {this.props}
                onCircumstancesInfoUpdate={this.onCircumstancesInfoUpdate}
                // receivedValues={this.receiveValues}
                receiveNextFormNumber={this.receiveNextFormNumber}
            />
            <Form4
                isReviewForm
                onLsatInfoUpdate = {this.onLsatInfoUpdate}
                parentProps = {this.props}
                // receivedValues={this.receiveValues}
                receiveNextFormNumber={this.receiveNextFormNumber}
            />

            <div className="form-wizard">
                <div className="tab-content">
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button className="btn btn-default btn-lg font-16 button-previous"
                                    onClick={this.lastFormClickBack}
                            >
                                <i className="m-icon-swapleft"/>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

    render() {
        return (
            <div
                className="content-wrapper"
                id="content-container">
                <section className="content no-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel no-bg form-onboarding-wrapper"
                                 id="form_wizard_1">
                                <div className="panel-body form no-bg on-board-form no-padding">
                                    <RegistrationSteps
                                        formNumber={this.state.formSubmited}
                                    />
                                    {
                                        this.state.formSubmited === 1
                                        && this.renderForm1()
                                    }
                                    {
                                        this.state.formSubmited === 2
                                        && this.renderForm2()
                                    }
                                    {
                                        this.state.formSubmited === 3
                                        && this.renderForm3()
                                    }
                                    {
                                        this.state.formSubmited === 4
                                        && this.renderForm4()
                                    }
                                    {
                                        this.state.formSubmited === 5
                                        && this.renderReviewForm()
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

OnBoarding.propTypes = {
    onBasicInfoUpdate: PropTypes.func.isRequired,
    onContactsInfoUpdate: PropTypes.func.isRequired,
    onEducationInfoUpdate: PropTypes.func.isRequired,
    onCircumstancesInfoUpdate: PropTypes.func.isRequired,
    onLsatInfoUpdate: PropTypes.func.isRequired,
    infoCircumstances: PropTypes.object.isRequired,
    infoContacts: PropTypes.object.isRequired,
    infoEducation: PropTypes.object.isRequired,
    infoLSAT: PropTypes.object.isRequired,
};



export default OnBoarding;
















