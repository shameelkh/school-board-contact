import React from 'react'
import PropTypes from 'prop-types';

const AccountMgmtPage = ({ board, enableEditMode, notification }) => {

    return (
        <div>
            {notification.isFetching &&
                <span className="notification">Loading Data...</span>
            }

            {notification.failedToFetch &&
                <span className="notification">Could not find board</span>
            }

            {!notification.isFetching && !notification.failedToFetch &&
                <div>
                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.accountOwner}</span>
                            <div><span className="field-name">Account Owner</span></div>
                        </div>
                    </div>
                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.openDate}</span>
                            <div><span className="field-name">Open Date</span></div>
                        </div>
                        <div className="field-section">
                            <span className="field-content">{board.closeDate}</span>
                            <div><span className="field-name">Close Date</span></div>
                        </div>
                    </div>
                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.active ? "Yes" : "No"}</span>
                            <div><span className="field-name">Active</span></div>
                        </div>
                    </div>

                    <button className="btn btn-success" onClick={enableEditMode}>Edit</button>
                </div>
            }
        </div>

    )
}

AccountMgmtPage.propTypes = {
    board: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    enableEditMode: PropTypes.func.isRequired
}

export default AccountMgmtPage