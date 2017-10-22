import fetch from 'isomorphic-fetch'

const BASE_URL = 'https://localhost:8080'

const UPDATE_SELECTED_BOARD_ID = 'UPDATE_SELECTED_BOARD_ID'

const REQUEST_BOARD = 'REQUEST_BOARD'
const RECEIVE_BOARD = 'RECEIVE_BOARD'
const FETCH_BOARD = 'FETCH_BOARD'

const updateSelectedBoardId = (selectedBoardId) => {
    return {
        type: UPDATE_SELECTED_BOARD_ID
        selectedBoardId
    }
}

const requestBoard = (selectedBoardId) => {
    return {
        type: REQUEST_BOARD,
        selectedBoardId
    }
}

const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

const fetchBoard = (boardId) => {
    return (dispatch) => {
        dispatch( requestBoard(boardId) )

        fetch(BASE_URL + `/employer/${boardId}`)
                    .then(response => response.json())
                    .then(board => dispatch(receiveBoard(board)))

    }
}