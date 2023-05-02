import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../store";
import { layChiTietCongViec } from "../store/quanLyCongViec/thunkAction";

const CongViecDetail = () => {
  const params = useParams();
  const { chiTietCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layChiTietCongViec(params.id as string))
  })
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-4xl p-4">Chi tiết công việc</h1>
      <div className="grid grid-cols-3">
        <img src={chiTietCongViec?.hinhAnh} alt="" />
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold">{chiTietCongViec?.tenCongViec}</h1>
          <p>{chiTietCongViec?.moTa}</p>
        </div>
      </div>
    </div>
  );
};

export default CongViecDetail;
