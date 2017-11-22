import { REQUEST_BOARD, RECEIVE_BOARD } from '../actions'

const defaultState = {
    board: {},
    errors: [],
    isFetching: false,
}

const receiveBoardInfo = (action) => {
    return {
        board: action.board,
        errors: action.errors,
        isFetching: false
    }
}

const boardInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_BOARD:
            return Object.assign({}, state, { isFetching: true, errors: [] })

        case RECEIVE_BOARD:
            return Object.assign({}, receiveBoardInfo(action))

        default:
            return state
    }
}

export default boardInfoReducer;