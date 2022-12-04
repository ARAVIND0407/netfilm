import React, { useEffect } from 'react'
import './HomePage.css'
import axios from '../Extras/axios_custom'
import { useState } from 'react'
import { ImageUrl, trending } from '../Extras/Urls'

function HomePage() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`${trending}`).then((result) => {
            setMovie(result.data.results[1])
        })
    }, [])

    return (
        <div className='HomePage-Container'>
            <nav>
                <div className="SmallLogoLeft">
                    <img src="NetFilm-images/Logos/NetFilms-Light.png" alt="SmallLogo" />
                </div>
                <div className="searchBar">
                    <input type="text" placeholder='Search' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </nav>
            <div className="TrendingBannerMain">
                <img src={`${movie ? ImageUrl + movie.backdrop_path : ''}`} alt="MovieBanner" />
                <h1>{movie ? movie.title : ""}</h1>
                <h1>{movie ? movie.name : ""}</h1>
                <p>{movie ? movie.overview : ''}</p>
            </div>
            <div className="GenreLists">
                <h1>Genre</h1>
                <div className="PosterHolder">
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage