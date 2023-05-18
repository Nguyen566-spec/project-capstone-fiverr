import { createSlice } from "@reduxjs/toolkit";
import { dangNhap, getListUser, getUserInfor, updateUser } from "./thunkAction";
import { GetAuthResponse, GetTokenResponse } from "../../react-app-env";

type InitialState = {
  auth?: GetTokenResponse<GetAuthResponse>;
  user?: GetAuthResponse;
  listUser ?: GetAuthResponse[];
  totalRow ?: number;
};

const initialState: InitialState = {
  auth: undefined,
  listUser : [],
  totalRow: undefined,
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
          action.payload
            ? (state.auth = action.payload)
            : alert("Incorrect email or password");
          localStorage.setItem("user", JSON.stringify(action.payload));
        })
        .addCase(getUserInfor.fulfilled, (state, action) => {
          state.user = action.payload;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          if (state.auth?.user && action.payload) {
            state.auth.user = action.payload;
            state.auth.user.password = "";
            localStorage.setItem("user", JSON.stringify(state.auth));
          }
        })
        .addCase(getListUser.fulfilled, (state,action)=>{
          if (action.payload) {
            state.listUser = action.payload.data;
            state.totalRow = action.payload.totalRow;
          }
        })
    },
  });
