import React from 'react'

class EditContactForm extends React.Component {

    constructor(props) {
        super(props)

        let contact = props.contact

        this.state = {
            salutation: contact.salutation,
            firstName: contact.firstName,
            lastName: contact.lastName,
            title: contact.title,
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            isPrimary: contact.isPrimary,
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

    handleSalutationChange = (e) => {
        this.setState({
            salutation: e.target.value
        })

        if (e.target.value.length === 0) {
            this.setState({
                errors: { ...this.state.errors, ['salutation']: 'Required field' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['salutation']: undefined }
            })
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })

        if (e.target.value.length === 0) {
            this.setState({
                errors: { ...this.state.errors, ['firstName']: 'Required field' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['firstName']: undefined }
            })
        }
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        })

        if (e.target.value.length === 0) {
            this.setState({
                errors: { ...this.state.errors, ['lastName']: 'Required field' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['lastName']: undefined }
            })
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })

        if (e.target.value.length === 0) {
            this.setState({
                errors: { ...this.state.errors, ['title']: 'Required field' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['title']: undefined }
            })
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })

        if (e.target.value.length === 0) {
            this.setState({
                errors: { ...this.state.errors, ['email']: 'Required field' }
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, ['email']: undefined }
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

    handleIsPrimaryChange = (e) => {
        this.setState({
            isPrimary: e.target.value === 'true' ? true : false
        })
    }

    render() {
        return (
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
                        <select value={(this.state.isPrimary ? 'true' : 'false')}
                                className={"field-content " + (this.isInvalid('isPrimary') ? 'input-error' : '')}
                                onChange={this.handleIsPrimaryChange}
                                onBlur={this.handleBlur('isPrimary')} >

                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <div><span class="field-name">Primary</span></div>
                        <div><span class="error-msg">{this.isInvalid('isPrimary') ? this.state.errors.isPrimary : ''}</span></div>
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
        )
    }
}

export default EditContactForm