import React from 'react'
import './Navbar.css'
import logo from './images/netflixlogo.png'

function Navbar() {
    return (
        <div className="navbar">
            <img className="nav_logo" src={logo} alt=""/>
            
            <div className="nav_right">
                <div className="nav_info">
                    UNLIMITED TV SHOWS & MOVIES
                </div>
                <div className="buttons">
                    <button className="btn join_now">JOIN NOW</button>
                    <button className="btn sign_in">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
