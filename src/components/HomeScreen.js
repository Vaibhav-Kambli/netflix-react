import React from 'react'
import '../css/HomeScreen.css'
import NavBar from './NavBar'
import Banner from './Banner'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
           <NavBar/> 
           <Banner/>
        </div>
    )
}

export default HomeScreen
