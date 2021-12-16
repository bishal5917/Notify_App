import './login.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [userx, setUserx] = useState("")
  const user = localStorage.getItem('userNotify')

  const getUser = () => {
    localStorage.setItem('userNotify', userx)
  }

  return (
    <>
      {
        !user ?
          (<div className="loginContainer">
            <input onChange={(e) => setUserx(e.target.value)}
              type="text" placeholder="Enter Username"
              name="" id="" />
            <button onClick={getUser}>Get Started <ArrowForwardIosIcon /> </button>
          </div>) : (<div>{user}</div>)
      }
    </>
  );
}

export default App;
