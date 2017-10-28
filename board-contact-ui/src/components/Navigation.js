import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item">
                <Link className="nav-link active" to={'/profile'}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/account-mgmt'}>Account Mgmt</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contacts'}>Contacts</Link>
              </li>
            </ul>
        </div>
    )
}

export default Navigation