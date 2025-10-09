import { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import '../css/filter-page.css'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalListCard from '../components/HorizontalListCard'
import { fetchAllMovies } from '../features/moviesSlice'

const FilterPage = () => {
    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const [searchText, setSearchText] = useState('');

    /**
     * If movies are empty we fetch again
     */
    useEffect(() => {
        if (movies.all.length < 1) {
            dispatch(fetchAllMovies());
        }
    }, [dispatch,movies])

    /**
     * Searches for a movie
     * Trims searchtext to check if inputField has written anything
     * then checks if search includes the title of the movie
     */
    const filteredMovies = allMovies.filter(movie => {
        const search = searchText.trim().toLowerCase();
        const matchesSearch = 
            movie.title.toLowerCase().includes(search)
            return matchesSearch
    }
        
            
    )

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
        {filteredMovies.map((movie) => (
          <HorizontalListCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default FilterPage;