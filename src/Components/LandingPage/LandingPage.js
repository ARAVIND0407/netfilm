import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className='LandingPage-Container'>
            <div className="logoHolder">
                <img className='ShutterLogo' src="NetFilm-images/Logos/Logo-Light/Shutter-Light.png" alt="LogoText" />
                <img className='TextLogo' src="NetFilm-images/Logos/Logo-Light/NetFilms-Light-Text.png" alt="LogoText" />
            </div>
            <div className="ExploreBtnHolder">
                <button className='ExploreBtn'>EXPLORE</button>
            </div>
        </div>
    )
}

export default LandingPage