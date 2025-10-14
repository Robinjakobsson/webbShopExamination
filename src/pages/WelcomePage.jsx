import { Link } from 'react-router'
import '../css/welcome-page.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchAllMovies } from '../features/moviesSlice';
import Particles from '../components/BackgroundParticles';

const WelcomePage = () => {
        
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
        <Link className="welcomePageBtn" to="/library">Library Page</Link>
        <p className="welcomePageText">Welcome to your favorite movie-site!</p>
        <p className="welcomePageText">Everything there is to watch, in just one place!</p>
        </div>
        </section>
    );
};

export default WelcomePage