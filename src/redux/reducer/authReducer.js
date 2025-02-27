import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientWithoutToken, clientWithToken } from "../../client/index";

export const authLogin = createAsyncThunk(
    "auth/login",
    async (arg, thunkAPI) => {
      return await clientWithoutToken.post('/login',arg)
        .then((res) => {
          return res.data.data;
        })
        .catch((err) => {
          return err;
        });
    }
  );



export const authForgotPassword = createAsyncThunk(
  "auth/forgot-password",
  async (arg, thunkAPI) => {
    return await clientWithoutToken.post('/forgot-password',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);


export const authLogout = createAsyncThunk(
  "auth/logout",
  async (arg, thunkAPI) => {
    return await clientWithToken.post('/logout',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);

export const authChangePassword = createAsyncThunk(
  "auth/change-password",
  async (arg, thunkAPI) => {
    return await clientWithToken.post('/change-password',arg)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
  }
);


  let initialState = {
    isAuthenticated: false,
    userId: null,
    userDetails: null,
    permissions: null,
    isLoading: false,
    error: null,
  };

  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUserId: (state, action) => {
        state.userId = action.payload;
      },
      setIsAuthenticatedFalse: (state, action) => {
        state.isAuthenticated = false;
      }

    },
    extraReducers: (builder) => {
      builder.addCase(authLogin.fulfilled, (state, action) => {

        if(action.payload.status === 200){
          state.isAuthenticated = true;
          localStorage.setItem('token', action.payload.token);
        }else{
          state.isAuthenticated = false;
        }
      });
      builder.addCase(authLogout.fulfilled, (state, action) => {
        if(action.payload){
          state.isAuthenticated = false;
          localStorage.setItem('token', "");
        }
      });
    },
  });


  export const { setUserId, setIsAuthenticatedFalse } = authSlice.actions;

  export default authSlice.reducer;

















  
