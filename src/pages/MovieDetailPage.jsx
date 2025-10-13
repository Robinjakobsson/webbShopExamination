import { useLocation } from 'react-router'
import '../css/movie-detail-page.css'
import { useSelector } from 'react-redux';
import DetailPageTopComponent from '../components/DetailPageTopComponent';
import DetailPageBottomComponent from '../components/DetailPageBottomComponent';

const MovieDetailPage = () => {
    const location = useLocation();
    const {movie} = location.state;
    const userCart = useSelector((state) => state.cart.cartItems)
    const price = Number(String(movie.id).slice(0, 3)); 

    const imgUrl = "https://image.tmdb.org/t/p/w200"
    const backdropUrl = "https://image.tmdb.org/t/p/w500"
    const releaseDate = movie.release_date;
    const releaseYear = releaseDate.substring(0,4);
    const imgAltDefaultText = "Image of movie "

    console.log(userCart);


    return (
        <section className='detailPage'>

            <article className='detailPageBackdropWrapper'>
                <img className='detailPageBackdropImg' src={backdropUrl+movie.backdrop_path}></img>
            </article>
            
            <section className='detailPageTopPart'>
               <DetailPageTopComponent 
               movie={movie} 
               releaseYear={releaseYear} 
               imgUrl={imgUrl} imgAltDefaultText={imgAltDefaultText} 
               price = {price}/>
            </section>

            <section className='detailPageBottomPart'>
                <DetailPageBottomComponent 
                movie={movie} />
            </section>

        </section>
    )
}

export default MovieDetailPage