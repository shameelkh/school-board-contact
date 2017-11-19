import React from 'react'
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
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

    render() {
        let board = this.props.boardInfo.board

        if (board === null || board === undefined) {
            return <div>No School Board Selected</div>
        }

        return (
            <div>
                {!this.state.inEditMode &&
                    <AccountMgmtPage
                        board={board}
                        enableEditMode={this.enableEditMode} />
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