import React from "react";
import "../css/HomeScreen.css";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import requests from "../Requests";
import Row from "../components/Row";

const HomeScreen = () => {
	return (
		<div className="homeScreen">
			<NavBar />

			<Banner />

			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row />
		</div>
	);
};

export default HomeScreen;
