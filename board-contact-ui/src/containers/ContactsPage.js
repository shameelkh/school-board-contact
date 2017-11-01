import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchContacts } from '../actions'
import Contact from '../components/Contact'

class ContactsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpandedList: {}
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    handleExpand = (contactId, isExpanded) => {
        //isExpandedList: Object.assign({}, this.state.isExpandedList, {[contactId]: !isExpanded})

        this.setState({
           isExpandedList: {[contactId] : !isExpanded}
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
                    <Contact contact={contact}
                             isExpanded={this.state.isExpandedList[contact.id]}
                             handleExpand={this.handleExpand}/>
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
    }
}

ContactsPage.propTypes = {
    contactInfo: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)