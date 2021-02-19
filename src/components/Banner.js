import React from 'react'
import '../css/Banner.css'

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/ed4281d6-ecf0-4c7b-8a73-eef80a8289ac/CA-en-20210208-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
            backgroundPosition: "center center",
        }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button" >Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description"> This is movie / banner description</h1>
        </div>
        <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
