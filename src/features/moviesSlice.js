import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const APIKEY = import.meta.env.VITE_API_KEY;


const initialState = {
    movies: [],
    status: 'idle',
    error: null,
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`);
    const data = await response.json();
    console.log(data.results)
    return data.results;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchMovies.fulfilled, (state, action ) => {
            state.movies = action.payload
            state.status = 'succeeded'
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
})

export default movieSlice.reducer

