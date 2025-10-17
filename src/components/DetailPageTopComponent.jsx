import comingSoon from '../assets/comingSoon.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { hideMovieDetailPage } from '../features/moviesSlice';


const DetailPageTopComponent = ({movie, releaseYear, imgUrl, imgAltDefaultText, price}) => {
    const dispatch = useDispatch();
    const scrollPosition = useSelector((state) => state.movies.scrollPosition)
    let imgPath = movie.poster_path ? `${imgUrl}${movie.poster_path}` : comingSoon

    const closeMovieDetailPage = () => {
        dispatch(hideMovieDetailPage())
        setTimeout(() => {
            window.scrollTo({ top: scrollPosition || 0, behavior: 'auto' });
        }, 150);
    }

    return (
        <article className='detailPageTopBottomPart'>
            <FontAwesomeIcon icon={faCircleXmark} className='detailPageXicon' onClick={closeMovieDetailPage}/>
            <img className='detailPageMovieImg' src={imgPath} alt={imgAltDefaultText+movie.title}/>
            <article className='detailPageTopInfo'>
                <p>Price: {price}kr</p>
                <h2>{movie.title}</h2>
                <p>Original title: {movie.original_title}</p>
                <article className='detailPageSpecs'>
                    <p>{releaseYear}</p>
                    <p>Rating: {movie.vote_average.toFixed(1)}</p>
                </article>
            </article>
        </article>
    )
}
export default DetailPageTopComponent