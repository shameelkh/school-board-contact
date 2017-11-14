import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveContact, addContact } from '../actions'
import Contact from '../components/Contact'
import EditContactForm from '../components/EditContactForm'

class ContactsPageContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: {},
            inEditMode: {},
            addingNewContact: false,
        }
    }

    handleExpand = (contactId, isExpanded) => {
        let contactInEditMode = false

        // can not expand/collapse when a contact is in edit mode
        Object.keys(this.state.inEditMode).forEach((key) => {
            if(this.state.inEditMode[key]) {
                contactInEditMode = true
            }
        })

        if(contactInEditMode) {
            alert("Please cancel edit mode for contact.")
            return
        }

        this.setState({
           isExpanded: {[contactId] : !isExpanded}
        })
    }

    handleAddButton = () => {
        this.setState({ addingNewContact: true })
    }

    enableEditMode = (contactId) => {
        this.setState({
            inEditMode: {[contactId] : true}
        })
    }

    cancelEditMode = () => {
        this.setState({
            inEditMode: {},
            addingNewContact: false
        })
    }

    render() {
        const contacts = this.props.contactInfo.contacts

        if (contacts === undefined) {
            return (<div><h1>No Contacts</h1></div>)
        }

        return (
            <div>
                {!this.state.addingNewContact &&
                    <button className="btn btn-success add-contact-btn"
                        onClick={this.handleAddButton}>Add</button>
                }

                {this.state.addingNewContact &&
                    <div className="group-section-contact">
                        <div class="field-section-contact">
                            <span class="field-content">New Contact</span>
                        </div>

                        <EditContactForm contact={ {boardNumber: this.props.boardNumber} }
                                     cancelEditMode={this.cancelEditMode}
                                     saveContact={this.props.handleAddContact} />
                    </div>
                }

                {contacts.map(contact => (
                    <div>
                        {!this.state.inEditMode[contact.id] &&
                            <Contact contact={contact}
                                     enableEditMode={this.enableEditMode}
                                     isExpanded={this.state.isExpanded[contact.id]}
                                     handleExpand={this.handleExpand}/>
                        }

                        {this.state.inEditMode[contact.id] &&
                            <EditContactForm contact={contact}
                                             cancelEditMode={this.cancelEditMode}
                                             saveContact={this.props.handleSaveContact}/>
                        }
                    </div>


                ))}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contactInfo: state.contactInfo,
        boardNumber: (state.boardInfo.board ? state.boardInfo.board.boardNumber : 0)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveContact: (updatedContact) => {
            dispatch( saveContact(updatedContact) )
        },

        handleAddContact: (newContact) => {
            dispatch( addContact(newContact) )
        }
    }
}

ContactsPageContainer.propTypes = {
    contactInfo: PropTypes.object.isRequired,
    boardNumber: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPageContainer)