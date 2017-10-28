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
        <div className="row">
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" ref={(input) => {boardInput = input}} id="inlineFormInput" placeholder="Board Id" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </form>


        </div>
    )
}

export default connect()(Search)