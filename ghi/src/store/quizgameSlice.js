import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  time_completed: "",
};

export const quizgameSlice = createSlice({
  name: "quizgameScore",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    setTimeCompleted: (state, { payload }) => {
      state.time_completed = payload;
    },
    resetGame: () => initialState,
  },
});

export const { incrementScore, setTimeCompleted, resetGame } =
  quizgameSlice.actions;
export default quizgameSlice.reducer;
