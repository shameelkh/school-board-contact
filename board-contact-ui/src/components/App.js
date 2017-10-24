import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BoardInfoPage from '../containers/BoardInfoPage'
import ContactsPage from '../containers/ContactsPage'
import Search from '../containers/Search'

const App = () => {
    return (
        <Router>
            <div>
                <h1>School Boards Data Center</h1>
                <Search/>

                <div>
                    <Link to={'/basic-info'}>Basic Info</Link> |
                    <Link to={'contacts'}>Contacts</Link>
                </div>

                <Route path="/basic-info" component={BoardInfoPage} />
                <Route path="/contacts" component={ContactsPage} />
            </div>
        </Router>
    )
}

export default App