import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveBoard } from '../actions'
import EditProfileForm from '../components/EditProfileForm'


class ProfilePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inEditMode: false
        }
    }

    componentWillReceiveProps(nextProps) {
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
            return <div>Nothing to Show</div>
        }

        return (
            <div>
                {!this.state.inEditMode &&
                    <div>
                        <div className="group-section">
                            <div class="field-section">
                                <span class="field-content">{board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode}</span>
                                <div><span class="field-name">Address</span></div>
                            </div>
                        </div>

                        <div className="group-section">
                            <div class="field-section">
                                <span class="field-content">{board.phoneNumber}</span>
                                <div><span class="field-name">Phone</span></div>
                            </div>
                            <div class="field-section">
                                <span class="field-content">{board.website}</span>
                                <div><span class="field-name">Website</span></div>
                            </div>
                        </div>

                        <div className="group-section">
                             <div class="field-section">
                                <span class="field-content">{board.openTime}</span>
                                <div><span class="field-name">Open Time</span></div>
                             </div>
                             <div class="field-section">
                                <span class="field-content">{board.closeTime}</span>
                                <div><span class="field-name">Close Time</span></div>
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
    boardInfo: PropTypes.object.isRequired
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