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
            <HorizontalList movies={movies.popular} text={'Popular movies'} />
            <HorizontalList movies={movies.topRated} text={'Top rated movies'} />
            <HorizontalList movies={movies.nowPlaying} text={'Currently in theatres'} />
            <HorizontalList movies={movies.kids} text={'Kids movies'} />
            <HorizontalList movies={movies.upcoming} text={'Upcoming movies'} />
        </section>
    )
}

export default LibraryPage