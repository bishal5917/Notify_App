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

  useEffect(() => {
    const socket = io("http://localhost:5000");
    console.log(socket)
  }, []);

  return (
    <>
      {
        !user ?
          (<div className="loginContainer">
            <input onChange={(e) => setUserx(e.target.value)}
              type="text" placeholder="Enter Username"
              name="" id="" />
            <button onClick={getUser}>Get Started <ArrowForwardIosIcon /> </button>
          </div>) : (<Home user={user} />)
      }
    </>
  );
}

export default App;
