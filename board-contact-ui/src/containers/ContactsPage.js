import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchContacts } from '../actions'
import Contact from '../components/Contact'

class ContactsPage extends Component {
    static propTypes = {
        selectedBoardId: PropTypes.string.isRequired,
        contactInfo: PropTypes.object.isRequired,
        loadContacts: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.loadContacts(this.props.selectedBoardId)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedBoardId !== this.props.selectedBoardId) {
            this.props.loadContacts(nextProps.selectedBoardId)
        }
    }

    render() {
        const contacts = this.props.contactInfo.contacts

        if (contacts === undefined) {
            return (<div><h1>gone</h1></div>)
        }

        return (
            <div>
                <h2>Contacts</h2>
                    {contacts.map(contact => (
                        <Contact contact={contact} />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedBoardId: state.selectedBoardId,
        contactInfo: state.contactInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadContacts: (selectedBoardId) => {
            dispatch( fetchContacts(selectedBoardId) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)