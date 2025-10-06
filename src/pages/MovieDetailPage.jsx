import { Link } from 'react-router'
import { useLocation } from 'react-router'
import '../css/movie-detail-page.css'

const MovieDetailPage = () => {
    const location = useLocation();
    const {movie} = location.state;
    const imgUrl = "https://image.tmdb.org/t/p/w200"
    const releaseDate = movie.release_date;
    const releaseYear = releaseDate.substring(0,4);
    const imgAltDefaultText = "Image of movie "


    return (
        <section className='detailPage'>
            <section className='detailPageTopPart'>
                {/* <Link className='detailPageBtnReturn' to="/">Return</Link> */}
                <article className='detailPageTopBottomPart'>
                    <img className='detailPageMovieImg' src={`${imgUrl}${movie.poster_path}`} alt={`${imgAltDefaultText}${movie.title}`} />
                    <article className='detailPageTopInfo'>
                        <p>Price: 199kr</p>
                        <h2>{movie.title}</h2>
                        <article className='detailPageSpecs'>
                            <p>{releaseYear}</p>
                            <p>Rating: {movie.vote_average.toFixed(1)}</p>
                        </article>
                    </article>
                </article>
                
            </section>

            <section className='detailPageBottomPart'>
                <article className='detailPageBottomTopPart'>
                    <button className='detailPageBtnAddMovieToCart'>Add to cart</button>
                </article>

                <article className='detailPageBottomBottomPart'>
                    <p className='detailPageMovieOverview'>{movie.overview}</p>
                    <article className='detailPageLanguageInfo'>
                        <p><strong>Language</strong></p>
                        <p></p>
                    </article>
                </article>
            </section>

        </section>
    )
}

export default MovieDetailPage