import React from 'react'
import './Fotter.css'

function Fotter() {
    return (
        <div className="fotter">
            <div className="foot_info">
                <div className="foot_info_cont">
                    <div className="foot_title">
                        There’s even more to watch.
                    </div>
                    <div className="foot_desc">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.
                    </div>
                    <div className="foot_btns">
                        <button className="btn foot_btn">JOIN NOW</button>
                    </div>
                </div>
            </div>
            <div className="block_container">
                <div className="block">
                    <a href="">FAQ</a>
                    <a href="">Investor Relations</a>
                    <a href="">Privacy</a>
                    <a href="">Speed Test</a>
                </div>
                <div className="block">
                    <a href="">Help Centre</a>
                    <a href="">Jobs</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Legal Notices</a>
                </div>
                <div className="block">
                    <a href="">Accounts</a>
                    <a href="">Ways to Watch</a>
                    <a href="">Corporate Information</a>
                    <a href="">Only on Netflix</a>
                </div>
                <div className="block">
                    <a href="">Media Centre</a>
                    <a href="">Terms of Use</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Fotter
