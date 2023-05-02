import http from "../constant/api";

export const quanLyCongViecService = {
  layDanhSachCongViec: () => http.get("cong-viec"),
  layChiTietCongViec: (id: string) => http.get(`cong-viec/${id}`)
};
