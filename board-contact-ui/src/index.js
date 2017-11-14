import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import boardContactAppReducer from './reducers'
import Root from './containers/Root'

let store = createStore(
                boardContactAppReducer,
                undefined,
                applyMiddleware(
                  thunkMiddleware
                )
            )

 render(
   <Root store={store}/>,
   document.getElementById('root')
 )
