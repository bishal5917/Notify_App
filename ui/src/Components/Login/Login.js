import React from 'react'
import './login.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Login() {
    return (
        <>
            <div className="loginContainer">
                <input type="text" placeholder="Enter Username"
                    name="" id="" />
                <button>Get Started <ArrowForwardIosIcon /> </button>
            </div>
        </>
    )
}
