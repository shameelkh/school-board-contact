import React from 'react'
import PropTypes from 'prop-types'


const Contact = ({contact, isExpanded, handleExpand, enableEditMode}) => {

    return (
        <div>
            {isExpanded &&
                <div className="contact-section">
                    <div className="group-section-contact" onClick={() => {handleExpand(contact.id, isExpanded)}}>
                        <div className="field-section-contact">
                            <span className="field-content">{contact.salutation + ' ' + contact.firstName + ' ' + contact.lastName}</span>
                            <div><span className="field-name">Name</span></div>
                        </div>
                    </div>
                    <div className="group-section-contact">
                        <div className="field-section-contact">
                            <span className="field-content">{contact.title}</span>
                            <div><span className="field-name">Title</span></div>
                        </div>
                         <div className="field-section-contact">
                            <span className="field-content">{contact.email}</span>
                            <div><span className="field-name">Email</span></div>
                        </div>
                    </div>
                    <div className="group-section-contact">
                        <div className="field-section-contact">
                            <span className="field-content">{contact.phoneNumber}</span>
                            <div><span className="field-name">Phone</span></div>
                        </div>
                        <div className="field-section-contact">
                            <span className="field-content">{contact.primary ? 'Yes' : 'No'}</span>
                            <div><span className="field-name">Primary</span></div>
                        </div>
                    </div>

                    <button className="btn btn-success"
                            onClick={() => {enableEditMode(contact.id)}}>Edit</button>
                </div>
            }

            {!isExpanded &&
                <div className="contact-section">
                    <div className="group-section-contact" onClick={() => {handleExpand(contact.id, isExpanded)}}>
                        <div className="field-section-contact">
                            <span className="field-content">{contact.salutation + ' ' + contact.firstName + ' ' + contact.lastName}</span>
                            <div><span className="field-name">Name</span></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    handleExpand: PropTypes.func.isRequired,
    enableEditMode: PropTypes.func.isRequired
}

export default Contact