import 'bootstrap/dist/css/bootstrap.css';
import '../css/board-contact.css';

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    )
}

export default Root