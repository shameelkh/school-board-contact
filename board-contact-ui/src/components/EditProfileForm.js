import React from 'react'
import PropTypes from 'prop-types';

class EditProfileForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            street: '',
            city: '',
            postalCode: '',
            phoneNumber: undefined,
            website: '',
            openTime: '',
            closeTime: ''
        }
    }

    render() {
        let board = this.props.boardInfo.board

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
}

EditProfileForm.propTypes = {
    boardInfo: PropTypes.object.isRequired
}

export default EditProfileForm