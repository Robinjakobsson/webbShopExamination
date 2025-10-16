import comingSoon from '../assets/comingSoon.jpg'


const DetailPageTopComponent = ({movie, releaseYear, imgUrl, imgAltDefaultText, price}) => {

    let imgPath = movie.poster_path ? `${imgUrl}${movie.poster_path}` : comingSoon
    return (
        <article className='detailPageTopBottomPart'>
            <img className='detailPageMovieImg' src={imgPath} />
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