import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom';
import { fetchBoard }  from '../actions'
import ProfilePage from '../components/ProfilePage'

class BoardInfoPage extends Component {
    static propTypes = {
        selectedBoardId: PropTypes.string.isRequired,
        boardInfo: PropTypes.object.isRequired,
        loadData: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.props.loadData(this.props.selectedBoardId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedBoardId !== this.props.selectedBoardId) {
            this.props.loadData(nextProps.selectedBoardId)
        }
    }

    renderProfilePage = () => {
        return (
            <ProfilePage board={this.props.boardInfo.board} />
        )
    }

    render() {
        const board = this.props.boardInfo.board

        if(board === undefined) {
            return (<div></div>)
        }

        return (
            <div>
                <h2>School Board Info</h2>
                <br/>

                <Switch>
                    <Route path={`${this.props.match.path}/profile`}  render={this.renderProfilePage} />
                </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardInfoPage))


