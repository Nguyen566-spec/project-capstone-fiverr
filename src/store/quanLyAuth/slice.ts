import { createSlice } from "@reduxjs/toolkit";
import { dangNhap } from "./thunkAction";
import { GetAuthResponse, GetTokenResponse } from "../../react-app-env";

type InitialState = {
  auth?: GetTokenResponse<GetAuthResponse>;
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
      builder.addCase(dangNhap.fulfilled, (state, action) => {
        state.auth = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      });
    },
  });
