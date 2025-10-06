import { useEffect } from 'react';
import HorizontalListCard from '../components/HorizontalListCard'
import '../css/library-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/moviesSlice';
import HorizontalList from '../components/HorizontalList';

const LibraryPage = () => {
const dispatch = useDispatch();
const {movies: movies, status, error} = useSelector((state) => state.movies)

useEffect(() => {
    if (!movies || movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies]);

  if (status === 'loading') return <p>Loading movies...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <>
        <header>
                
            </header>
            <HorizontalList movies={movies} text={'Popular movies'} />
            <HorizontalList movies={movies} text={'Top rated movies'} />
            <HorizontalList movies={movies} text={'Currently in theatres'} />
            <HorizontalList movies={movies} text={'Kids movies'} />
            <HorizontalList movies={movies} text={'Upcoming movies'} />
            
        </>
    )
}

export default LibraryPage