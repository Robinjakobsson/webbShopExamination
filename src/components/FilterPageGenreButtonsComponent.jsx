


const FilterPageGenreButtonsComponent = ({genreButtonPressed}) => {
    return (
        <section className='filterPageGenreButtons'>
        <button onClick={() => genreButtonPressed(28)}>Action</button>
        <button onClick={() => genreButtonPressed(12)}>Adventure</button>
        <button onClick={() => genreButtonPressed(16)}>Animation</button>
        <button onClick={() => genreButtonPressed(35)}>Comedy</button>
        <button onClick={() => genreButtonPressed(80)}>Crime</button>
        <button onClick={() => genreButtonPressed(99)}>Documentary</button>
        <button onClick={() => genreButtonPressed(18)}>Drama</button>
        <button onClick={() => genreButtonPressed(10751)}>Family</button>
        <button onClick={() => genreButtonPressed(14)}>Fantasy</button>
        <button onClick={() => genreButtonPressed(36)}>History</button>
        <button onClick={() => genreButtonPressed(27)}>Horror</button>
        <button onClick={() => genreButtonPressed(10402)}>Music</button>
        <button onClick={() => genreButtonPressed(9648)}>Mystery</button>
        <button onClick={() => genreButtonPressed(10749)}>Romance</button>
        <button onClick={() => genreButtonPressed(878)}>Sci-fi</button>
        <button onClick={() => genreButtonPressed(10770)}>TV Movie</button>
        <button onClick={() => genreButtonPressed(53)}>Thriller</button>
        <button onClick={() => genreButtonPressed(10752)}>War</button>
        <button onClick={() => genreButtonPressed(37)}>Western</button>
      </section>
    )
}

export default FilterPageGenreButtonsComponent;