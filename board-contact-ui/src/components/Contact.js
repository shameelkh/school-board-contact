import React from 'react'

const Contact = ({contact}) => {
    return (
        <div className="contact-section">
            <div className="group-section-contact">
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
                    <span class="field-content">{contact.isPrimary ? 'Yes' : 'No'}</span>
                    <div><span class="field-name">Primary</span></div>
                </div>
            </div>
        </div>
    )
}

export default Contact