import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../store";
import {
  detailTypeWork,
  getDetailTypeWork,
} from "../store/quanLyCongViec/thunkAction";

const CategoryDetail = () => {
  const params = useParams();
  const id: number = parseInt(params.id as string);
  const { typeWork, chiTietLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(detailTypeWork(id));
    dispatch(getDetailTypeWork());
  }, [dispatch, id]);
  return (
    <div className="container mx-auto pt-48">
      <div className="w-full h-48 bg-color-green-dark leading-[192px] text-color-white text-center">
        <h1 className="font-bold text-font-32">{typeWork?.tenLoaiCongViec}</h1>
      </div>
      <h1 className="font-bold text-font-32">
        Explore {typeWork?.tenLoaiCongViec}
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {chiTietLoaiCongViec
          ?.filter((item) => item.maLoaiCongviec === id)
          .map((i) => (
            <div key={i.id}>
              <h1 className="font-bold text-font-20 my-6">{i.tenNhom}</h1>
              {i.dsChiTietLoai?.map((it) => (
                <NavLink to={`/job-type/${it.id}`} className="p-3 rounded-lg flex justify-between items-center group hover:bg-color-white-light" key={it.id}>
                  <p className="text-font-20">{it.tenChiTiet}</p>
                  <i className="fa-solid fa-arrow-right hidden group-hover:flex"></i>
                </NavLink>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
