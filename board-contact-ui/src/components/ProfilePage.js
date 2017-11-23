import React from 'react'
import PropTypes from 'prop-types';

const ProfilePage = ({ board, enableEditMode, notification, isSavingData }) => {

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
                    
                    <br/><br/>
                    {isSavingData &&
                        <span className="notification">Saving...</span>
                    }

                    {notification.failedToSave && 
                        <span className="notification">Failed To Save</span>
                    }
                </div>
            }
        </div>
    )
}

ProfilePage.propTypes = {
    board: PropTypes.object.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    notification: PropTypes.object.isRequired,
    isSavingData: PropTypes.bool.isRequired
}

export default ProfilePage;