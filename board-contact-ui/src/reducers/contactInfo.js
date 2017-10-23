import { REQUEST_CONTACTS, RECEIVE_CONTACTS} from '../actions'

const defaultContactInfo = {
    isFetching = false,
    contacts = []
}

const contactInfo = (state = defaultContactInfo, action) => {

    switch(action.type) {

        case REQUEST_CONTACTS:
            return Object.assign({}, state, {isFetching: true})

        case RECEIVE_CONTACTS:
            return {
                isFetching: false,
                contacts: action.contacts
            }

        default:
            return defaultContactInfo
    }
}

export default contactInfo