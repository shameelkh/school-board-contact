import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchContacts, saveContact } from '../actions'
import Contact from '../components/Contact'
import EditContactForm from '../components/EditContactForm'

class ContactsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: {},
            inEditMode: {},
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    handleExpand = (contactId, isExpanded) => {
        //isExpanded: Object.assign({}, this.state.isExpanded, {[contactId]: !isExpanded})

        this.setState({
           isExpanded: {[contactId] : !isExpanded}
        })
    }

    enableEditMode = (contactId) => {
        this.setState({
            inEditMode: {[contactId] : true}
        })
    }

    cancelEditMode = () => {
        this.setState({
            inEditMode: {}
        })
    }

    render() {
        const contacts = this.props.contactInfo.contacts

        if (contacts === undefined) {
            return (<div><h1>No Contacts</h1></div>)
        }

        return (
            <div>
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
        contactInfo: state.contactInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveContact: (updatedContact) => {
            dispatch( saveContact(updatedContact) )
        }
    }
}


ContactsPage.propTypes = {
    contactInfo: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)