import React from 'react'

const Contact = ({contact}) => {
    return (
        <div>
            <p>Name: {contact.firstName} {contact.lastName} | Email: {contact.email}</p>
            <p>Is Primary: {contact.isPrimary ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Contact