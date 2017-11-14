import React from 'react'
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import AccountMgmtPage from '../components/AccountMgmtPage'


const mapStateToProps = (state) => {
    return {
        boardInfo: state.boardInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveBoard: (updatedBoard) => {
            dispatch( saveBoard(updatedBoard) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMgmtPage)