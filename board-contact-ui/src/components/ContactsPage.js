import React from 'react'
import PropTypes from 'prop-types';
import Contact from './Contact'
import EditContactForm from './EditContactForm'

const ContactsPage = (props) => {
    return (
        <div>
            {!props.addingNewContact &&
                <button className="btn btn-success add-contact-btn"
                    onClick={props.handleAddButton}>Add</button>
            }

            {props.addingNewContact &&
                <div className="group-section-contact">
                    <div className="field-section-contact">
                        <span className="field-content">New Contact</span>
                    </div>

                    <EditContactForm 
                        contact={{ boardNumber: props.boardNumber }}
                        cancelEditMode={props.cancelEditMode}
                        saveContact={props.handleAddContact} />
                </div>
            }

            {props.contacts.map(contact => (
                <div key={contact.id}>
                    {!props.inEditMode[contact.id] &&
                        <Contact
                            contact={contact}
                            enableEditMode={props.enableEditMode}
                            isExpanded={props.isExpanded[contact.id] ? true : false}
                            handleExpand={props.handleExpand} />
                    }

                    {props.inEditMode[contact.id] &&
                        <EditContactForm
                            contact={contact}
                            cancelEditMode={props.cancelEditMode}
                            saveContact={props.handleSaveContact} />
                    }
                </div>
            ))}
        </div>
    )
}

ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired,
    inEditMode: PropTypes.object.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    handleExpand: PropTypes.func.isRequired,
    addingNewContact: PropTypes.bool.isRequired,
    handleAddButton: PropTypes.func.isRequired,
    boardNumber: PropTypes.number.isRequired,
    cancelEditMode: PropTypes.func.isRequired,
    handleSaveContact: PropTypes.func.isRequired
}

export default ContactsPage