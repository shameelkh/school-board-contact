import React from 'react'
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import * as ERROR from '../actions/errors'
import AccountMgmtPage from '../components/AccountMgmtPage'
import EditAccountMgmtForm from '../components/EditAccountMgmtForm'


class AccountMgmtPageContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inEditMode: false
        }
    }

    enableEditMode = () => {
        this.setState({ inEditMode: true })
    }

    disableEditMode = () => {
        this.setState({ inEditMode: false })
    }

    extractNotification = (boardInfo) => {
        let savingErrors = boardInfo.errors.filter(error => error === ERROR.SAVING_BOARD)
        let fetchingErrors = boardInfo.errors.filter(error => error === ERROR.FETCHING_BOARD)

        return {
            isFetching: boardInfo.isFetching,
            failedToSave: (savingErrors.length > 0 ? true : false),
            failedToFetch: (fetchingErrors.length > 0 ? true : false)
        }
    }

    render() {
        let boardInfo = this.props.boardInfo
        let board = this.props.boardInfo.board
        let notification = this.extractNotification(this.props.boardInfo)

        return (
            <div>
                {!this.state.inEditMode &&
                    <AccountMgmtPage
                        board={board}
                        enableEditMode={this.enableEditMode} 
                        notification={notification}/>
                }

                {this.state.inEditMode &&
                    <EditAccountMgmtForm
                        board={board}
                        disableEditMode={this.disableEditMode}
                        saveBoard={this.props.handleSaveBoard} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boardInfo: state.boardInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveBoard: (updatedBoard) => {
            dispatch(saveBoard(updatedBoard))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMgmtPageContainer)