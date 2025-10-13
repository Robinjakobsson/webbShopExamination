import HorizontalListCard from "./HorizontalListCard"
import { Link } from "react-router"
const HorizontalList = ({movies, text}) => {

    const crocodileMouth = '>'

    return (
        <>
    <h1>{text}</h1>
        <Link className='showAllText' to='/genre' state={{movies}}>Show all {crocodileMouth}</Link>
    <section className='popularSection'>
        {movies.map((movie) => (    
            <HorizontalListCard key={movie.id} movie={movie}/>
        ))}
        </section>
        </>
    )
}
export default HorizontalList