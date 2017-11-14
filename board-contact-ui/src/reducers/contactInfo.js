import { REQUEST_CONTACTS, RECEIVE_CONTACTS, RECEIVE_SINGLE_CONTACT} from '../actions'

const defaultContactInfo = {
    isFetching: false,
    contacts: []
}

const receiveContactInfo = (contacts) => {
    return {
        isFetching: false,
        contacts: contacts
    }
}

const receiveSingleContact = (contacts, receivedContact) => {
    let foundContact = false;

    let newContactList = contacts.map((contact) => {
        if (contact.id === receivedContact.id) {
            foundContact = true
            return receivedContact
        }
        else {
            return contact
        }
    })

    if (!foundContact) {
        newContactList.push(receivedContact)
    }

    return newContactList
}

const contactInfo = (state = defaultContactInfo, action) => {

    switch(action.type) {

        case REQUEST_CONTACTS:
            return Object.assign({}, state, {isFetching: true})

        case RECEIVE_CONTACTS:
            return Object.assign({}, receiveContactInfo(action.contacts))

        case RECEIVE_SINGLE_CONTACT:
            return Object.assign({}, state, {contacts: receiveSingleContact(state.contacts, action.contact)})

        default:
            return state
    }
}

export default contactInfo