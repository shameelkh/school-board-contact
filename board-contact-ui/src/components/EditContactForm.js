import React from 'react'
import PropTypes from 'prop-types'

class EditContactForm extends React.Component {

    constructor(props) {
        super(props)

        let contact = props.contact

        this.state = {
            salutation: (contact.salutation ? contact.salutation : ''),
            firstName: (contact.firstName ? contact.firstName : ''),
            lastName: (contact.lastName ? contact.lastName : ''),
            title: (contact.title ? contact.title : ''),
            email: (contact.email ? contact.email : ''),
            phoneNumber: (contact.phoneNumber ? contact.phoneNumber : ''),
            primary: (contact.primary ? contact.primary : false),
            errors: {},
            touched: {}
        }
    }

    handleBlur = (fieldName) => (e) => {
        this.setState({
          touched: { ...this.state.touched, [fieldName]: true },
        });
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

    handleSalutationChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            salutation: e.target.value,
            errors: { ...this.state.errors, ['salutation']: errorMessage }
        })
    }

    handleFirstNameChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            firstName: e.target.value,
            errors: { ...this.state.errors, ['firstName']: errorMessage }
        })
    }

    handleLastNameChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            lastName: e.target.value,
            errors: { ...this.state.errors, ['lastName']: errorMessage }
        })
    }

    handleTitleChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            title: e.target.value,
            errors: { ...this.state.errors, ['title']: errorMessage }
        })
    }

    handleEmailChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            email: e.target.value,
            errors: { ...this.state.errors, ['email']: errorMessage }
        })
    }

    handlePhoneNumberChange = (e) => {
        let errorMessage = (!/^[0-9]{10}$/.test(e.target.value) ? 'Not a valid phone number' : null)

        this.setState({
            phoneNumber: e.target.value,
            errors: { ...this.state.errors, ['phoneNumber']: errorMessage }
        })
    }

    handlePrimaryChange = (e) => {
        this.setState({
            primary: e.target.value === 'true' ? true : false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.isSubmitEnabled()) {
            return;
        }

        let updatedContact = {
            id: this.props.contact.id,
            boardNumber: this.props.contact.boardNumber,
            salutation: this.state.salutation,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            title: this.state.title,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            primary: this.state.primary
        }

        this.props.saveContact(updatedContact)
        this.props.cancelEditMode()
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col-md-10">
                    <div className="row group-section">
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.salutation}
                                   className={"field-content " + (this.isInvalid('salutation') ? 'input-error' : '')}
                                   onChange={this.handleSalutationChange}
                                   onBlur={this.handleBlur('salutation')}/>
                            <div><span class="field-name">Salutation</span></div>
                            <div><span class="error-msg">{this.isInvalid('salutation') ? this.state.errors.salutation : ''}</span></div>
                        </div>
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.firstName}
                                   className={"field-content " + (this.isInvalid('firstName') ? 'input-error' : '')}
                                   onChange={this.handleFirstNameChange}
                                   onBlur={this.handleBlur('firstName')} />
                            <div><span class="field-name">First Name</span></div>
                            <div><span class="error-msg">{this.isInvalid('firstName') ? this.state.errors.firstName : ''}</span></div>
                        </div>
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.lastName}
                                   className={"field-content " + (this.isInvalid('lastName') ? 'input-error' : '')}
                                   onChange={this.handleLastNameChange}
                                   onBlur={this.handleBlur('lastName')} />
                            <div><span class="field-name">Last Name</span></div>
                            <div><span class="error-msg">{this.isInvalid('lastName') ? this.state.errors.lastName : ''}</span></div>
                        </div>
                    </div>
                    <div className="row group-section">
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.title}
                                   className={"field-content " + (this.isInvalid('title') ? 'input-error' : '')}
                                   onChange={this.handleTitleChange}
                                   onBlur={this.handleBlur('title')} />
                            <div><span class="field-name">Title</span></div>
                            <div><span class="error-msg">{this.isInvalid('title') ? this.state.errors.title : ''}</span></div>
                        </div>
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.email}
                                   className={"field-content " + (this.isInvalid('email') ? 'input-error' : '')}
                                   onChange={this.handleEmailChange}
                                   onBlur={this.handleBlur('email')} />
                            <div><span class="field-name">Email</span></div>
                            <div><span class="error-msg">{this.isInvalid('email') ? this.state.errors.email : ''}</span></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row group-section">
                        <div class="col-md-4">
                            <input type="text"
                                   value={this.state.phoneNumber}
                                   className={"field-content " + (this.isInvalid('phoneNumber') ? 'input-error' : '')}
                                   onChange={this.handlePhoneNumberChange}
                                   onBlur={this.handleBlur('phoneNumber')} />
                            <div><span class="field-name">Phone</span></div>
                            <div><span class="error-msg">{this.isInvalid('phoneNumber') ? this.state.errors.phoneNumber : ''}</span></div>
                        </div>
                        <div class="col-md-4">
                            <select value={(this.state.primary ? 'true' : 'false')}
                                    className={"field-content " + (this.isInvalid('primary') ? 'input-error' : '')}
                                    onChange={this.handlePrimaryChange}
                                    onBlur={this.handleBlur('primary')} >

                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <div><span class="field-name">Primary</span></div>
                            <div><span class="error-msg">{this.isInvalid('primary') ? this.state.errors.primary : ''}</span></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row group-section">
                        <div className="col-md-4">
                            <input  type="button" className="btn btn-danger btn-margin"
                                    value="Cancel"
                                    onClick={() => {this.props.cancelEditMode(this.props.contact.id)} } />
                            <button type="submit"
                                    className="btn btn-success"
                                    disabled={!this.isSubmitEnabled()}>Save</button>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                </form>
            </div>
        )
    }
}

EditContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    saveContact: PropTypes.func.isRequired,
    cancelEditMode: PropTypes.func.isRequired
}

EditContactForm.defaultProps = {
    contact: {}
}

export default EditContactForm