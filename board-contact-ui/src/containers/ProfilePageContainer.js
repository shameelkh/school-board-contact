import React from 'react'
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import ProfilePage from '../components/ProfilePage'
import EditProfileForm from '../components/EditProfileForm'

class ProfilePageContainer extends React.Component {
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
        let board = boardInfo.board
        
        return (
            <div>
                {!this.state.inEditMode &&
                    <ProfilePage
                        board={board}
                        enableEditMode={this.enableEditMode}
                        isFetching={boardInfo.isFetching} />
                }

                {this.state.inEditMode &&
                    <EditProfileForm
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);