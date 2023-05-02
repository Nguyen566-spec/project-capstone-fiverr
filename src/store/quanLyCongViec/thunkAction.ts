import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyCongViecService } from "../../services/quanLyCongViec.service";

export const layDanhSachCongViec = createAsyncThunk(
  "quanLyCongViec/layDanhSachCongViec",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.layDanhSachCongViec();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const layChiTietCongViec = createAsyncThunk(
  "quanLyCongViec/layChiTietCongViec",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.layChiTietCongViec(id);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
