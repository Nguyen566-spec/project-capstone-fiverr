import React from "react";
import { GetDangKyResponse } from "../react-app-env";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { quanLyAuthService } from "../services/quanLyAuth.service";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetDangKyResponse>();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold p-8">Register</h1>
      <form
        onSubmit={handleSubmit(async (value) => {
          try {
            const res = await quanLyAuthService.dangKy(value);
            if (res.data.statusCode !== 400) {
              alert("Đăng ký thành công");
              navigate("/login");
            }
          } catch (error) {
            alert("Đăng ký thất bại");
          }
        })}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tên
          </label>
          <input
            {...register("name", {
              required: "Vui lòng nhập tên",
            })}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Vui lòng nhập email",
            })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mật khẩu
          </label>
          <input
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Số điện thoại
          </label>
          <input
            {...register("phone", {
              required: "Vui lòng nhập số điện thoại",
            })}
            type="number"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.phone?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="birthday"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ngày sinh
          </label>
          <input
            {...register("birthday", {
              required: "Vui lòng nhập ngày sinh",
            })}
            type="text"
            id="birthday"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.birthday?.message}</p>
        </div>
        <div className="flex items-center mb-4">
          <label
            htmlFor="gender"
            className="mr-4 text-sm font-medium text-gray-900"
          >
            Giới tính
          </label>
          <input
            {...register("gender")}
            id="gender"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Role
          </label>
          <input
            {...register("role", {
              required: "Vui lòng nhập role",
            })}
            type="text"
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.role?.message}</p>
        </div>
        <div className="mb-6">
          <span>Đã có tài khoản?</span> <NavLink to="/login">Đăng nhập</NavLink>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
