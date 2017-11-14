import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchBoard, fetchContacts }  from '../actions'
import ContactsPageContainer from '../containers/ContactsPageContainer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import ProfilePageContainer from '../containers/ProfilePageContainer'
import AccountMgmtPageContainer from '../containers/AccountMgmtPageContainer'


class App extends Component {
    static propTypes = {
        loadBoardData: PropTypes.func.isRequired,
        selectedBoardId: PropTypes.string.isRequired,
        boardInfo: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.props.loadBoardData(this.props.selectedBoardId)
        this.props.loadContacts(this.props.selectedBoardId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedBoardId !== this.props.selectedBoardId) {
            this.props.loadBoardData(nextProps.selectedBoardId)
            this.props.loadContacts(nextProps.selectedBoardId)
        }
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
                                <Route exact path={`${match.path}profile`} component={ProfilePageContainer} />
                                <Route path={`${match.path}account-mgmt`} component={AccountMgmtPageContainer} />
                                <Route path={`${match.path}contacts`} component={ContactsPageContainer} />
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
        },

        loadContacts: (selectedBoardId) => {
            dispatch( fetchContacts(selectedBoardId) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)