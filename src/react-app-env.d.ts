export type GetHttpResponse<T> = {
  statusCode: number;
  content: T;
  dateTime: Date;
};

export type GetTokenResponse<T> = {
  user: T;
  token: string;
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

export type GetLoaiCongViecResponse = {
  id: number;
  tenLoaiCongViec: string;
};

export type GetAuthResponse = {
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

export type GetDangNhapResponse = {
  email: string;
  password: string;
};

export type GetTypeWorkResponse = {
  id: number;
  tenLoaiCongViec: string;
};

export type DetailTypeWork = {
  id: number;
  tenChiTiet: string;
};

export type GroupDetailTypeWork = {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai?: DetailTypeWork[];
};

export type MenuTypeWork = {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai?: GroupDetailTypeWork[]; 
};
