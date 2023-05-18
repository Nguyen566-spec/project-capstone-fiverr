import { FieldValues } from "react-hook-form";
import http from "../constant/api";
import {
  GetAuthResponse,
  GetHttpResponse,
  GetTokenResponse,
} from "../react-app-env";

export const quanLyAuthService = {
  dangKy: (payload: FieldValues) =>
    http.post<GetHttpResponse<GetAuthResponse>>("auth/signup", payload),
  dangNhap: (payload: FieldValues) =>
    http.post<GetHttpResponse<GetTokenResponse<GetAuthResponse>>>(
      "auth/signin",
      payload
    ),
  layDanhSachUser: () => http.get<GetHttpResponse<GetAuthResponse[]>>("users"),
  getUserInfor: (id: number) =>
    http.get<GetHttpResponse<GetAuthResponse>>(`users/${id}`),
  updateUser: (id: number, payload: FieldValues) =>
    http.put<GetHttpResponse<GetAuthResponse>>(`users/${id}`, payload),
  uploadAvatar: (payload: string) =>
    http.post<GetHttpResponse<GetAuthResponse>>("users/upload-avatar", payload),
};
