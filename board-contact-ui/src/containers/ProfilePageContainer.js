import React from 'react'
import PropTypes from 'prop-types';
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
        let board = this.props.boardInfo.board

        if (board === null || board === undefined) {
            return <div>No School Board Selected</div>
        }

        return (
            <div>
                {!this.state.inEditMode &&
                    <ProfilePage board={this.props.boardInfo.board}
                                 enableEditMode={this.enableEditMode} />
                }


                {this.state.inEditMode &&
                    <EditProfileForm board={this.props.boardInfo.board}
                                     disableEditMode={this.disableEditMode}
                                     saveBoard={this.props.handleSaveBoard} />
                }
            </div>
        )
    }
}

ProfilePageContainer.propTypes = {
    boardInfo: PropTypes.object.isRequired,
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);