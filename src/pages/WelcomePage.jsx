import { Link } from 'react-router'
import '../css/welcome-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchAllMovies } from '../features/moviesSlice';
import Particles from '../components/BackgroundParticles';

const WelcomePage = () => {

    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)

    useEffect (() => {
        dispatch(fetchAllMovies())
    }, [dispatch])
        
    return (
        <section className="welcomePage">
            <div className="particles-wrapper">
                <Particles
                particleColors={['#FF00D9'/*magenta*/, '#04FF00'/*limegrön*/, '#00FFFB'/*isblå */]} // ändrar färgerna på partiklarna, kan lägga till fler
                particleCount={500} //ändra antalet partiklar
                particleSpread={5} //ändra tätheten på partiklarna
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true} //pga. pointer-events: none; i CSSen så är fungerar inte denna raden.
                alphaParticles={false}
                disableRotation={false}
                />
            </div>
            
            <div className="welcomePageContent">
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
        <p className="welcomePageText">Welcome to your favorite movie-site!</p>
        <p className="welcomePageText">Everything there is to watch, in just one place!</p>
        </div>
        </section>
    );
};

export default WelcomePage