import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink className="nav-link" to={'/profile'} activeClassName="active">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/account-mgmt'} activeClassName="active">Account Mgmt</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contacts'} activeClassName="active">Contacts</NavLink>
              </li>
            </ul>
        </div>
    )
}

export default Navigation