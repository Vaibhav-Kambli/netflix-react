const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  
}

export default requests

// https://api.themoviedb.org/3/trending/all/week?api_key=e0947347aa42e5db0c4a5bc4256cf38f

