import { REQUEST_BOARD, RECEIVE_BOARD } from '../actions'

const defaultState = {
    isFetching: false,
    board: undefined
}

const receiveBoardInfo = (board) => {
    return {
        isFetching: false,
        board
    }
}

const boardInfo = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_BOARD:
            return Object.assign({}, state, {isFetching: true})

        case RECEIVE_BOARD:
            return Object.assign({}, receiveBoardInfo(action.board))

        default:
            return state
    }
}

export default boardInfo;