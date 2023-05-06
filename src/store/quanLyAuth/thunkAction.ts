import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyAuthService } from "../../services/quanLyAuth.service";
import { FieldValues } from "react-hook-form";

export const dangNhap = createAsyncThunk(
  "quanLyAuth/dangNhap",
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.dangNhap(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
