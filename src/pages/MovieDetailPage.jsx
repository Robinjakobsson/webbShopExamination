import { useLocation } from 'react-router'
import '../css/movie-detail-page.css'
import { useSelector } from 'react-redux';
import DetailPageTopComponent from '../components/DetailPageTopComponent';
import DetailPageBottomComponent from '../components/DetailPageBottomComponent';

const MovieDetailPage = () => {
    const location = useLocation();
    const {movie} = location.state;
    const userCart = useSelector((state) => state.cart.cartItems)

    const imgUrl = "https://image.tmdb.org/t/p/w200"
    const releaseDate = movie.release_date;
    const releaseYear = releaseDate.substring(0,4);
    const imgAltDefaultText = "Image of movie "

    console.log(userCart);


    return (
        <section className='detailPage'>
            <section className='detailPageTopPart'>
               <DetailPageTopComponent 
               movie={movie} 
               releaseYear={releaseYear} 
               imgUrl={imgUrl} imgAltDefaultText={imgAltDefaultText} />
                
            </section>

            <section className='detailPageBottomPart'>
                <DetailPageBottomComponent 
                movie={movie} />
            </section>

        </section>
    )
}

export default MovieDetailPage