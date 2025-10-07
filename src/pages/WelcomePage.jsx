import { Link } from 'react-router'
import '../css/welcome-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchMovies } from '../features/moviesSlice';

const WelcomePage = () => {

    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)

    useEffect (() => {
        dispatch(fetchMovies())
    }, [dispatch])
        
    return (
        <section className="welcomePage">
            <div className="welcomePageMovieRow">
            {movies.slice(0, 4).map((movie) => (
                <div key ={movie.id}>
                    <Link to="/detail" state={{movie}}>
                    <img className="welcomePageImg" 
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                    </Link>
                </div>
            ))}
            </div>
        <Link className="welcomePageBtn" to="/library">Library Page</Link>
        <p className="welcomePageText">Välkommen till din nästa favoritstream!</p>
        <p className="welcomePageText">Allt du vill se, på ett ställe!</p>
        </section>
    )
}

export default WelcomePage