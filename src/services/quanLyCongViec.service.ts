import http from "../constant/api";
import { GetCongViecResponse, GetHttpResponse } from "../react-app-env";

export const quanLyCongViecService = {
  layDanhSachCongViec: () => http.get<GetHttpResponse<GetCongViecResponse[]>>("cong-viec"),
  layChiTietCongViec: (id: string) => http.get<GetHttpResponse<GetCongViecResponse>>(`cong-viec/${id}`)
};
