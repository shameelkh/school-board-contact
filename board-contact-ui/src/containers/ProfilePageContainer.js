import React from 'react'
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import * as ERROR from '../actions/errors'
import ProfilePage from '../components/ProfilePage'
import EditProfileForm from '../components/EditProfileForm'
import { error } from 'util';

class ProfilePageContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inEditMode: false,
            isSavingData: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isSavingData: false })
    }

    enableEditMode = () => {
        this.setState({ inEditMode: true })
    }

    disableEditMode = () => {
        this.setState({ inEditMode: false })
    }

    handleSaveBoard = (updatedBoard) => {
        this.setState({ isSavingData: true })
        this.props.dispatch(saveBoard(updatedBoard))
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
        let board = boardInfo.board

        let notification = this.extractNotification(this.props.boardInfo)

        return (
            <div>
                {!this.state.inEditMode &&
                    <ProfilePage
                        board={board}
                        enableEditMode={this.enableEditMode}
                        notification={notification}
                        isSavingData={this.state.isSavingData} />
                }

                {this.state.inEditMode &&
                    <EditProfileForm
                        board={board}
                        disableEditMode={this.disableEditMode}
                        saveBoard={this.handleSaveBoard} />
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


export default connect(mapStateToProps)(ProfilePageContainer);