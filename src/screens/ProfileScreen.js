import React from "react";
import "../css/ProfileScreen.css";
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const ProfileScreen = () => {
	const user = useSelector(selectUser);

	return (
		<div className="profileScreen">
			<NavBar />

			<div className="profileScreen__body">
				<h1>Edit profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F877ad1ce3a479ef9498e1efc_rw_600.png%3Fh%3D794db6a6ae01c539fdfb7ad5e5a89589&f=1&nofb=1"
						alt="profile avatar"
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut"
							>
								Sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
