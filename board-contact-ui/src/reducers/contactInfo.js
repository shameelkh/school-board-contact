import { REQUEST_CONTACTS, RECEIVE_CONTACTS} from '../actions'

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

const contactInfo = (state = defaultContactInfo, action) => {

    switch(action.type) {

        case REQUEST_CONTACTS:
            return Object.assign({}, state, {isFetching: true})

        case RECEIVE_CONTACTS:
            return Object.assign({}, receiveContactInfo(action.contacts))

        default:
            return state
    }
}

export default contactInfo