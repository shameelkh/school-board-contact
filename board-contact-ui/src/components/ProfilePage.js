import React from 'react'
import PropTypes from 'prop-types';

const ProfilePage = ({ board, enableEditMode, isFetching }) => {

    return (
        <div>
            {isFetching &&
                <span className="loading">Loading Data...</span>
            }

            {!isFetching &&
                <div>
                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode}</span>
                            <div><span className="field-name">Address</span></div>
                        </div>
                    </div>

                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.phoneNumber}</span>
                            <div><span className="field-name">Phone</span></div>
                        </div>
                        <div className="field-section">
                            <span className="field-content">{board.website}</span>
                            <div><span className="field-name">Website</span></div>
                        </div>
                    </div>

                    <div className="group-section">
                        <div className="field-section">
                            <span className="field-content">{board.openTime}</span>
                            <div><span className="field-name">Open Time</span></div>
                        </div>
                        <div className="field-section">
                            <span className="field-content">{board.closeTime}</span>
                            <div><span className="field-name">Close Time</span></div>
                        </div>
                    </div>

                    <button className="btn btn-success" onClick={enableEditMode}>Edit</button>
                </div>
            }
        </div>
    )
}

ProfilePage.propTypes = {
    board: PropTypes.object.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default ProfilePage;