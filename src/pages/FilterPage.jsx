import { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import '../css/filter-page.css'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalListCard from '../components/HorizontalListCard'
import { fetchAllMovies } from '../features/moviesSlice'
import { ClipLoader } from "react-spinners";

const FilterPage = () => {
    const APIKEY = import.meta.env.VITE_API_KEY;
    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const [searchText, setSearchText] = useState('');
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${APIKEY}`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * If movies are empty we fetch again
     */
    useEffect(() => {
        if (movies.all.length < 1) {
            dispatch(fetchAllMovies());
        }
    }, [dispatch,movies])

    useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText.trim() === '') {
        setData(null);
        setLoading(false)
        return;
      }
      setLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 500); // waiting 500ms after search

    // clears timeout
    return () => clearTimeout(handler);
  }, [searchText, url]);

    /**
     * Searches for a movie locally in our list
     * Trims searchtext to check if inputField has written anything
     * then checks if search includes the title of the movie
     */
    const filteredMovies = allMovies.filter(movie => {
        const search = searchText.trim().toLowerCase();
        const matchesSearch = 
            movie.title.toLowerCase().includes(search)
            return matchesSearch
    })

    // checks if data is null and shows data if data != null
    const moviesToShow = () => {
      if (data) {
        return data;
      }else {
        return filteredMovies;
      }
    }

    return (
        
      <div className="filterPageContainer">
      <section className="inputContainer">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="inputFieldSearch"
        />
        <hr className="divider" />
      </section>

      <section className="movieGrid">
      {loading ? (
        <ClipLoader />
      ) : (
        moviesToShow().map((movie) => (
          <HorizontalListCard key={movie.id} movie={movie} />
    ))
  )}
</section>
    </div>
  );
};

export default FilterPage;