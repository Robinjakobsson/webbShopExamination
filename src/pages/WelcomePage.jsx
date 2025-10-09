import { Link } from 'react-router'
import '../css/welcome-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchAllMovies } from '../features/moviesSlice';

const WelcomePage = () => {

    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)

    useEffect (() => {
        dispatch(fetchAllMovies())
    }, [dispatch])
        
    return (
        <section className="welcomePage">
            <div className="welcomePageMovieRow">
                
            {movies.popular?.slice(0, 4).map((movie) => (
                <div key ={movie.id} className='welcomePageMovieCard'>
                    <Link to="/detail" state={{movie}}>
                    <img className="welcomePageImg" 
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                    </Link>
                </div>
            ))}
            </div>
        <Link className="welcomePageBtn" to="/library">Library Page</Link>
        <p className="welcomePageText">Welcome to your favorite Streamingsite!</p>
        <p className="welcomePageText">Everything there is to watch, in just one place!</p>
        </section>
    )
}

export default WelcomePage