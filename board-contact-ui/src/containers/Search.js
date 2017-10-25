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
            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" ref={(input) => {boardInput = input}} id="inlineFormInput" placeholder="Board Id" />
                <button type="submit" class="btn btn-primary">Search</button>
            </form>


        </div>
    )
}

export default connect()(Search)