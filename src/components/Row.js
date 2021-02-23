import React, { useEffect, useState } from "react";
import axios from "../axios";
import '../css/Row.css'

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	// console.log("URL",fetchUrl)
    /* (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${
                     isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="{movie.name}" key={movie.id}/>
                ) */

    const base_url = "https://image.tmdb.org/t/p/original/" 

	useEffect(
		() => {
			try {
				const fetchData = async () => {
					const { data } = await axios.get(fetchUrl);
					// console.log("movie data", data.results);
					setMovies(data.results);
				};

				fetchData();
			} catch (err) {
				console.log(err);
			}
		},
		[fetchUrl]
	);

	return (
		<div className="row">
			<h2>
				{title}
			</h2>

            <div className="row__posters">
            {movies.map((movie) => 
                (
                    <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt="{movie.name}" key={movie.id}/>
                )
          
             
                
            )}
            </div>
		</div>
	);
};

export default Row;
