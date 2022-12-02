import React from 'react'
import './HomePage.css'

function HomePage() {
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
                <img src="NetFilm-images/BackDrops/MovieDummy.jpg" alt="MovieBanner" />
                <h1>MovieTitle</h1>
                <p>MovieDescription Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae, necessitatibus maiores itaque quam sit aliquid minus</p>
            </div>
            <div className="GenreLists">
                <h1>Genre</h1>
                <div className="PosterHolder">
                    <img src="NetFilm-images/BackDrops/MovieDummy.jpg" alt="MoviePoster" />
                </div>
            </div>
        </div>
    )
}

export default HomePage