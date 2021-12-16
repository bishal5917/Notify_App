import React, { useState, useEffect } from 'react'
import './home.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { data } from '../dummydata'
import Items from '../Items/Items';

export default function Home({ user, socket }) {
    const handleLogout = () => {
        localStorage.removeItem('userNotify')
        window.location.reload()
    }

    const [notifics, setNotifics] = useState([])

    //grabbing getNotification event emitted from the server
    //the data is the actual notification gotten and 
    //we pushed it into the array

    useEffect(() => {
        socket?.on("getNotification", (data) => {
            setNotifics((prev) => [...prev, data]);
        });
    }, [socket]);

    console.log(notifics)
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
            <div className='feedx'>
                {data.map((p) => (
                    <Items
                        socket={socket}
                        user={user}
                        key={p._id}
                        post={p} />
                ))}

            </div>
        </>
    )
}
