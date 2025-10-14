import { Link } from "react-router";
import comingSoon from '../assets/comingSoon.jpg'


const HorizontalListCard = ({movie}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w300';
     let imgPath = movie.poster_path ? `${imgBaseUrl}${size}${movie.poster_path}` : comingSoon
    return (
        <>
        <section className="cardContainer">
            <Link 
            to='/detail'
            state={{movie: movie}}>
            <img src={`${imgPath}`} alt="Picture of movie"/>
            </Link>
        </section>
        </>
    )
}
export default HorizontalListCard