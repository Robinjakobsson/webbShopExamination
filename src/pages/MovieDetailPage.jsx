import '../css/movie-detail-page.css'
import { useDispatch, useSelector } from 'react-redux';
import DetailPageTopComponent from '../components/DetailPageTopComponent';
import DetailPageBottomComponent from '../components/DetailPageBottomComponent';
import { hideMovieDetailPage } from '../features/moviesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const MovieDetailPage = () => {
    const dispatch = useDispatch();
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const scrollPosition = useSelector((state) => state.movies.scrollPosition)
    const price = Number(String(selectedMovie.id).slice(0, 3)); 
    
    const imgUrl = "https://image.tmdb.org/t/p/w200"
    const backdropUrl = "https://image.tmdb.org/t/p/w500"
    const releaseDate = selectedMovie.release_date;
    const releaseYear = releaseDate.substring(0,4);
    const imgAltDefaultText = "Image of movie "

    console.log("Selected movie in MDP: ", selectedMovie)
    console.log("Scroll position in MDP: ", scrollPosition)

    const closeMovieDetailPage = () => {
        dispatch(hideMovieDetailPage())
        setTimeout(() => {
            window.scrollTo({ top: scrollPosition || 0, behavior: 'auto' });
        }, 150);
    }

    return (
        <section className='detailPage'>
            <FontAwesomeIcon icon={faCircleXmark} className='icon' onClick={closeMovieDetailPage}/>

            <article className='detailPageBackdropWrapper'>
                <img className='detailPageBackdropImg' src={backdropUrl+selectedMovie.backdrop_path}></img>
            </article>
            
            <section className='detailPageTopPart'>
               <DetailPageTopComponent 
               movie={selectedMovie} 
               releaseYear={releaseYear} 
               imgUrl={imgUrl} imgAltDefaultText={imgAltDefaultText} 
               price = {price}/>
            </section>

            <section className='detailPageBottomPart'>
                <DetailPageBottomComponent 
                movie={selectedMovie} />
            </section>

        </section>
    )
}

export default MovieDetailPage