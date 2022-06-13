import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const baseurl= "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results
                [Math.floor(Math.random()*request.data.results.length-1)])
            return request
        }
        fetchData();
    }, [])
    console.log(movie);

    return (
        <div className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseurl}${movie.backdrop_path})`,
            backgroundPosition: "center center"
            
        }}
        >
            <div className="banner_contents">
                {/* title */}
                <div className="banner_title">{movie?.name || movie?.title|| movie?.original_name}</div>
                
                {/* play buttons */}
                <div className="banner_buttons">
                    <button className="banner_button" id="banner_play_button"><PlayArrowIcon />Play</button>
                    <button className="banner_button" id="banner_list_button">My List</button>
                </div>

                {/* desc */}
                <div className="banner_desc">
                    {movie?.overview}
                </div>
            </div>
            
            <div className="banner_fade_container"></div>
        </div>
    )
}

export default Banner
