import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { useForm } from "react-hook-form";
import { GetAuthResponse } from "../react-app-env";
import { dangNhap } from "../store/quanLyAuth/thunkAction";
import { NavLink, Navigate } from "react-router-dom";

const Login = () => {
  const { auth } = useSelector((state: RootState) => state.quanLyAuth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetAuthResponse>();
  if (auth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-semibold p-8">Login</h1>
      <form
        onSubmit={handleSubmit((value) => {
          dispatch(dangNhap(value));
        })}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Please enter your email",
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: "Please enter your password",
            })}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="mb-6">
          <span>Don't have an account?</span>{" "}
          <NavLink to="/register">Sign up</NavLink>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
