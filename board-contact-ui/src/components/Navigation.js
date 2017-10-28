import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div class="navigation">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>Profile</Link>
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