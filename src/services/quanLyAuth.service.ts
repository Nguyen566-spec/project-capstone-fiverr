import { FieldValues } from "react-hook-form";
import http from "../constant/api";
import { GetAuthResponse, GetHttpResponse, GetTokenResponse } from "../react-app-env";

export const quanLyAuthService = {
  dangKy: (payload: FieldValues) =>
    http.post<GetHttpResponse<GetAuthResponse>>("auth/signup", payload),
  dangNhap: (payload: FieldValues) =>
    http.post<GetHttpResponse<GetTokenResponse<GetAuthResponse>>>("auth/signin", payload),
};