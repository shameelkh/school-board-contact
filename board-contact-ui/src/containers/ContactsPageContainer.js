import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveContact, addContact } from '../actions'
import ContactsPage from '../components/ContactsPage'

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
        let contactInfo = this.props.contactInfo
        let contacts = contactInfo.contacts
        let boardNumber = (this.props.selectedBoardId ? this.props.selectedBoardId : 0)
        
        return (
            <ContactsPage
                contacts={contacts}
                isFetching={contactInfo.isFetching}
                inEditMode={this.state.inEditMode}
                enableEditMode={this.enableEditMode}
                isExpanded={this.state.isExpanded}
                handleExpand={this.handleExpand}
                addingNewContact={this.state.addingNewContact}
                handleAddButton={this.handleAddButton}
                handleAddContact={this.props.handleAddContact}
                boardNumber={this.props.selectedBoardId}
                cancelEditMode={this.cancelEditMode}
                handleSaveContact={this.props.handleSaveContact} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contactInfo: state.contactInfo,
        selectedBoardId: state.selectedBoardId
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPageContainer)