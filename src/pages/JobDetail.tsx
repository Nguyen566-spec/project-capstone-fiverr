import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../store";
import { layChiTietCongViec } from "../store/quanLyCongViec/thunkAction";

const JobDetail = () => {
  const params = useParams();
  const id: number = parseInt(params.id as string);
  const { chiTietCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(layChiTietCongViec(id));
  });
  return (
    <div className="container mx-auto pt-40">
      <div className="flex flex-col space-y-8 lg:flex-row lg:justify-between">
        <div className="w-full lg:w-3/5">
          <h1 className="text-font-32 font-bold">
            {chiTietCongViec?.tenCongViec}
          </h1>
          <i className="fa-solid fa-star"></i>
          <span className="text-font-20 font-bold">
            {chiTietCongViec?.saoCongViec} ({chiTietCongViec?.danhGia})
          </span>
          <img src={chiTietCongViec?.hinhAnh} alt="" className="w-full my-8" />
          <h1 className="text-font-20 font-semibold">About this gig</h1>
          <p>{chiTietCongViec?.moTa}</p>
        </div>
        <div className="w-full lg:w-1/3 border border-color-gray p-8">
          <p className="text-font-30 font-semibold">
            US${chiTietCongViec?.giaTien}
          </p>
          <p className="my-8">{chiTietCongViec?.moTaNgan}</p>
          <NavLink
            to={`checkout/${chiTietCongViec?.id}`}
            className="block p-2 text-center bg-color-black text-color-white rounded"
          >
            Continue <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
