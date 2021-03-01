import axios from "../axios";
import React, {
	useEffect,
	useState,
} from "react";
import "../css/Banner.css";
import requests from "../Requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					requests.fetchNetflixOriginals
				);
				setMovie(
					data.results[
						Math.floor(
							Math.random() *
								data.results.length -
								1
						)
					]
				);
				return data;
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const truncate = (string, n) => {
		return string?.length > n
			? string.substr(0, n - 1) + "..."
			: string;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center top",
			}}
		>
			{movie && (
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie && movie.name}
					</h1>
					<div className="banner__buttons">
						<button className="banner__button">
							Play
						</button>
						<button className="banner__button">
							+ My List
						</button>
					</div>
					<h1 className="banner__description">
						{truncate(movie.overview, 150)}
					</h1>
				</div>
			)}

			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
