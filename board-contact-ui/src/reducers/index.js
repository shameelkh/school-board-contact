import { combineReducers } from 'redux'
import boardInfo from './boardInfo'
import selectedBoardId from './selectedBoardId'
import contactInfo from './contactInfo'

const boardContactAppReducer = combineReducers({selectedBoardId, boardInfo, contactInfo})

export default boardContactAppReducer;