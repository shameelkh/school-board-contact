import React from 'react'
import PropTypes from 'prop-types';
import EditAccountMgmtForm from '../components/EditAccountMgmtForm'

class AccountMgmtPage extends React.Component {

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

        if (board === undefined) {
            return (<div></div>)
        }

        return (
            <div>
                {!this.state.inEditMode &&
                    <div>
                        <div className="group-section">
                            <div class="field-section">
                                <span class="field-content">{board.accountOwner}</span>
                                <div><span class="field-name">Account Owner</span></div>
                            </div>
                        </div>
                        <div className="group-section">
                            <div class="field-section">
                                <span class="field-content">{board.openDate}</span>
                                <div><span class="field-name">Open Date</span></div>
                            </div>
                            <div class="field-section">
                                <span class="field-content">{board.closeDate}</span>
                                <div><span class="field-name">Close Date</span></div>
                            </div>
                        </div>
                        <div className="group-section">
                            <div class="field-section">
                                <span class="field-content">{board.active ? "Yes" : "No"}</span>
                                <div><span class="field-name">Active</span></div>
                            </div>
                        </div>

                        <button className="btn btn-success" onClick={this.enableEditMode}>Edit</button>
                    </div>
                }

                {this.state.inEditMode &&
                    <EditAccountMgmtForm board={this.props.boardInfo.board}
                                         disableEditMode={this.disableEditMode}
                                         saveBoard={this.props.handleSaveBoard} />
                }
            </div>
        )
    }
}

AccountMgmtPage.propTypes = {
    board: PropTypes.object.isRequired,
    handleSaveBoard: PropTypes.func.isRequired
}

export default AccountMgmtPage