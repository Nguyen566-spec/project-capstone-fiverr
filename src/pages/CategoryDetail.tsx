import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../store";
import { layChiTietLoaiCongViec } from "../store/quanLyLoaiCongViec/thunkAction";

const CategoryDetail = () => {
  const params = useParams();
  const { chiTietLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyLoaiCongViec
  );
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layChiTietLoaiCongViec(params.id as string))
  })
  return (
    <div className="container mx-auto pt-48">
      <div className="w-full h-48 bg-color-green-dark leading-[192px] text-color-white text-center">
        <h1 className="font-bold text-font-32">{chiTietLoaiCongViec?.tenLoaiCongViec}</h1>
      </div>
    </div>
  );
};

export default CategoryDetail;
