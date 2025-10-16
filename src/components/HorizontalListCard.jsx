import { useDispatch, useSelector } from "react-redux";
import { showMovieDetailPage } from "../features/moviesSlice";

const HorizontalListCard = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w300';
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const scrollPosition = useSelector((state) => state.movies.scrollPosition)
    const dispatch = useDispatch();

    // console.log("Selected movie in HLC: ", selectedMovie)
    // console.log("Scroll position in HLC: ", scrollPosition)

    const openMovieDetailPage = () => {
        console.log("Selected movie in HLC: ", selectedMovie)
        console.log("Scroll position in HLC: ", scrollPosition)
        dispatch(showMovieDetailPage(movie))
        window.scrollTo({ top: 0 });
    }

    return (
        <>
        <section className="cardContainer">
            <img 
                src={`${imgBaseUrl}${size}${movie.poster_path}`} 
                alt="Picture of movie"
                onClick={openMovieDetailPage}
            />
        </section>
        </>
    )
}
export default HorizontalListCard