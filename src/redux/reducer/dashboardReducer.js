import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientWithoutToken, clientWithToken } from "../../client/index";


export const dashboardIndex = createAsyncThunk(
  "dashboard/index",
  async (arg, thunkAPI) => {
    return await clientWithToken.get('/dashboard',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);

export const userIndex = createAsyncThunk(
  "user/index",
  async (arg, thunkAPI) => {
    return await clientWithToken.get('/users',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);


  let initialState = {
    dashboard: null,
    isLoading: false,
    error: null,
    users: null,
  };

  export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder.addCase(dashboardIndex.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(dashboardIndex.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboard = action.payload;
      });
      builder.addCase(userIndex.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(userIndex.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
    },
  });


  export const {  } = dashboardSlice.actions;

  export default dashboardSlice.reducer;

















  
