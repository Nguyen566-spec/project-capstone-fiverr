import { createSlice } from "@reduxjs/toolkit";
import { layChiTietCongViec, layDanhSachCongViec } from "./thunkAction";
import { GetCongViecResponse } from "../../react-app-env";

type InitialState = {
  danhSachCongViec: GetCongViecResponse[];
  chiTietCongViec: GetCongViecResponse | null;
};

const initialState: InitialState = {
  danhSachCongViec: [],
  chiTietCongViec: null,
};

export const {
  reducer: quanLyCongViecReducer,
  actions: quanLyCongViecActions,
} = createSlice({
  name: "quanLyCongViec",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(layDanhSachCongViec.fulfilled, (state, action) => {
        state.danhSachCongViec = action.payload;
      })
      .addCase(layChiTietCongViec.fulfilled, (state, action) => {
        state.chiTietCongViec = action.payload;
      });
  },
});
