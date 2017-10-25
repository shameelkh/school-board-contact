import React from 'react'

const ProfilePage = ({board}) => {
    return (
        <div>
            Address: {board.address.street}| {board.address.city} |{board.address.postalCode } <br/>
            Phone: {board.phoneNumber} | Website:{board.website} <br/>
            Open Time: {board.openTime} | Close time: {board.closeTime}
        </div>
    )
}

export default ProfilePage;