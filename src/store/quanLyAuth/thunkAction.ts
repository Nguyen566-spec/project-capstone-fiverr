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

export const updateUser = createAsyncThunk(
  "quanLyAuth/updateUser",
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.updateUser(payload.id, payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getUserInfor = createAsyncThunk(
  "quanLyAuth/getUserInfor",
  async (payload: number, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.getUserInfor(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const layDanhSachUser = createAsyncThunk(
  "quanLyAuth/layDanhSachUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.layDanhSachUser();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "quanLyAuth/uploadAvatar",
  async (payload: string, { rejectWithValue }) => {
    try {
      const res = await quanLyAuthService.uploadAvatar(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
