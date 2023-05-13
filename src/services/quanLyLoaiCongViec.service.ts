import http from "../constant/api";
import { GetHttpResponse, GetLoaiCongViecResponse } from "../react-app-env";

export const quanLyLoaiCongViecService = {
    layDanhSachLoaiCongViec: () =>
      http.get<GetHttpResponse<GetLoaiCongViecResponse[]>>("loai-cong-viec"),
    layChiTietLoaiCongViec: (id: string) =>
      http.get<GetHttpResponse<GetLoaiCongViecResponse>>(`loai-cong-viec/${id}`),
  };