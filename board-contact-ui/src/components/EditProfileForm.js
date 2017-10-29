import React from 'react'

const EditProfileForm = ({boardInfo}) => {

    let board = boardInfo.board

    if (board === null || board === undefined) {
        return <div>Nothing to Show</div>
    }

    return (
        <form>
            <div className="group-section">
                <div class="field-section">
                    <input type="text" value={board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode} />
                    <div><span class="field-name">Address</span></div>
                </div>
            </div>

            <div className="group-section">
                <div class="field-section">
                    <input type="text" class="field-content" value={board.phoneNumber} />
                    <div><span class="field-name">Phone</span></div>
                </div>
                <div class="field-section">
                    <input type="text" class="field-content" value={board.website} />
                    <div><span class="field-name">Website</span></div>
                </div>
            </div>

            <div className="group-section">
                 <div class="field-section">
                    <input type="text" class="field-content" value={board.openTime} />
                    <div><span class="field-name">Open Time</span></div>
                 </div>
                 <div class="field-section">
                    <input type="text" class="field-content" value={board.closeTime} />
                    <div><span class="field-name">Close Time</span></div>
                 </div>
            </div>
        </form>
    )
}

export default EditProfileForm