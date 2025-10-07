import { useLocation } from 'react-router'
import '../css/genre-page.css'
import HorizontalListCard from '../components/HorizontalListCard';

const GenreDetailPage = () => {
    const location = useLocation();
    const { movies } = location.state;




    return (
        <>

        <article>
            

        </article>
        <section className='genreGrid'>
            {movies.map((movie) => (
                <HorizontalListCard key={movie.id} movie={movie} />
            ))}
        
        </section>
        </>
    )
}
export default GenreDetailPage