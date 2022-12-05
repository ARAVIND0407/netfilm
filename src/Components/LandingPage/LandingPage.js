import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div className='LandingPage-Container'>
            <div className="logoHolder">
                <img className='ShutterLogo' src="NetFilm-images/Logos/Shutter-Light.png" alt="LogoText" />
                <img className='TextLogo' src="NetFilm-images/Logos/NetFilms-Light-Text.png" alt="LogoText" />
            </div>
            <div className="ExploreBtnHolder">
                <Link className ='LinkBtn' to='/home'><button className='ExploreBtn'>EXPLORE</button></Link>
            </div>
        </div>
    )
}

export default LandingPage