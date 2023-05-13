import { createSlice } from "@reduxjs/toolkit";
import { GetLoaiCongViecResponse } from "../../react-app-env";
import { layChiTietLoaiCongViec, layDanhSachLoaiCongViec } from "./thunkAction";

type InitialState = {
    danhSachLoaiCongViec?: GetLoaiCongViecResponse[];
    chiTietLoaiCongViec?: GetLoaiCongViecResponse | null;
  };
  
  const initialState: InitialState = {
    danhSachLoaiCongViec: [],
    chiTietLoaiCongViec: null,
  };
  
  export const {
    reducer: quanLyLoaiCongViecReducer,
    actions: quanLyLoaiCongViecActions,
  } = createSlice({
    name: "quanLyLoaiCongViec",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(layDanhSachLoaiCongViec.fulfilled, (state, action) => {
          state.danhSachLoaiCongViec = action.payload;
        })
        .addCase(layChiTietLoaiCongViec.fulfilled, (state, action) => {
          state.chiTietLoaiCongViec = action.payload;
        });
    },
  });