import { useLocation } from 'react-router'
import '../css/genre-page.css'

const GenreDetailPage = () => {
    const location = useLocation();
    const { movies } = location.state;




    return (
        <>
            {movies.map((movie) => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        

        </>
    )
}
export default GenreDetailPage