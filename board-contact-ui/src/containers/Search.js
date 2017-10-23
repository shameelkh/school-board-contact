import React from 'react'
import { connect } from 'react-redux'
import { updateSelectedBoardId } from '../actions'


let Search = ({dispatch}) => {
    let boardInput = null;

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch( updateSelectedBoardId(boardInput.value) )
        boardInput.value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Board Id: <input type="text" ref={(input) => {boardInput = input}}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default connect()(Search)