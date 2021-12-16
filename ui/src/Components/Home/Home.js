import React from 'react'
import './home.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Home({ user }) {
    const handleLogout = () => {
        localStorage.removeItem('userNotify')
        window.location.reload()
    }
    return (
        <>
            <div className="NavbarContainer">
                <div className="namePart">
                    <span className="name">
                        {user && user}
                    </span>
                </div>
                <div className="iconsPart">
                    <NotificationsIcon />
                    <span className="nots">2</span>
                    <LogoutIcon onClick={handleLogout} />
                </div>
            </div>
        </>
    )
}
