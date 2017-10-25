import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link active" to={'/basic-info'}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/account-mgmt'}>Account Mgmt</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/contacts'}>Contacts</Link>
          </li>
        </ul>
    )
}

export default Navigation