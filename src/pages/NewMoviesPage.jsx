import { useDispatch, useSelector } from "react-redux";
import HorizontalListCard from "../components/HorizontalListCard";
import "../css/new-movies-page.css";
import { hideMovieDetailPage, showMovieDetailPage } from "../features/moviesSlice";
import MovieDetailPage from "./MovieDetailPage";
import { useEffect } from "react";


export default function NewMoviesPage() {
    const {movies: movies, status, error} = useSelector((state) => state.movies)
    const dispatch = useDispatch();
    const showMovieDetail = useSelector((state) => state.movies.showMovieDetail);
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        if(selectedMovie !== null) {
            dispatch(hideMovieDetailPage());
        }
    }, [])

    const openMovieDetailPage = () => {
        dispatch(showMovieDetailPage(item.movie))
        window.scrollTo({ top: 0 });
    }

    return (
        <div className="newMoviesContainer">
            {!showMovieDetail &&
            <>
                <h2>New & Upcoming Movies</h2>
                <section className="movieGrid">
                    {movies.upcoming.map((movie) => (
                        <HorizontalListCard key={movie.id} movie={movie} onClick={openMovieDetailPage}/>
                    ))}
                </section>
            </>
            }

            {showMovieDetail &&
                <MovieDetailPage />
            }
        </div>
    );
};
