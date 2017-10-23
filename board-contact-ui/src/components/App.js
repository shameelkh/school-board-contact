import React from 'react'
import BoardInfoPage from '../containers/BoardInfoPage'
import Search from '../containers/Search'

const App = () => {
    return (
        <div>
            <h1>School Boards Data Center</h1>
            <Search/>
            <hr/>
            <BoardInfoPage/>
            <hr/>
        </div>
    )
}

export default App