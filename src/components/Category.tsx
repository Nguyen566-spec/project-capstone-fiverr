import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { layDanhSachLoaiCongViec } from "../store/quanLyLoaiCongViec/thunkAction";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { danhSachLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyLoaiCongViec
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(layDanhSachLoaiCongViec());
  }, [dispatch]);
  return (
    <div className="fixed top-20 w-full z-20 flex justify-between items-center p-4 bg-color-green-dark">
      {danhSachLoaiCongViec?.map((ds) => (
        <NavLink
          to={`category/${ds.id}`}
          key={ds.id}
          className="text-color-white relative p-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:hover:bg-color-white"
        >
          {ds.tenLoaiCongViec}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
