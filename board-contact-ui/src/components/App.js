import React from 'react'
import BoardInfoPage from '../containers/BoardInfoPage'
import ContactsPage from '../containers/ContactsPage'
import Search from '../containers/Search'

const App = () => {
    return (
        <div>
            <h1>School Boards Data Center</h1>
            <Search/>
            <hr/>
            <BoardInfoPage/>
            <hr/>
            <ContactsPage/>
        </div>
    )
}

export default App