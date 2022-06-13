import React,{useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

const baseurl= "https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLarge}) {
    const [movies, setMovies] = useState([])

    // this useEffect runs based on a condition
    useEffect(() => {
        async function fetchData() {
            const request= await axios.get(fetchUrl) 
            setMovies(request.data.results)
            console.log(request);
            return request;
        }
        fetchData();
        // [] means euns once only, [fetchUrl] it will refresh when it get updated
    }, [fetchUrl]) 

    // console.log(movies);

    return (

        // starting of our row component
        <div className="row">
            {/* title */}
            <div className="title">{title}</div>
 
            {/* several row posts */}
            <div className="row-posts">
                {movies.map(movie => (
                    <>
                    <img 
                        key={movie.id}
                        className={` ${isLarge ? "large-post":"row-post"}`} 
                        src={`${baseurl}${isLarge ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name} />
                    </>
                ))}
            </div>


            {/* container */}


        </div>
    )
}

export default Row
