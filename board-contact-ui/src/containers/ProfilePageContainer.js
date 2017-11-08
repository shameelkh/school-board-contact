import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import ProfilePage from '../components/ProfilePage'


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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);