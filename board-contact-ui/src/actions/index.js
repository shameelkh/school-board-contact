import fetch from 'isomorphic-fetch'

const BASE_URL = 'https://localhost:8080'

export const UPDATE_SELECTED_BOARD_ID = 'UPDATE_SELECTED_BOARD_ID'

export const REQUEST_BOARD = 'REQUEST_BOARD'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const FETCH_BOARD = 'FETCH_BOARD'

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