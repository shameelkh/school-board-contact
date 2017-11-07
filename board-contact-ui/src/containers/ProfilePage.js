import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { saveBoard } from '../actions'
import EditProfileForm from '../components/EditProfileForm'


class ProfilePage extends React.Component {

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
                    <div>
                        <div className="group-section">
                            <div className="field-section">
                                <span className="field-content">{board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode}</span>
                                <div><span className="field-name">Address</span></div>
                            </div>
                        </div>

                        <div className="group-section">
                            <div className="field-section">
                                <span className="field-content">{board.phoneNumber}</span>
                                <div><span className="field-name">Phone</span></div>
                            </div>
                            <div className="field-section">
                                <span className="field-content">{board.website}</span>
                                <div><span className="field-name">Website</span></div>
                            </div>
                        </div>

                        <div className="group-section">
                             <div className="field-section">
                                <span className="field-content">{board.openTime}</span>
                                <div><span className="field-name">Open Time</span></div>
                             </div>
                             <div className="field-section">
                                <span className="field-content">{board.closeTime}</span>
                                <div><span className="field-name">Close Time</span></div>
                             </div>
                        </div>

                        <button className="btn btn-success" onClick={this.enableEditMode}>Edit</button>

                    </div>
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

ProfilePage.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);