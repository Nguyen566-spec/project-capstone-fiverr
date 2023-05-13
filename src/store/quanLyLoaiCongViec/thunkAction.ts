import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyLoaiCongViecService } from "../../services/quanLyLoaiCongViec.service";

export const layDanhSachLoaiCongViec = createAsyncThunk(
  "quanLyLoaiCongViec/layDanhSachLoaiCongViec",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyLoaiCongViecService.layDanhSachLoaiCongViec();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const layChiTietLoaiCongViec = createAsyncThunk(
  "quanLyLoaiCongViec/layChiTietLoaiCongViec",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await quanLyLoaiCongViecService.layChiTietLoaiCongViec(id);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
