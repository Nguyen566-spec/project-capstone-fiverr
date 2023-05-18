import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyCongViecService } from "../../services/quanLyCongViec.service";
import { QueryDividePage } from "../../react-app-env";

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
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.layChiTietCongViec(id);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getMenuTypeWork = createAsyncThunk(
  "quanLyCongViec/getMenuTypeWork",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.getMenuChiTietCongViec();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getTypeWork = createAsyncThunk(
  "quanLyCongViec/getTypeWork",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.getLoaiCongViec();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const detailTypeWork = createAsyncThunk(
  "quanLyCongViec/detailTypeWork",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.detailLoaiCongViec(id);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getDetailTypeWork = createAsyncThunk(
  "quanLyCongViec/getDetailTypeWork",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.getChiTietLoaiCongViec();
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const detailDetailTypeWork = createAsyncThunk(
  "quanLyCongViec/detailDetailTypeWork",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await quanLyCongViecService.detailChiTietLoaiCongViec(id);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getHireWork = createAsyncThunk(
  "quanLyCongViec/getHireWork",
  async (payload: QueryDividePage, { rejectWithValue }) => {
    try {
      const { pageIndex,pageSize, keyword } = payload
      let query = `pageIndex=${pageIndex}&pageSize=${pageSize}`;
      if(keyword){
        query = `pageIndex=${pageIndex}&pageSize=${pageSize}&keywords=${keyword}`
      }
      const res = await quanLyCongViecService.getHireWorkWithPage(query)
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
);
