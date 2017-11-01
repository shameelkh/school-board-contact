import React from 'react'

class Contact extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isExpanded: false
        }
    }

    handleClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {
        let contact = this.props.contact

        console.log("rendering contact => " + contact.id)

        return (
            <div>
                {this.props.isExpanded &&
                    <div className="contact-section">
                        <div className="group-section-contact" onClick={() => {this.props.handleExpand(contact.id, this.props.isExpanded)}}>
                            <div class="field-section-contact">
                                <span class="field-content">{contact.salutation + ' ' + contact.firstName + ' ' + contact.lastName}</span>
                                <div><span class="field-name">Name</span></div>
                            </div>
                        </div>
                        <div className="group-section-contact">
                            <div class="field-section-contact">
                                <span class="field-content">{contact.title}</span>
                                <div><span class="field-name">Title</span></div>
                            </div>
                             <div class="field-section-contact">
                                <span class="field-content">{contact.email}</span>
                                <div><span class="field-name">Email</span></div>
                            </div>
                        </div>
                        <div className="group-section-contact">
                            <div class="field-section-contact">
                                <span class="field-content">{contact.phoneNumber}</span>
                                <div><span class="field-name">Phone</span></div>
                            </div>
                            <div class="field-section-contact">
                                <span class="field-content">{contact.primary ? 'Yes' : 'No'}</span>
                                <div><span class="field-name">Primary</span></div>
                            </div>
                        </div>

                        <button className="btn btn-success"
                                onClick={() => {this.props.enableEditMode(contact.id)}}>Edit</button>
                    </div>
                }

                {!this.props.isExpanded &&
                    <div className="contact-section">
                        <div className="group-section-contact" onClick={() => {this.props.handleExpand(contact.id, this.props.isExpanded)}}>
                            <div class="field-section-contact">
                                <span class="field-content">{contact.salutation + ' ' + contact.firstName + ' ' + contact.lastName}</span>
                                <div><span class="field-name">Name</span></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Contact