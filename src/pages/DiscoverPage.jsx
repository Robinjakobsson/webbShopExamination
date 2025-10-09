import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HorizontalListCard from "../components/HorizontalListCard";
import "../css/discover-page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


const DiscoverPage = () => {

    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const [randomMovies, setRandomMovies] = useState([]);

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
            <article className="discoverPageRefreshBtnContainer">
                <button onClick={() => generateSixteenRandomIndexes(allMovies)}>
                    <FontAwesomeIcon icon={faArrowsRotate}/>
                </button>
            </article>
            
            <section className="discoverPageAllMovies genreGrid">
                {randomMovies.map((movie) => (
                    <HorizontalListCard key={movie.id} movie={movie} className="discoverPageSingleMovie"/>
                ))}
            </section>
        </section>
    )
}

export default DiscoverPage;