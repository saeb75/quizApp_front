import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import toast from "react-hot-toast";
export const startGame = createAsyncThunk(
  "start/startGame",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios().get("quiz/requst-rival");
      if (response.data.foundQuiz) {
      }
      if (!response.data.foundQuiz) {
        const createdQuiz = await axios().post("quiz/create");
        if (createdQuiz.data.quiz) {
          window.location.href = `/quiz/${createdQuiz.data.quiz._id}`;
          return createdQuiz.data.quiz;
        }
      }
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  }
);

const startSlice = createSlice({
  name: "start",
  initialState: {
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [startGame.pending]: (state, action) => {
      state.isLoading = true;
    },
    [startGame.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [startGame.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default startSlice.reducer;
export const {} = startSlice.actions;
