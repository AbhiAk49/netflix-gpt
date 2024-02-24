import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    playingTrailer: null,
    popular: [],
    topRated: [],
    trending: []
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying.push(...action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.playingTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular.push(...action.payload);
    },
    addTopRatedMovies: (state, action) => {
      state.topRated.push(...action.payload);
    },
    addTrendingMovies: (state, action) => {
      state.trending.push(...action.payload);
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies
} = movieSlice.actions;
export default movieSlice.reducer;
