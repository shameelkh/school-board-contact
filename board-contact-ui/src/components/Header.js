import React from 'react'
import Search from '../containers/Search'

const Header = () => {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-4">
                <br/>
                <Search/>
            </div>
            <div className="col-md-8">
                <h1>School Boards Data Center</h1>
            </div>
        </div>
    )
}

export default Header