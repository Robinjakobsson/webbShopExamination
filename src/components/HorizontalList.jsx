import HorizontalListCard from "./HorizontalListCard"
const HorizontalList = ({movies, text}) => {
    return (
        <>
    <h1>{text}</h1>
    <section className='popularSection'>
        {movies.map((movie) => (    
            <HorizontalListCard key={movie.id} movie={movie}/>
        ))}
        </section>
        </>
    )
}
export default HorizontalList