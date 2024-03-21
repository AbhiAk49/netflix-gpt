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
    searchResults: [],
    searchForString: null
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
    populateSearchedMovies: (state, action) => {
      state.searchResults.push(...action.payload);
    },
    clearSearchedMovies: (state) => {
      state.searchResults = [];
    },
    setSearchForString: (state, action) => {
      state.searchForString = action.payload;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addCurrentlySelected,
  populateSearchedMovies,
  clearSearchedMovies,
  setSearchForString
} = movieSlice.actions;
export default movieSlice.reducer;
