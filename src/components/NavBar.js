import React, { useEffect, useState } from "react";
import "../css/NavBar.css";

const NavBar = () => {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

	return (
		<div className={`navbar ${show && 'navbar__black'}`}>
			<div className="navbar__contents">
				<img
					className="navbar__logo"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplasticoceans.org%2Fwp-content%2Fuploads%2F2018%2F09%2Fnetflix-logo-1.png&f=1&nofb=1"
					alt="logo"
				/>
				<img
					className="navbar__avatar"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F877ad1ce3a479ef9498e1efc_rw_600.png%3Fh%3D794db6a6ae01c539fdfb7ad5e5a89589&f=1&nofb=1"
					alt="profile avatar"
				/>
			</div>
		</div>
	);
};

export default NavBar;
