import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying.push(...action.payload);
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;