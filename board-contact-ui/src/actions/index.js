import fetch from 'isomorphic-fetch'
import * as ERROR from './errors'

export const UPDATE_SELECTED_BOARD_ID = 'UPDATE_SELECTED_BOARD_ID'

export const REQUEST_BOARD = 'REQUEST_BOARD'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const FETCH_BOARD = 'FETCH_BOARD'

export const SAVE_BOARD = 'SAVE_BOARD'

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS'
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
export const RECEIVE_SINGLE_CONTACT = 'RECEIVE_SINGLE_CONTACT'
export const FETCH_CONTACTS = 'FETCH_CONTACTS'

export const SAVE_CONTACT = 'SAVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'

const BASE_API = 'http://localhost:8080'

export const updateSelectedBoardId = (selectedBoardId) => {
    return {
        type: UPDATE_SELECTED_BOARD_ID,
        selectedBoardId
    }
}

export const requestBoard = (selectedBoardId) => {
    return {
        type: REQUEST_BOARD,
        selectedBoardId
    }
}

export const receiveBoard = (board, errors = []) => {
    return {
        type: RECEIVE_BOARD,
        board,
        errors
    }
}

export const fetchBoard = (boardId) => {
    return (dispatch, getState) => {
        dispatch(requestBoard(boardId))

        fetch(BASE_API + '/school-board/' + boardId)
            .then(response => response.json())
            .then(board => dispatch(receiveBoard(board)))
            .catch(error => {
                dispatch(receiveBoard({}, [ERROR.FETCHING_BOARD]))
            })
    }
}

export const requestContacts = (selectedBoardId) => {
    return {
        type: REQUEST_CONTACTS,
        selectedBoardId
    }
}

export const receiveContacts = (contacts, errors = []) => {
    return {
        type: RECEIVE_CONTACTS,
        contacts,
        errors
    }
}

export const receiveContact = (contact) => {
    return {
        type: RECEIVE_SINGLE_CONTACT,
        contact
    }
}

export const fetchContacts = (boardId) => {
    return (dispatch) => {
        dispatch(requestContacts(boardId))

        fetch(BASE_API + '/contacts/' + boardId)
            .then(response => response.json())
            .then(contacts => dispatch(receiveContacts(contacts)))
            .catch(error => {
                dispatch(receiveContacts([], [ERROR.FETCHING_CONTACT]))
            })
    }
}

export const saveBoard = (updatedBoard) => {
    return (dispatch, getState) => {

        fetch(BASE_API + '/school-board', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBoard)
        })
            .then(response => response.json())
            .then(board => dispatch(receiveBoard(board)))
            .catch(error => {
                dispatch(receiveBoard(getState().boardInfo.board, [ERROR.SAVING_BOARD]))
            })
    }
}

export const saveContact = (updatedContact) => {
    return (dispatch, getState) => {
        fetch(BASE_API + '/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedContact)
        })
            .then(response => response.json())
            .then(contact => dispatch(receiveContact(contact)))
            .catch(error => {
                dispatch(receiveContact(getState().contactInfo.contacts, [ERROR.SAVING_CONTACT]))
            })
    }
}

export const addContact = (newContact) => {
    return (dispatch) => {

        fetch(BASE_API + '/add/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        })
            .then(response => response.json())
            .then(contact => dispatch(receiveContact(contact)))
    }
}