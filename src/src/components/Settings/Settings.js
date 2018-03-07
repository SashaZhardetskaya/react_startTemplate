import React, {Component} from 'react';
import PropTypes from "prop-types";
import SettingsFormBig from './SettingsFormBig'
import SettingsFormSide from "./SettingsFormSide";

class Settings extends Component {

    //Actions
    onBasicInfoUpdate = (update) => {
        this.props.onBasicInfoUpdate(update);
    };
    onContactsInfoUpdate = (update) => {
        this.props.onContactsInfoUpdate(update);
    };

    //Renders
    renderHeader = () => (
        <div className="bg-light lter b-b wrapper-md">
            <div className="row">
                <div className="col-sm12 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">
                        Settings
                    </h1>
                    <small className="text-muted">
                        Manage your profile info
                    </small>
                </div>
            </div>
        </div>
    );

    render() {

        return (
            <div className="content-wrapper"
                 id="content-container"
            >
                {this.renderHeader()}
                <section className="content">
                    <div className="row">
                        <div className="col-sm-8">
                            <SettingsFormBig
                                parentProps = {this.props}
                                onBasicInfoUpdate = {this.onBasicInfoUpdate}
                                onContactsInfoUpdate = {this.onContactsInfoUpdate}
                            />
                        </div>
                        <div className="col-sm-4">
                            <SettingsFormSide
                                parentProps = {this.props}
                                // onInfoUpdate = {this.onInfoUpdate}
                                onBasicInfoUpdate = {this.onBasicInfoUpdate}
                                onContactsInfoUpdate = {this.onContactsInfoUpdate}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


Settings.propTypes = {
    onBasicInfoUpdate: PropTypes.func.isRequired,
    onContactsInfoUpdate: PropTypes.func.isRequired,
    infoContacts: PropTypes.object.isRequired,
};

export default Settings;