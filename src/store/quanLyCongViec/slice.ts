import { createSlice } from "@reduxjs/toolkit";
import { layChiTietCongViec, layDanhSachCongViec , getTypeWork , getMenuTypeWork, getDetailTypeWork, detailTypeWork, detailDetailTypeWork } from "./thunkAction";
import { GetCongViecResponse,GetTypeWorkResponse , MenuTypeWork , GroupDetailTypeWork} from "../../react-app-env";

type InitialState = {
  danhSachCongViec?: GetCongViecResponse[];
  chiTietCongViec?: GetCongViecResponse | null;
  chiTietLoaiCongViec?:GroupDetailTypeWork[];
  detailLoaiCongViec?:GroupDetailTypeWork;
  menuLoaiCongViec ?: MenuTypeWork[];
  listTypeWork ?: GetTypeWorkResponse[];
  typeWork?: GetTypeWorkResponse;
};

const initialState: InitialState = {
  danhSachCongViec: [],
  chiTietCongViec: null,
  chiTietLoaiCongViec: [],
  detailLoaiCongViec: undefined,
  menuLoaiCongViec : [],
  listTypeWork : [],
  typeWork: undefined,
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
      })
      .addCase(getDetailTypeWork.fulfilled, (state,action)=>{
        state.chiTietLoaiCongViec = action.payload
      })
      .addCase(detailDetailTypeWork.fulfilled, (state,action)=>{
        state.detailLoaiCongViec = action.payload
      })
      .addCase(getMenuTypeWork.fulfilled , (state,action)=>{
        state.menuLoaiCongViec = action.payload
      })
      .addCase(getTypeWork.fulfilled, (state,action)=>{
        state.listTypeWork = action.payload
      })
      .addCase(detailTypeWork.fulfilled, (state,action)=>{
        state.typeWork = action.payload
      })
  },
});
