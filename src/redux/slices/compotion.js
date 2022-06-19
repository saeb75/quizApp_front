import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import toast from "react-hot-toast";
export const createRace = createAsyncThunk(
  "compotionSlice/compotion",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios().post(`race/create`, data);
      if (response.data.race) {
        window.location.href = `/race/${response.data.race._id}`;
      }
      return response.data.race;
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  }
);
export const getCompotion = createAsyncThunk(
  "compotionSlice/compotion",
  async (raceId, { rejectWithValue }) => {
    try {
      const response = await axios().get(`race/${raceId}`);

      return response.data.race;
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(errorMessage, {
        duration: 5000,
      });
    }
  }
);

const compotionSlice = createSlice({
  name: "compotion",
  initialState: {
    isLoading: false,
    compotion: {},
  },
  reducers: {},
  extraReducers: {
    [createRace.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createRace.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createRace.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCompotion.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCompotion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.compotion = action.payload;
    },
    [getCompotion.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default compotionSlice.reducer;
export const {} = compotionSlice.actions;
