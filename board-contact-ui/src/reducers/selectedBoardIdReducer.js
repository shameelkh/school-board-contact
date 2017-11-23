import { UPDATE_SELECTED_BOARD_ID } from '../actions'

const selectedBoardIdReducer = (state = "1", action) => {

    switch (action.type) {
        case UPDATE_SELECTED_BOARD_ID:
            return action.selectedBoardId

        default:
            return state
    }
}

export default selectedBoardIdReducer;