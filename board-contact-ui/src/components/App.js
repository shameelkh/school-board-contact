import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BoardInfoPage from '../containers/BoardInfoPage'
import ContactsPage from '../containers/ContactsPage'
import Header from './Header'
import Navigation from './Navigation'

const App = () => {
    return (
        <Router>
            <div className="container">
              <div className="row">
                <Header />
              </div>
              <div className="row">
                <div className="col-8">
                   <Navigation />
                </div>
              </div>

              <Route path="/basic-info" component={BoardInfoPage} />
              <Route path="/contacts" component={ContactsPage} />
            </div>
        </Router>
    )
}

export default App