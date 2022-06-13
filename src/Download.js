import React from 'react'
import './Download.css'

const baseurl= "https://image.tmdb.org/t/p/original/"

function Download() {

    return (
        <div className="download">
            <div className="title">Available Download</div>
            <div className="download_cont">
                    <img className="movie_img" src={`${baseurl}/fl6S0hvaYvFeRYGniMm9KzNg3AN.jpg`} alt=""/>
                <div className="movie_name">
                    {/* Conrol Z */}
                </div>
                    <img className="movie_img" src={`${baseurl}/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg`} alt=""/>
                <div className="movie_name">
                    {/* Black Widow */}
                </div>
                    <img className="movie_img" src={`${baseurl}/c7xcqnMDVQ5v1hJBm3AZ5YikNe6.jpg`} alt=""/>
                <div className="movie_name">
                    {/* The Kissing Booth 3 */}
                </div>
                    <img className="movie_img" src={`${baseurl}/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg`} alt=""/>
                <div className="movie_name">
                    {/* Loki */}
                </div>
                    <img className="movie_img" src={`${baseurl}/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg`} alt=""/>
                <div className="movie_name">
                    {/* The Suicide Squad  */}
                </div>
                    <img className="movie_img" src={`${baseurl}/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg`} alt=""/>
                <div className="movie_name">
                {/* Zack Snyder's Justice League */}
                </div>
                    <img className="movie_img" src={`${baseurl}/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg`} alt=""/>
                <div className="movie_name">
                {/* Godzilla vs. Kong */}
                </div>
                    <img className="movie_img" src={`${baseurl}/lMJp1lqn6JA4uxIzsBQ79Pub5rv.jpg`} alt=""/>
                <div className="movie_name">
                {/* Sky Rojo */}
                </div>
                    <img className="movie_img" src={`${baseurl}/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg`} alt=""/>
                <div className="movie_name">
                {/* The Umbrella Academy */}
                </div>
                    <img className="movie_img" src={`${baseurl}/gdI7pQCh6aw8f41J7k9n68aPZgi.jpg`} alt=""/>
                <div className="movie_name">
                {/* Chilling Adventures of Sabrina */}
                </div>
                    <img className="movie_img" src={`${baseurl}/gdI7pQCh6aw8f41J7k9n68aPZgi.jpg`} alt=""/>
                <div className="movie_name">
                {/* Chilling Adventures of Sabrina */}
                </div>
                    <img className="movie_img" src={`${baseurl}/gdI7pQCh6aw8f41J7k9n68aPZgi.jpg`} alt=""/>
                <div className="movie_name">
                {/* Chilling Adventures of Sabrina */}
                </div>
            </div>
        </div>
    )
}

export default Download
