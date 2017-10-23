import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBoard }  from '../actions'

class BoardInfoPage extends Component {
    static propTypes = {
        selectedBoardId: PropTypes.number.isRequired,
        boardInfo: PropTypes.object.isRequired,
        loadData: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.loadData(this.props.selectedBoardId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedBoardId !== this.props.selectedBoardId) {
            this.props.loadData(nextProps.selectedBoardId)
        }
    }

    render() {
        const board = this.props.boardInfo.board
        return (
            <div>
            <h2>School Board Info Data</h2>
            {board.boardName}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedBoardId: state.selectedBoardId,
        boardInfo: state.boardInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (selectedBoardId) => {
            dispatch( fetchBoard(selectedBoardId) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardInfoPage)


