import { useEffect } from 'react';
import HorizontalList from '../components/HorizontalList'
import '../css/library-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/moviesSlice';

const LibraryPage = () => {
const dispatch = useDispatch();
const {movies: movies, status, error} = useSelector((state) => state.movies)

useEffect(() => {
    // Hämta filmer endast om state är tomt
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
            <h1>Popular Movies</h1>
            <section className='popularSection'>
                {movies.map((movie) => (
                    <HorizontalList key={movie.id} movie={movie}/>
                ))}
            </section>
            <h1>Kids Movies</h1>
            <section className='kidsSection'>
                {movies.map((movie) => (
                    <HorizontalList key={movie.id} movie={movie}/>
                ))}
            </section>
            <h1>Top rated</h1>
            <section className='topRatedSection'>
                {movies.map((movie) => (
                    <HorizontalList key={movie.id} movie={movie}/>
                ))}
            </section>
                <h1>Currently in theatres</h1>
            <section className='theatresSection'>
                {movies.map((movie) => (
                    <HorizontalList key={movie.id} movie={movie}/>
                ))}
            </section>
                <h1>Upcoming movies</h1>
            <section className='upComingSection'>
                {movies.map((movie) => (
                    <HorizontalList key={movie.id} movie={movie}/>
                ))}
            </section>
        </>
    )
}

export default LibraryPage