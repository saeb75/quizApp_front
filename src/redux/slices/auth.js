import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import toast from "react-hot-toast";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios().post("auth/register", data);
      toast.success("you are register successfuly", {
        id: toastId,
      });
      setTimeout(() => {
        return (window.location.href = "/login");
      }, 2000);

      return response.data;
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(
        errorMessage,

        {
          duration: 5000,
          id: toastId,
        }
      );
      return rejectWithValue(errorMessage);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios().post("auth/login", data);
      toast.success("you are login successfuly", {
        id: toastId,
      });
      // setTimeout(() => {
      //   return (window.location.href = "/login");
      // }, 2000);

      return response.data;
    } catch (error) {
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      toast.error(
        errorMessage,

        {
          duration: 5000,
          id: toastId,
        }
      );
      return rejectWithValue(errorMessage);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    registerError: null,
    loginError: null,
    loading: false,
    token: null,
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true;
      state.registerError = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.registerError = action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.registerError = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.loginError = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const {} = AuthSlice.actions;
