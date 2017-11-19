import React from 'react'
import PropTypes from 'prop-types';

const AccountMgmtPage = ({board, enableEditMode}) => {

    return (
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

    )
}

AccountMgmtPage.propTypes = {
    board: PropTypes.object.isRequired,
    enableEditMode: PropTypes.func.isRequired
}

export default AccountMgmtPage