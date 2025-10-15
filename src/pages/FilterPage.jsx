import { useEffect, useState } from 'react'
import '../css/filter-page.css'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalListCard from '../components/HorizontalListCard'
import { fetchAllMovies } from '../features/moviesSlice'
import { ClipLoader } from "react-spinners";
import FilterPageGenreButtonsComponent from '../components/FilterPageGenreButtonsComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FilterPage = () => {
    const APIKEY = import.meta.env.VITE_API_KEY;
    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(0);
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${APIKEY}&language=en-US&page=${currentPage}`;
    const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${selectedGenre}&language=en-US&page=${currentPage}`
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

    /**
     * Fetches when a search is performed.
     */
    useEffect(() => {
      const handler = setTimeout(() => {
        if (searchText.trim() === '' && selectedGenre === 0) {
          setData(null);
          setLoading(false)
          return;
        }
        setLoading(true)
        const url = selectedGenre !== 0 ? genreUrl : searchUrl;

        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data.results))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, 500); // waiting 500ms after search

      // clears timeout
      return () => clearTimeout(handler);
    }, [searchText, selectedGenre, currentPage, searchUrl, genreUrl]);

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

    // Called upon in search input onChange to enable setting selectedGenre to 0, to enable the useEffect url to work properly.
    const handleInputSearchChange = (e) => {
      setSearchText(e.target.value);
      setSelectedGenre(0);
      setCurrentPage(1);
    }

    // Called upon for each genre button, deletes search text, sets the genre and resets the page to 1.
    const genreButtonPressed = (genreId) => {
      setSearchText("");
      setSelectedGenre(genreId);
      setCurrentPage(1);
    }

    // Decreases page count by 1, triggers new fetch for that page. Only performed if page count is higher than 1.
    const leftChevronBtnPressed = () => {
      if(currentPage > 1) { 
        setCurrentPage(prev => Math.max(1, prev - 1));
      }
    }

    // Increases page count by 1, triggers new fetch for that page.
    const rightChevronBtnPressed = () => {
      setCurrentPage(prev => prev +1);
    }


    return (
        
      <div className="filterPageContainer">
        <section className="inputContainer">
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchText}
            onChange={(handleInputSearchChange)}
            className="inputFieldSearch"
          />
          <hr className="divider" />
        </section>

        <FilterPageGenreButtonsComponent genreButtonPressed={genreButtonPressed} selectedGenre={selectedGenre}/>

        <section className="movieGrid">
          {loading ? (
            <ClipLoader />
          ) : (
            moviesToShow().map((movie) => (
              <HorizontalListCard key={movie.id} movie={movie} />
            ))
          )}
        </section>

        {data && data.length > 0 &&
          <section className='filterPagePageButtons'>
          <button onClick={leftChevronBtnPressed}>
            <FontAwesomeIcon icon={faChevronLeft}/>
          </button>
          <p>{currentPage}</p>
          <button onClick={rightChevronBtnPressed}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
        </section>
        }
    
      </div>
  );
};

export default FilterPage;