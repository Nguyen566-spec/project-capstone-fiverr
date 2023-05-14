import { createSlice } from "@reduxjs/toolkit";
import { dangNhap, getUserInfor, updateUser } from "./thunkAction";
import { GetAuthResponse, GetTokenResponse } from "../../react-app-env";

type InitialState = {
  auth?: GetTokenResponse<GetAuthResponse>;
  user?: GetAuthResponse;
};

const initialState: InitialState = {
  auth: undefined,
};

export const { reducer: quanLyAuthReducer, actions: quanLyAuthActions } =
  createSlice({
    name: "quanLyAuth",
    initialState,
    reducers: {
      dangXuat: (state) => {
        localStorage.removeItem("user");
        state.auth = undefined;
      },
      layAuth: (state) => {
        const data = localStorage.getItem("user");
        if (data) {
          state.auth = JSON.parse(data);
        }
      },
    },
    extraReducers(builder) {
      builder
        .addCase(dangNhap.fulfilled, (state, action) => {
          state.auth = action.payload;
          localStorage.setItem("user", JSON.stringify(action.payload));
        })
        .addCase(getUserInfor.fulfilled, (state, action) => {
          state.user = action.payload;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          if (state.auth?.user && action.payload) {
            state.auth.user = action.payload;
            state.auth.user.password = ""
            localStorage.setItem("user", JSON.stringify(state.auth))
          }
        });
    },
  });
