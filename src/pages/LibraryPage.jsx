import '../css/library-page.css'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalList from '../components/HorizontalList';
import { useEffect } from 'react';
import { fetchAllMovies } from '../features/moviesSlice';

const LibraryPage = () => {
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const allMovies = movies.all;
    const dispatch = useDispatch();
    const genres = movies.genres;

    const moviesByGenre = {};

    genres.forEach((genre) => {
        const genreMovies = allMovies.filter((movie) =>
            movie.genre_ids?.includes(genre.id)
        )
        moviesByGenre[genre.name] = genreMovies;
    })

    useEffect(()=> {
        if (movies.popular.length < 1) {
            dispatch(fetchAllMovies());
        }
    })

  if (!movies) return( <p>Loading movies...</p>);
  if (status === 'failed') return( <p>Error: {error}</p>);

    return (
        <section className='librarySection'>
            <HorizontalList movies={movies.popular} text={'Popular movies'} />
            <HorizontalList movies={movies.topRated} text={'Top rated movies'} />
            <HorizontalList movies={movies.nowPlaying} text={'Currently in theatres'} />
            <HorizontalList movies={movies.kids} text={'Kids movies'} />
            <HorizontalList movies={movies.upcoming} text={'Upcoming movies'} />
            {Object.entries(moviesByGenre).map(([genreName, genreMovies]) => (
                genreMovies.length > 0 && (
                    <HorizontalList key={genreName} movies={genreMovies} text={`${genreName} movies`}/>
                )
            ))}
        </section>
    )
}

export default LibraryPage