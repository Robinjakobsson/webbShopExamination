import comingSoon from '../assets/comingSoon.jpg'
import { useDispatch, useSelector } from "react-redux";
import { showMovieDetailPage } from "../features/moviesSlice";

const HorizontalListCard = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w300';
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const scrollPosition = useSelector((state) => state.movies.scrollPosition)
    const dispatch = useDispatch();

    const openMovieDetailPage = () => {
        console.log("Selected movie in HLC: ", selectedMovie)
        console.log("Scroll position in HLC: ", scrollPosition)
        dispatch(showMovieDetailPage(movie))
        window.scrollTo({ top: 0 });
    }

    let imgPath = movie.poster_path ? `${imgBaseUrl}${size}${movie.poster_path}` : comingSoon
    
    return (
        <>
        <section className="cardContainer">
            <img 
                src={`${imgPath}`}
                alt="Picture of movie"
                onClick={openMovieDetailPage}
            />
        </section>
        </>
    )
}
export default HorizontalListCard