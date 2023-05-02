import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyAuthService } from "../../services/quanLyAuth.service";
import { GetDangKyResponse } from "../../react-app-env";

export const dangNhap = createAsyncThunk(
  "quanLyAuth/dangNhap",
  async (payload: GetDangKyResponse, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.dangNhap(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
