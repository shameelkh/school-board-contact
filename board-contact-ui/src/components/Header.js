import React from 'react'
import SearchContainer from '../containers/SearchContainer'

const Header = () => {
    return (
        <div className="row justify-content-md-center header">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <br/>
                <SearchContainer />
            </div>
            <div className="col-md-6">
                <h1>School Boards Data Center</h1>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default Header