import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import boardContactAppReducer from './reducers'
import App from './components/App'

let store = createStore(
                boardContactAppReducer,
                undefined,
                applyMiddleware(
                  thunkMiddleware
                )
            )

 render(
   <Provider store={store}>
     <App />
   </Provider>,
   document.getElementById('root')
 )
