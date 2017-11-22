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
        let boardInfo = this.props.boardInfo
        let board = this.props.boardInfo.board
        
        return (
            <div>
                {!this.state.inEditMode &&
                    <AccountMgmtPage
                        board={board}
                        enableEditMode={this.enableEditMode} 
                        isFetching={boardInfo.isFetching}/>
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