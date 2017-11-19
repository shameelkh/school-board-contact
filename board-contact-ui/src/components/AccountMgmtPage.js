import React from 'react'
import PropTypes from 'prop-types';

const AccountMgmtPage = ({board, enableEditMode}) => {

    return (
        <div>
            <div className="group-section">
                <div class="field-section">
                    <span class="field-content">{board.accountOwner}</span>
                    <div><span class="field-name">Account Owner</span></div>
                </div>
            </div>
            <div className="group-section">
                <div class="field-section">
                    <span class="field-content">{board.openDate}</span>
                    <div><span class="field-name">Open Date</span></div>
                </div>
                <div class="field-section">
                    <span class="field-content">{board.closeDate}</span>
                    <div><span class="field-name">Close Date</span></div>
                </div>
            </div>
            <div className="group-section">
                <div class="field-section">
                    <span class="field-content">{board.active ? "Yes" : "No"}</span>
                    <div><span class="field-name">Active</span></div>
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