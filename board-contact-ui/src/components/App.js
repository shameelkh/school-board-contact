import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchBoard }  from '../actions'
import BoardInfoPage from '../containers/BoardInfoPage'
import ContactsPage from '../containers/ContactsPage'
import Header from './Header'
import Navigation from './Navigation'
import ProfilePage from '../components/ProfilePage'
import AccountMgmtPage from '../components/AccountMgmtPage'


class App extends Component {
    static propTypes = {
        loadBoardData: PropTypes.func.isRequired,
        selectedBoardId: PropTypes.string.isRequired,
        boardInfo: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.props.loadBoardData(this.props.selectedBoardId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedBoardId !== this.props.selectedBoardId) {
            this.props.loadBoardData(nextProps.selectedBoardId)
        }
    }

    renderProfilePage = () => {
        return (
            <ProfilePage board={this.props.boardInfo.board} />
        )
    }

    renderAccountMgmtPage = () => {
        return (
            <AccountMgmtPage board={this.props.boardInfo.board} />
        )
    }

    render() {
        let match = this.props.match
        let boardName = (this.props.boardInfo.board ? this.props.boardInfo.board.boardName : '')
        return (
            <Router>
                <div className="container-fluid">
                  <div className="row">
                    <Header />
                  </div>

                  <div className="row content">
                     <h4 class="school-board-name">{boardName}</h4>
                      <div>
                        <div class="">
                            <Navigation />
                        </div>
                        <div class="main-content">
                            <Switch>
                                <Route path={`${match.path}profile`} render={this.renderProfilePage} />
                                <Route path={`${match.path}account-mgmt`} render={this.renderAccountMgmtPage} />
                                <Route path={`${match.path}contacts`} component={ContactsPage} />
                            </Switch>
                        </div>
                      </div>
                  </div>
                </div>
            </Router>
    )}
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedBoardId: state.selectedBoardId,
        boardInfo: state.boardInfo,
        match: ownProps.match
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBoardData: (selectedBoardId) => {
            dispatch( fetchBoard(selectedBoardId) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)