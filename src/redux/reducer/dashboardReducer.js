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


  let initialState = {
    dashboard: null,
  };

  export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
     
    },
  });


  export const {  } = dashboardSlice.actions;

  export default dashboardSlice.reducer;

















  
