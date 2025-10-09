
import { useSelector } from "react-redux";
import HorizontalListCard from "../components/HorizontalListCard";
import "../css/new-movies-page.css";


export default function NewMoviesPage() {
const {movies: movies, status, error} = useSelector((state) => state.movies)

    return (

        <div className="newMoviesContainer">
            <h2>New & Upcoming Movies</h2>
            <section className="movieGrid">
                {movies.upcoming.map((movie) => (
                    <HorizontalListCard key={movie.id} movie={movie} />
                ))}
            </section>
        </div>
    );
};
