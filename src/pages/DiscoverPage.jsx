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
    const genres = movies.genres;


    const [randomMovies, setRandomMovies] = useState([]);
    const [randomLetter, setRandomLetter] = useState("");
    const [randomGenre, setRandomGenre] = useState("");
    const [foundText, setFoundText] = useState("Press the button to randomise genre and letter!");

    const moviesByGenre = {};

    genres.forEach((genre) => {
        const genreMovies = allMovies.filter((movie) =>
            movie.genre_ids?.includes(genre.id)
        )
        moviesByGenre[genre.name] = genreMovies;
    })

    console.log('moviesByGenre', moviesByGenre)

    useEffect(() => {
        if(selectedMovie !== null) {
            dispatch(hideMovieDetailPage());
        }
    }, [])

    useEffect(() => {
        generateSixteenRandomIndexes(allMovies);
    }, []);

    const openMovieDetailPage = () => {
        dispatch(showMovieDetailPage(item.movie))
        window.scrollTo({ top: 0 });
    }

    function getRandomMovies() {

        if (!allMovies.length || !genres.length) return;

        //array of all genre names
        const movieGenres = genres.map((genre) => genre.name)
        const movieGenresIndex = Math.floor(Math.random() * movieGenres.length);
        const chosenGenreName = movieGenres[movieGenresIndex];
        console.log('randomGenre', randomGenre)


        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomLetter = alphabet[randomIndex];
        console.log('randomLetter', randomLetter)

        const chosenGenre = genres.find((genre) => genre.name === chosenGenreName);
        const chosenGenreId = chosenGenre ? chosenGenre.id : null;
        console.log('chosenGenreId', chosenGenreId)

        const filteredMovies = allMovies.filter(
            movie =>
                movie.genre_ids?.includes(chosenGenreId) &&
                movie.title.toLowerCase().includes(randomLetter.toLowerCase())
        );




        const shuffled = [...filteredMovies].sort(() => 0.5 - Math.random());

        setRandomGenre(chosenGenreName);
        setRandomLetter(randomLetter);
        setRandomMovies(shuffled.slice(0, 16));

        if (shuffled.length > 0) {
            setFoundText(`Here comes ${chosenGenreName.toLowerCase()} movies that have letter ${randomLetter} in them!`);
        } else if (shuffled.length < 1) {
            setFoundText("No movies found, try again!");
        }
        console.log('randomGenre', chosenGenre);
        console.log('randomLetter', randomLetter);
        console.log('randomMovies', shuffled.slice(0, 16));
    }

    const generateSixteenRandomIndexes = (allMovies) => {
        setRandomMovies([]);
        getRandomMovies();
        console.log('allMovies', allMovies)
    }



    return (
        <section className="discoverPage">
            {!showMovieDetail &&
            <>
                <article className="discoverPageRefreshBtnContainer">
                    <button onClick={() => generateSixteenRandomIndexes(allMovies)}>
                        <FontAwesomeIcon icon={faArrowsRotate}/>
                    </button>
                </article>

                <section className="discoverPageRandomiserContainer">
                    <section className="discoverPageGenre" >
                        <h3>Genre:</h3>
                        <p>  {randomGenre}</p>
                    </section>
                    <section className="discoverPageLetter" >
                        <h3>Letter:</h3>
                        <p>{randomLetter}</p>
                    </section>
                </section>
                <p className="noMoviesFoundText">{foundText}</p>
                
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

    // return (
    //     <section className="discoverPage">
    //         <article className="discoverPageRefreshBtnContainer">
    //             <button onClick={() => generateSixteenRandomIndexes(allMovies)}>
    //                 <FontAwesomeIcon icon={faArrowsRotate} />
    //             </button>
    //         </article>
            
    //         <section className="discoverPageAllMovies genreGrid">
    //             {randomMovies.map((movie) => (
    //                 <HorizontalListCard key={movie.id} movie={movie} className="discoverPageSingleMovie" />
    //             ))}
    //         </section>
    //     </section>
    // )
}

export default DiscoverPage;