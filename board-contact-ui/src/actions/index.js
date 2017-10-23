import fetch from 'isomorphic-fetch'

export const UPDATE_SELECTED_BOARD_ID = 'UPDATE_SELECTED_BOARD_ID'

export const REQUEST_BOARD = 'REQUEST_BOARD'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const FETCH_BOARD = 'FETCH_BOARD'

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS'
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
export const FETCH_CONTACTS = 'FETCH_CONTACTS'

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

export const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

export const fetchBoard = (boardId) => {
    return (dispatch) => {
        dispatch( requestBoard(boardId) )

        fetch('http://localhost:8080/employer/' + boardId)
                    .then(response => response.json())
                    .then(board => dispatch(receiveBoard(board)))
    }
}

export const requestContacts = (selectedBoardId) => {
    return {
        type: RECEIVE_CONTACTS,
        selectedBoardId
    }
}

export const receiveContacts = (contacts) => {
    return {
        type: RECEIVE_CONTACTS,
        contacts
    }
}

export const fetchContacts = (boardId) => {
    return (dispatch) => {
        dispatch( requestContacts(boardId) )

        fetch('http://localhost:8080/contacts/' + boardId)
                    .then(response => response.json())
                    .then(contacts => dispatch( receiveContacts(contacts) ))
    }
}