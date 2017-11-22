import { combineReducers } from 'redux'
import boardInfoReducer from './boardInfoReducer'
import selectedBoardIdReducer from './selectedBoardIdReducer'
import contactInfoReducer from './contactInfoReducer'

const stateTree = {
    boardInfo: boardInfoReducer,
    contactInfo: contactInfoReducer,
    selectedBoardId: selectedBoardIdReducer
}

const boardContactAppReducer = combineReducers(stateTree)

export default boardContactAppReducer;