import { Link } from 'react-router'
import '../css/welcome-page.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchMovies } from '../features/moviesSlice';

const WelcomePage = () => {

    const dispatch = useDispatch();
    const {movies: movies, status, error} = useSelector((state) => state.movies)

    useEffect (() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <>
        
        </>
    )
}

export default WelcomePage