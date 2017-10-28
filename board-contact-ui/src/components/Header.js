import React from 'react'
import Search from '../containers/Search'

const Header = () => {
    return (
        <div className="row justify-content-md-center header">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <br/>
                <Search/>
            </div>
            <div className="col-md-6">
                <h1>School Boards Data Center</h1>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default Header