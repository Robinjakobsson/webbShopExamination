import HorizontalListCard from '../components/HorizontalListCard'
import '../css/library-page.css'
import { useSelector } from 'react-redux'
import HorizontalList from '../components/HorizontalList';

const LibraryPage = () => {
const {movies: movies, status, error} = useSelector((state) => state.movies)



  if (!movies) return <p>Loading movies...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <section className='librarySection'>
            <HorizontalList movies={movies} text={'Popular movies'} />
            <HorizontalList movies={movies} text={'Top rated movies'} />
            <HorizontalList movies={movies} text={'Currently in theatres'} />
            <HorizontalList movies={movies} text={'Kids movies'} />
            <HorizontalList movies={movies} text={'Upcoming movies'} />
        </section>
    )
}

export default LibraryPage