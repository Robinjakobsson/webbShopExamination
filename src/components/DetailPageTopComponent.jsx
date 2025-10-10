const DetailPageTopComponent = ({movie, releaseYear, imgUrl, imgAltDefaultText, price}) => {
    return (
     <article className='detailPageTopBottomPart'>
                    <img className='detailPageMovieImg' src={`${imgUrl}${movie.poster_path}`} alt={`${imgAltDefaultText}${movie.title}`} />
                    <article className='detailPageTopInfo'>
                        <p>Price: {price}kr</p>
                        <h2>{movie.title}</h2>
                        <article className='detailPageSpecs'>
                            <p>{releaseYear}</p>
                            <p>Rating: {movie.vote_average.toFixed(1)}</p>
                        </article>
                    </article>
                </article>
    )
}
export default DetailPageTopComponent