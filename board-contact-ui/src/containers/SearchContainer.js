import React from 'react'
import { connect } from 'react-redux'
import { updateSelectedBoardId } from '../actions'

class SearchContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedBoardId: 1
        }
    }

    handleChange = (event) => {
        this.setState({
            selectedBoardId: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch( updateSelectedBoardId(this.state.selectedBoardId) )
    }

    render() {
        return (
            <div className="row">
                <form className="form-inline"
                      onSubmit={this.handleSubmit} >

                    <div className="col-md-6">
                        <input type="text"
                               className="form-control mb-2 mr-sm-2 mb-sm-0"
                               value={this.state.selectedBoardId}
                               onChange={this.handleChange}
                               placeholder="Board Id" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect()(SearchContainer)