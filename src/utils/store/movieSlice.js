import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    currentlySelected: {},
    nowPlaying: [],
    playingTrailer: null,
    popular: [],
    topRated: [],
    trending: [],
  },
  reducers: {
    addCurrentlySelected: (state, action) => {
      state.currentlySelected = action.payload;
    },
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
  addTrendingMovies,
  addCurrentlySelected,
} = movieSlice.actions;
export default movieSlice.reducer;
