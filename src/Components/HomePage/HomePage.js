import React, { useEffect } from 'react'
import './HomePage.css'
import axios from '../Extras/axios_custom'
import { useState } from 'react'
import { ImageUrl, trending, API_Key } from '../Extras/Urls'

function HomePage(props) {

    const [movie, setMovie] = useState();
    const [poster, setPoster] = useState([]);

    useEffect(() => {
        axios.get(`${trending}`).then((result) => {
            let x = Math.floor((Math.random() * 20) + 1);
            setMovie(result.data.results[x])
            setPoster(result.data.results);
        })
    }, [])

    const displayDetails = (id)=>{
        console.log(id);
        axios.get(`/movie/${id}?api_key=${API_Key}&language=en-US`).then((res)=>{
            setMovie(res.data)
        })
    }
    return (
        <div className='HomePage-Container'>
            <nav>
                <div className="SmallLogoLeft">
                    <img src="NetFilm-images/Logos/NetFilms-Light.png" alt="SmallLogo" />
                </div>
                <div className="searchBar">
                    <input type="text" placeholder='Search' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </nav>
            <div className="TrendingBannerMain">
                <img src={`${movie ? ImageUrl + movie.backdrop_path : ''}`} alt="MovieBanner" />
                <div className="overLay"></div>
                <h1>{movie ? movie.title : ""}</h1>
                <h1>{movie ? movie.name : ""}</h1>
                <p>{movie ? movie.overview : ''}</p>
            </div>
            <div className="GenreLists">
                <h1>{props.title}</h1>
                <div className="PosterHolder">
                    {poster.map((object) => {
                        return(
                            <img onClick={()=>displayDetails(object.id)} src={movie ? ImageUrl + object.poster_path : ''} alt="MoviePoster" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage