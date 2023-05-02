export type GetHttpResponse<T> = {
  statusCode: number;
  content: T;
  dateTime: Date;
};

export type GetCongViecResponse = {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
};

export type GetDangKyResponse = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
};

// export type GetDangNhapResponse = {
//   email: string;
//   password: string;
// };
