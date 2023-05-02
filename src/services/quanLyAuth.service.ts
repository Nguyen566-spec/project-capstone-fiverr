import http from "../constant/api";
import { GetDangKyResponse } from "../react-app-env";

export const quanLyAuthService = {
  dangKy: (payload: GetDangKyResponse) => http.post("auth/signup", payload),
  dangNhap: (payload: GetDangKyResponse) => http.post("auth/signin", payload),
};
