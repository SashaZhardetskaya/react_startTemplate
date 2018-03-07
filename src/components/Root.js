import React, {Component} from 'react';

import Autorization from "./Auth/Autorization";
import LoadingOverlay from "./Common/LoadingOverlay";
import App from "./App";

/**
 *
 * @param authorized
 */
class Root extends Component {
    renderContent = () => {
        const {
            auth: {authorized},
            sidebar
        } = this.props;

        if (authorized) {
            return (
                <App {...sidebar} />

            );
        }

        return (
            <Autorization pathname={this.props.location.pathname}/>
        );
    };

    render() {

        if (!this.props._persist.rehydrated) {
            return null;
        }
        
        return (
            <div>

                {this.renderContent()}
                <LoadingOverlay/>
            </div>
        );
    }
}

Root.propTypes = {};

export default Root;
