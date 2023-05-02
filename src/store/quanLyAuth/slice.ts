import { createSlice } from "@reduxjs/toolkit";
import { dangNhap } from "./thunkAction";
import { GetDangKyResponse } from "../../react-app-env";

type InitialState = {
  auth: GetDangKyResponse | null;
};

const initialState: InitialState = {
  auth: null,
};

export const { reducer: quanLyAuthReducer, actions: quanLyAuthActions } =
  createSlice({
    name: "quanLyAuth",
    initialState,
    reducers: {
      dangXuat: (state) => {
        localStorage.removeItem("auth");
        state.auth = null;
      },
      layAuth: (state) => {
        const data = localStorage.getItem("auth");
        if (data) {
          state.auth = JSON.parse(data);
        }
      },
    },
    extraReducers(builder) {
      builder.addCase(dangNhap.fulfilled, (state, action) => {
        console.log(action.payload.user);
        state.auth = action.payload.user;
        localStorage.setItem("auth", JSON.stringify(action.payload.user));
      });
    },
  });
