import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    playingTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying.push(...action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.playingTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
