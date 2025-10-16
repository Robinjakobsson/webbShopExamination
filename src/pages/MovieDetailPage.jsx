import '../css/movie-detail-page.css'
import { useSelector } from 'react-redux';
import DetailPageTopComponent from '../components/DetailPageTopComponent';
import DetailPageBottomComponent from '../components/DetailPageBottomComponent';

const MovieDetailPage = () => {
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const price = Number(String(selectedMovie.id).slice(0, 3)); 
    const imgUrl = "https://image.tmdb.org/t/p/w200"
    const backdropUrl = "https://image.tmdb.org/t/p/w500"
    const releaseDate = selectedMovie.release_date;
    const releaseYear = releaseDate.substring(0,4);
    const imgAltDefaultText = "Image of movie "

    return (
        <section className='detailPage'>
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