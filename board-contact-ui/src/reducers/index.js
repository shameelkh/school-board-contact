import { combineReducers } from 'redux'
import boardInfo from './boardInfo'
import selectedBoardId from './selectedBoardId'

const boardContactAppReducer = combineReducers({selectedBoardId, boardInfo})

export default boardContactAppReducer;