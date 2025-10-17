import comingSoon from '../assets/comingSoon.jpg'
import { useDispatch, useSelector } from "react-redux";
import { showMovieDetailPage } from "../features/moviesSlice";

const HorizontalListCard = ({movie}) => {
    const dispatch = useDispatch();
    const imgBaseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w300';
    let imgPath = movie.poster_path ? `${imgBaseUrl}${size}${movie.poster_path}` : comingSoon

    const openMovieDetailPage = () => {
        dispatch(showMovieDetailPage(movie))
        window.scrollTo({ top: 0 });
    }

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