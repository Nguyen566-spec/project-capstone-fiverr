import http from "../constant/api";
import { GetCongViecResponse, GetHttpResponse ,GetTypeWorkResponse ,MenuTypeWork,GroupDetailTypeWork} from "../react-app-env";

export const quanLyCongViecService = {
  layDanhSachCongViec: () =>
    http.get<GetHttpResponse<GetCongViecResponse[]>>("cong-viec"),
  layChiTietCongViec: (id: number) =>
    http.get<GetHttpResponse<GetCongViecResponse>>(`cong-viec/${id}`),
  getChiTietLoaiCongViec : () => http.get<GetHttpResponse<GroupDetailTypeWork[]>>("chi-tiet-loai-cong-viec"),
  detailChiTietLoaiCongViec : (id: number) => http.get<GetHttpResponse<GroupDetailTypeWork>>(`chi-tiet-loai-cong-viec/${id}`),
  getMenuChiTietCongViec : () => http.get<GetHttpResponse<MenuTypeWork[]>>("cong-viec/lay-menu-loai-cong-viec"),
  getLoaiCongViec : () => http.get<GetHttpResponse<GetTypeWorkResponse[]>>("loai-cong-viec"),
  detailLoaiCongViec : (id: number) => http.get<GetHttpResponse<GetTypeWorkResponse>>(`loai-cong-viec/${id}`),
};
