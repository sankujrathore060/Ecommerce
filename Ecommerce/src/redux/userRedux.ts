import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterUser } from "model/User/User";

interface IUserState { 
  currentUser: IRegisterUser,
  isLoading: boolean,
  error: boolean,
  errorMessage?: any
}

/* eslint-disable no-unused-expressions */
const initialState: IUserState = {
  currentUser: {
    username: "",
    password: "",
    email: "",
    isAdmin: false,
    accessToken: ""
  },
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;   
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<IRegisterUser>) => {
      state.isLoading= false;      
      state.error = false;
      state.currentUser = action.payload
    },
    loginFailure: (state) => {      
      state.error = true;
      state.isLoading= false;
      // state.errorMessage = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
