import { useSelector } from "react-redux";



const FilterPageGenreButtonsComponent = ({genreButtonPressed, selectedGenre}) => {

  const {movies: movies, status, error} = useSelector((state) => state.movies)
  const genres = movies.genres;

    return (
        <section className='filterPageGenreButtons'>
          {genres.map((genre) => (
            <button 
              key={genre.id} 
              onClick={() => genreButtonPressed(genre.id)}
              className={selectedGenre === genre.id ? "activeGenreButton" : ""}
            >
              {genre.name}
            </button>
          ))}
      </section>
    )
}

export default FilterPageGenreButtonsComponent;