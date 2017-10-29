import React from 'react'
import PropTypes from 'prop-types';

class EditProfileForm extends React.Component {

    constructor(props) {
        super(props)
        this.updateStateWithBoard(props.board)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.board !== this.props.board) {
            this.updateStateWithBoard(nextProps.board)
        }
    }

    updateStateWithBoard = (board) => {
        this.state = {
            street: board.address.street,
            city: board.address.city,
            postalCode: board.address.postalCode,
            phoneNumber: board.phoneNumber,
            website: board.website,
            openTime: board.openTime,
            closeTime: board.closeTime
        }
    }

    handleStreetChange = (e) => {
        this.setState({
            street: e.target.value
        })
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handlePostalCodeChange = (e) => {
        this.setState({
            postalCode: e.target.value
        })
    }

    handlePhoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleWebsiteChange = (e) => {
        this.setState({
            website: e.target.value
        })
    }

    handleOpenTimeChange = (e) => {
        this.setState({
            openTime: e.target.value
        })
    }

    handleCloseTimeChange = (e) => {
        this.setState({
            closeTime: e.target.value
        })
    }

    render() {
        let board = this.props.board

        if (board === null || board === undefined) {
            return <div>Nothing to Show</div>
        }

        return (
            <form>
                <div className="group-section">
                    <div class="field-section">
                        <input type="text" value={this.state.street} onChange={this.handleStreetChange}/>
                        <div><span class="field-name">Street</span></div>
                    </div>
                    <div class="field-section">
                        <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                        <div><span class="field-name">City</span></div>
                    </div>
                    <div class="field-section">
                        <input type="text" value={this.state.postalCode} onChange={this.handlePostalCodeChange} />
                        <div><span class="field-name">Postal Code</span></div>
                    </div>
                </div>

                <div className="group-section">
                    <div class="field-section">
                        <input type="text"
                                class="field-content"
                                value={this.state.phoneNumber}
                                onChange={this.handlePhoneNumberChange}/>
                        <div><span class="field-name">Phone</span></div>
                    </div>
                    <div class="field-section">
                        <input type="text" class="field-content" value={this.state.website} onChange={this.handleWebsiteChange} />
                        <div><span class="field-name">Website</span></div>
                    </div>
                </div>

                <div className="group-section">
                     <div class="field-section">
                        <input type="text" class="field-content" value={this.state.openTime} onChange={this.handleOpenTimeChange} />
                        <div><span class="field-name">Open Time</span></div>
                     </div>
                     <div class="field-section">
                        <input type="text" class="field-content" value={this.state.closeTime} onChange={this.handleCloseTimeChange}/>
                        <div><span class="field-name">Close Time</span></div>
                     </div>
                </div>
            </form>
        )
    }
}

EditProfileForm.propTypes = {
    board: PropTypes.object.isRequired
}

EditProfileForm.defaultProps = {
  board: {
    address: {
       street: '',
       city: '',
       postalCode: ''
    },
    phoneNumber: undefined,
    website: '',
    openTime: '',
    closeTime: ''
  }
};

export default EditProfileForm