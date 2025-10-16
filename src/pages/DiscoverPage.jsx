import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import HorizontalListCard from "../components/HorizontalListCard";
import "../css/discover-page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


const DiscoverPage = () => {
    const APIKEY = import.meta.env.VITE_API_KEY;
  //  const { movies: movies, status, error } = useSelector((state) => state.movies)
   


    const [dbMovies, setDbMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [randomMovies, setRandomMovies] = useState([]);
    const [randomLetter, setRandomLetter] = useState("");
    const [randomGenre, setRandomGenre] = useState("");
    const [foundText, setFoundText] = useState("Press the button to randomise genre and letter!");

    // const moviesByGenre = {};

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`);
                const data = await response.json();
                setGenres(data.genres || []);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        }

        getGenres();
    }, []);


useEffect(() => {
   const getMovies = async () => {
 try {
    const startPage = Math.floor(Math.random() * (500 - 5))

    let allMovies = [];
    // Fetch first 5 pages to have a larger pool of movies
    for (let page = startPage; page <= startPage + 5; page++) {

                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&page=${page}`);
                const data = await response.json();
                if (data.results) allMovies = [...allMovies, ...data.results];
            }
                setDbMovies(allMovies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }

        getMovies();
    }, []);





    function getRandomMovies() {

        if (!dbMovies.length || !genres.length) return;

        //array of all genre names
        
        const movieGenre = genres[Math.floor(Math.random() * genres.length)];
        const chosenGenreName = movieGenre.name;
        const genreId = movieGenre.id;
        console.log('genreId', genreId)


        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomLetter = alphabet[randomIndex];
        console.log('randomLetter', randomLetter)

        // const chosenGenre = genres.find((genre) => genre.name === chosenGenreName);
        // const chosenGenreId = chosenGenre ? chosenGenre.id : null;
        // console.log('chosenGenreId', chosenGenreId)

        const filteredMovies = dbMovies.filter(
            (movie) =>
                movie.genre_ids?.includes(genreId) &&
                movie.title.toLowerCase().includes(randomLetter.toLowerCase())
        );

        const shuffled = [...filteredMovies].sort(() => 0.5 - Math.random());

        setRandomGenre(chosenGenreName);
        setRandomLetter(randomLetter);
        setRandomMovies(shuffled.slice(0, 16));

        if (shuffled.length > 0) {
            setFoundText(`Here comes ${chosenGenreName.toLowerCase()} movies that have letter ${randomLetter} in them!`);
        } else {
            setFoundText("No movies found, try again!");
        }
        console.log('randomGenre', chosenGenreName);
        console.log('randomLetter', randomLetter);
        console.log('randomMovies', shuffled.slice(0, 16));
    }


    // const generateSixteenRandomIndexes = (allMovies) => {
    //     setRandomMovies([]);
    //     getRandomMovies();
    //     console.log('allMovies', allMovies)
    // }

    useEffect(() => {
        if (dbMovies.length && genres.length) {
            getRandomMovies();
        }
    }, [dbMovies, genres]);

    return (
        <section className="discoverPage">
            <article className="discoverPageRefreshBtnContainer">
                <button onClick={getRandomMovies}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
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
                    <HorizontalListCard key={movie.id} movie={movie} className="discoverPageSingleMovie" />
                ))}
            </section>
        </section>
    )
}

export default DiscoverPage;