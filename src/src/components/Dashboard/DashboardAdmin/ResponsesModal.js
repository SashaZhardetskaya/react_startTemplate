import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class ResponsesModal extends Component {

    //Renders
    renderUsers = (usersResponses) => (
        usersResponses.map((item, index) => (
            <tr key={index}>
                <td>
                    <Link to="chat">
                        {item.name}
                    </Link>
                </td>
                <td>{item.course}</td>
                <td>{item.time}</td>
            </tr>
        ))
    );

    render() {
        return (
            <div
                className="modal fade"
                id="ResponsesModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body no-padding">
                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <td>
                                        <i className="zmdi zmdi-account"/>
                                        Name
                                    </td>
                                    <td>
                                        <i className="zmdi zmdi-library"/>
                                        Course
                                    </td>
                                    <td
                                        style={{width: 80}}
                                    >
                                        <i className="zmdi zmdi-time"/>
                                        Time
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.renderUsers(this.props.usersResponses)}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ResponsesModal.propTypes = {
    usersResponses: PropTypes.array.isRequired,
};

export default ResponsesModal;