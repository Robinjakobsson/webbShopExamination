import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const APIKEY = import.meta.env.VITE_API_KEY;


const initialState = {
    movies: {
        popular: [],
        topRated: [],
        upcoming: [],
        kids: [],
        nowPlaying: [],
    },
    status: 'idle',
    error: null,
}

        /**
         * Returns all movies from the endpoints listed
         * To call for movies use {movies.genre.title} EXAMPLE
         */
export const fetchAllMovies = createAsyncThunk("movies/fetchAllMovies", async () => {
    const endpoints = {
        // placing all endpoints in an object called endpoints
        popular: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
        topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
        upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
        kids: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=16,10751&language=&page=1`,
        nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    };
            // making an array of the different genres and using Promise.all to fetch every endpoint
    const [popular, topRated, upcoming, kids, nowPlaying] = await Promise.all(
        Object.values(endpoints).map((url) => fetch(url).then(response => {
            const data = response.json();
            console.log(data)
            return data;
        }))
    );

    return {
        // return all the results from the fetch.
        popular: popular.results,
        topRated: topRated.results,
        upcoming: upcoming.results,
        kids: kids.results,
        nowPlaying: nowPlaying.results,
    };
})
    //Singular fetch method returns list of popular movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en_US&page=1`);
    const data = await response.json();
    console.log(data.results)
    return data.results;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllMovies.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchAllMovies.fulfilled, (state, action ) => {
            state.movies = action.payload
            state.status = 'succeeded'
        })
        builder.addCase(fetchAllMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
})

export default movieSlice.reducer

