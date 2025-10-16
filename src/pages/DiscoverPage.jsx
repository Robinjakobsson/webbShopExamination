import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalListCard from "../components/HorizontalListCard";
import "../css/discover-page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { hideMovieDetailPage, showMovieDetailPage } from "../features/moviesSlice";
import MovieDetailPage from "./MovieDetailPage";


const DiscoverPage = () => {

    const dispatch = useDispatch();
    const showMovieDetail = useSelector((state) => state.movies.showMovieDetail);
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const [randomMovies, setRandomMovies] = useState([]);

    useEffect(() => {
        if(selectedMovie !== null) {
            dispatch(hideMovieDetailPage());
        }
    }, [])

    const openMovieDetailPage = () => {
        dispatch(showMovieDetailPage(item.movie))
        window.scrollTo({ top: 0 });
    }

    const generateSixteenRandomIndexes = (allMovies) => {
        setRandomMovies([]);
        const shuffledList = [...allMovies].sort(() => 0.5 - Math.random());
        const listofSixteenMovies = shuffledList.slice(0,15);
        setRandomMovies(listofSixteenMovies);
    }

    useEffect(() => {
        generateSixteenRandomIndexes(allMovies);
    }, []);

    return(
        <section className="discoverPage">
            {!showMovieDetail &&
            <>
                <article className="discoverPageRefreshBtnContainer">
                    <button onClick={() => generateSixteenRandomIndexes(allMovies)}>
                        <FontAwesomeIcon icon={faArrowsRotate}/>
                    </button>
                </article>
                
                <section className="discoverPageAllMovies genreGrid">
                    {randomMovies.map((movie) => (
                        <HorizontalListCard key={movie.id} movie={movie} className="discoverPageSingleMovie" onClick={openMovieDetailPage}/>
                    ))}
                </section>
            </>
            }

            {showMovieDetail &&
                <MovieDetailPage />
            }
        </section>
    )
}

export default DiscoverPage;