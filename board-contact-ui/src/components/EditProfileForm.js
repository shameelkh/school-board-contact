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
        //TODO: verify this.state can be used outside of constructor
        this.state = {
            street: board.address.street,
            city: board.address.city,
            postalCode: board.address.postalCode,
            phoneNumber: board.phoneNumber,
            website: board.website,
            openTime: board.openTime,
            closeTime: board.closeTime,
            errors: {},
            touched: {}
        }
    }

    handleBlur = (fieldName) => (e) => {
        console.log('onBlur')

        this.setState({
          touched: { ...this.state.touched, [fieldName]: true },
        });

        console.log(this.state.touched)
    }

    isInvalid = (fieldName) => {
        const hasErrors = this.state.errors[fieldName]
        const isTouched = this.state.touched[fieldName]

        return hasErrors && isTouched
    }

    isSubmitEnabled = () => {
        let enableSubmit = true;
        return enableSubmit
    }

    handleStreetChange = (e) => {
        this.setState({
            street: e.target.value
        })

        if (e.target.value.length == 0) {
             this.setState({
                errors: { ...this.state.errors, ['street']: 'Required field' }
             })
        }
        else {
             this.setState({
                errors: { ...this.state.errors, ['street']: undefined}
             })
        }
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })

        if (e.target.value.length == 0) {
             this.setState({
                errors: { ...this.state.errors, ['city']: 'Required field' }
             })
        }
        else {
             this.setState({
                errors: { ...this.state.errors, ['city']: undefined}
             })
        }
    }

    handlePostalCodeChange = (e) => {
        this.setState({
            postalCode: e.target.value
        })

        if (!/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/.test(e.target.value)) {
            this.setState({
                errors: { ...this.state.errors, ['postalCode']: 'Not a valid postal code' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['postalCode']: undefined }
            })
        }
    }

    handlePhoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })

        if (!/[0-9]{10}/.test(e.target.value)) {
            this.setState({
                errors: { ...this.state.errors, ['phoneNumber']: 'Not a valid phone number' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['phoneNumber']: undefined }
            })
        }
    }

    handleWebsiteChange = (e) => {
        this.setState({
            website: e.target.value
        })

        if (!/(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/.test(e.target.value)) {
            this.setState({
                errors: { ...this.state.errors, ['website']: 'Not a valid website' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['website']: undefined }
            })
        }
    }

    handleOpenTimeChange = (e) => {
        this.setState({
            openTime: e.target.value
        })

        if (!/^[0-9]{2}:[0-9]{2}$/.test(e.target.value)) {
            this.setState({
                errors: { ...this.state.errors, ['openTime']: 'Not a open time' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['openTime']: undefined }
            })
        }
    }

    handleCloseTimeChange = (e) => {
        this.setState({
            closeTime: e.target.value
        })

        if (!/^[0-9]{2}:[0-9]{2}$/.test(e.target.value)) {
            this.setState({
                errors: { ...this.state.errors, ['closeTime']: 'Not a close time' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['closeTime']: undefined }
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.isSubmitEnabled()) {
            return;
        }

        let boardSubSection = {
            address: {
                street: this.state.street,
                city: this.state.city,
                postalCode: this.state.postalCode
            },
            phoneNumber: this.state.phoneNumber,
            website: this.state.website,
            openTime: this.state.openTime,
            closeTime: this.state.closeTime
        }

        let updatedBoard = Object.assign({}, this.props.board, boardSubSection)

        this.props.saveBoard(updatedBoard)
        this.props.disableEditMode()
    }

    render() {
        let board = this.props.board

        if (board === null || board === undefined) {
            return <div>Nothing to Show</div>
        }

        return (
            <form onSubmit={this.handleSubmit} className="col-md-10">
                <div className="row group-section">
                    <div class="col-md-4">
                        <input type="text"
                               value={this.state.street}
                               className={"field-content " + (this.isInvalid('street') ? 'input-error' : '')}
                               onChange={this.handleStreetChange}
                               onBlur={this.handleBlur('street')}/>
                        <div><span class="field-name">Street</span></div>
                        <div><span class="error-msg">{this.isInvalid('street') ? this.state.errors.street : ''}</span></div>
                    </div>
                    <div class="col-md-4">
                        <input type="text"
                               value={this.state.city}
                               className={"field-content " + (this.isInvalid('city') ? 'input-error' : '')}
                               onChange={this.handleCityChange}
                               onBlur={this.handleBlur('city')} />
                        <div><span class="field-name">City</span></div>
                        <div><span class="error-msg">{this.isInvalid('city') ? this.state.errors.city : ''}</span></div>
                    </div>
                    <div class="col-md-4">
                        <input type="text"
                               className={"field-content " + (this.isInvalid('postalCode') ? 'input-error' : '')}
                               value={this.state.postalCode}
                               onChange={this.handlePostalCodeChange}
                               onBlur={this.handleBlur('postalCode')}/>
                        <div><span class="field-name">Postal Code</span></div>
                        <div><span className="error-msg">{this.isInvalid('postalCode') ? this.state.errors.postalCode : ''}</span></div>
                    </div>
                </div>

                <div className="row group-section">
                    <div class="col-md-4">
                        <input type="number"
                                className={"field-content " + (this.isInvalid('phoneNumber') ? 'input-error' : '')}
                                value={this.state.phoneNumber}
                                onChange={this.handlePhoneNumberChange}
                                onBlur={this.handleBlur('phoneNumber')}/>
                        <div><span class="field-name">Phone</span></div>
                        <div><span class="error-msg">{this.isInvalid('phoneNumber') ? this.state.errors.phoneNumber : ''}</span></div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="field-content"
                                className={"field-content " + (this.isInvalid('website') ? 'input-error' : '')}
                                value={this.state.website}
                                onChange={this.handleWebsiteChange}
                                onBlur={this.handleBlur('website')}/>
                        <div><span class="field-name">Website</span></div>
                        <div><span class="error-msg">{this.isInvalid('website') ? this.state.errors.website : ''}</span></div>
                    </div>
                </div>

                <div className="row group-section">
                     <div class="col-md-4">
                        <input type="text" class="field-content"
                               className={"field-content " + (this.isInvalid('openTime') ? 'input-error' : '')}
                               value={this.state.openTime}
                               onChange={this.handleOpenTimeChange}
                               onBlur={this.handleBlur('openTime')}/>
                        <div><span class="field-name">Open Time</span></div>
                        <div><span class="error-msg">{this.isInvalid('openTime') ? this.state.errors.openTime : ''}</span></div>
                     </div>
                     <div class="col-md-4">
                        <input type="text" class="field-content"
                               className={"field-content " + (this.isInvalid('closeTime') ? 'input-error' : '')}
                               value={this.state.closeTime}
                               onChange={this.handleCloseTimeChange}
                               onBlur={this.handleBlur('closeTime')} />
                        <div><span class="field-name">Close Time</span></div>
                        <div><span class="error-msg">{this.isInvalid('closeTime') ? this.state.errors.closeTime : ''}</span></div>
                     </div>
                </div>

                <div className="row group-section">
                    <div className="col-md-4">
                        <input  type="button" className="btn btn-danger btn-margin"
                                value="Cancel"
                                onClick={this.props.disableEditMode} />
                        <button type="submit"
                                className="btn btn-success"
                                disabled={!this.isSubmitEnabled()}>Save</button>
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </form>
        )
    }
}

EditProfileForm.propTypes = {
    board: PropTypes.object.isRequired,
    saveBoard: PropTypes.func.isRequired,
    disableEditMode: PropTypes.func.isRequired
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