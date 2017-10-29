import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfilePage = ({boardInfo}) => {
    let board = boardInfo.board

    if (board === null || board === undefined) {
        return <div>Nothing to Show</div>
    }

    return (
        <div>
            <div className="group-section">
                <div class="field-section">
                    <span class="field-content">{board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode}</span>
                    <div><span class="field-name">Address</span></div>
                </div>
            </div>

            <div className="group-section">
                <div class="field-section">
                    <span class="field-content">{board.phoneNumber}</span>
                    <div><span class="field-name">Phone</span></div>
                </div>
                <div class="field-section">
                    <span class="field-content">{board.website}</span>
                    <div><span class="field-name">Website</span></div>
                </div>
            </div>

            <div className="group-section">
                 <div class="field-section">
                    <span class="field-content">{board.openTime}</span>
                    <div><span class="field-name">Open Time</span></div>
                 </div>
                 <div class="field-section">
                    <span class="field-content">{board.closeTime}</span>
                    <div><span class="field-name">Close Time</span></div>
                 </div>
            </div>

            <Link className="btn btn-success" to={'/profile/edit'}>Edit</Link>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        boardInfo: state.boardInfo
    }
}



export default connect(mapStateToProps, null)(ProfilePage);