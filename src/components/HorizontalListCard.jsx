import { Link } from "react-router";

const HorizontalListCard = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w300';

    return (
        <>
        <section className="cardContainer">
            <Link 
            to='/detail'
            state={{movie: movie}}>
            <p>{movie.title}</p>
            <img src={`${imgBaseUrl}${size}${movie.poster_path}`} alt="Picture of movie"/>
            </Link>
        </section>
        </>
    )
}
export default HorizontalListCard