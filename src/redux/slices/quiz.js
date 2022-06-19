import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import toast from "react-hot-toast";
export const getQuiz = createAsyncThunk(
  "start/quiz",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios().get(`quiz/${params.quizId}`);

      return response.data.quiz;
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  }
);

const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoading: false,
    quiz: {},
    quizGetError: null,
  },
  reducers: {},
  extraReducers: {
    [getQuiz.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getQuiz.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.quiz = action.payload;
    },
    [getQuiz.rejected]: (state, action) => {
      state.isLoading = false;
      state.quizGetError = action.payload;
    },
  },
});

export default QuizSlice.reducer;
export const {} = QuizSlice.actions;
