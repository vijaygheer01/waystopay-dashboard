import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientWithoutToken, clientWithToken } from "../../client/index";


export const dashboardIndex = createAsyncThunk(
  "dashboard/index",
  async (arg, thunkAPI) => {
    return await clientWithToken.get('/dashboard',arg)
    .then((res) => {
      console.log('timeto call dashboard', new Date().toLocaleString());
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

export const getUserDetails = createAsyncThunk(
  "user/details",
  async (arg, thunkAPI) => {
    return await clientWithToken.get(`/user/${arg}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);

export const getTransactions = createAsyncThunk(
  "transactions/index",
  async (arg, thunkAPI) => {
    return await clientWithToken.get('/transactions',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);  

export const getTransactionDetails = createAsyncThunk(
  "transactions/details",
  async (arg, thunkAPI) => {
    return await clientWithToken.get(`/transaction/${arg}`)
  }
);


  let initialState = {
    dashboard: null,
    isLoading: true,
    error: null,
    users: null,
    userDetails: null,
    transactions: null,
    transactionDetails: null,
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
        state.isLoading = true;
        state.dashboard = action.payload;
      });
      builder.addCase(userIndex.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(userIndex.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
      builder.addCase(getUserDetails.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
      });
      builder.addCase(getTransactions.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      });
      builder.addCase(getTransactionDetails.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(getTransactionDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactionDetails = action.payload;
      });
    }
  });


  export const {  } = dashboardSlice.actions;

  export default dashboardSlice.reducer;

















  
