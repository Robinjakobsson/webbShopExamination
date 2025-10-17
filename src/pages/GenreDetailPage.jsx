import { useLocation } from 'react-router'
import '../css/genre-page.css'
import HorizontalListCard from '../components/HorizontalListCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetailPage from './MovieDetailPage';
import { hideMovieDetailPage } from '../features/moviesSlice';

const GenreDetailPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { movies, text } = location.state;
    const showMovieDetail = useSelector((state) => state.movies.showMovieDetail);
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [])

    useEffect(() => {
        if(selectedMovie !== null) {
            dispatch(hideMovieDetailPage());
        }
    }, [])

    
    return (
        <>
            {!showMovieDetail &&
            <>
                <h1 className='genrePageTitle'>{text}</h1>
                <section className='genreGrid'>
                    {movies.map((movie) => (
                        <HorizontalListCard key={movie.id} movie={movie} />
                    ))}
                </section>
            </>
            }

            {showMovieDetail &&
                <MovieDetailPage />
            }
        </>
    )
}
export default GenreDetailPage