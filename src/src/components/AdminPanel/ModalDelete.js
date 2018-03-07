import React from 'react';
import PropTypes from "prop-types";

const ModalDelete = ({ hideModalDelete, showModalDeletePart, removeChapterConfirmation, partId}) => {
    return(
        <div
            className={`bootbox modal fade bootbox-confirm ${showModalDeletePart && "in"}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showModalDeletePart ? "block": "none",
                paddingRight: 15
            }}
        >
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            type="button"
                            className="bootbox-close-button close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            style={{marginTop: -10}}
                            onClick={() => hideModalDelete()}
                        >
                            ×
                        </button>
                        <div className="bootbox-body">
                            <div className="sp-10 font-16">
                                Do you really want to remove this chapter?
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            data-bb-handler="cancel"
                            type="button"
                            className="btn btn-default"
                            onClick={() => hideModalDelete()}
                        >
                            CANCEL
                        </button>
                        <button
                            data-bb-handler="confirm"
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                                {
                                    hideModalDelete();
                                    removeChapterConfirmation(partId);
                                }
                            }
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ModalDelete.propTypes = {
    showModalDeletePart: PropTypes.bool.isRequired,
    hideModalDelete: PropTypes.func.isRequired,
    removeChapterConfirmation: PropTypes.func.isRequired,
    partId: PropTypes.any.isRequired
};

export default ModalDelete;