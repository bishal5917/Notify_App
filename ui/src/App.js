import './login.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home.js';
import { io } from 'socket.io-client'

function App() {


  const [userx, setUserx] = useState("")
  const user = localStorage.getItem('userNotify')

  const getUser = () => {
    localStorage.setItem('userNotify', userx)
    window.location.reload()
  }

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    //connecting to the socket server running on port 5000
    setSocket(io("http://localhost:5000"))
    //catching the message sent to every user from socket server
    //we use socket.on
    // console.log(socket.on("testEvent", (msg) => {
    //   console.log(msg)
    // }))
  }, []);

  useEffect(() => {
    //sending event to server using socket.emit
    socket?.emit('newUser', user)
  }, [socket, user])

  return (
    <>
      {
        !user ?
          (<div className="loginContainer">
            <input onChange={(e) => setUserx(e.target.value)}
              type="text" placeholder="Enter Username"
              name="" id="" />
            <button onClick={getUser}>Get Started <ArrowForwardIosIcon /> </button>
          </div>) : (<Home socket={socket} user={user} />)
      }
    </>
  );
}

export default App;
