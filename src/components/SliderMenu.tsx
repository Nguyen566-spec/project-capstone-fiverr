import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { getMenuTypeWork } from "../store/quanLyCongViec/thunkAction";
import { MenuTypeWork } from "../react-app-env";
import { NavLink } from "react-router-dom";
import WorkNav from "./WorkNav";

type Props = {};

const SliderMenu = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMenuTypeWork());
  }, [dispatch]);

  const { menuLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );

  const [currentSlide, setCurrentSlide] = useState({
    startSlide: 0,
    endSlide: 7,
  });

  const nextSlide = () => {
    if (menuLoaiCongViec !== undefined) {
      let newStart =
        currentSlide.startSlide < menuLoaiCongViec?.length - 7
          ? currentSlide.endSlide + 1
          : 0;

      let newEnd =
        currentSlide.endSlide < menuLoaiCongViec?.length - 1
          ? currentSlide.endSlide + 5
          : 7;

      setCurrentSlide({
        startSlide: newStart,
        endSlide: newEnd,
      });
    }
  };

  const prevSlide = () => {
    if (menuLoaiCongViec !== undefined) {
      const modSlide = menuLoaiCongViec?.length % 7;

      let newStart =
        currentSlide.startSlide > 7
          ? currentSlide.startSlide - 5
          : menuLoaiCongViec.length + modSlide - 7;

      let newEnd =
        currentSlide.endSlide > 7
          ? currentSlide.endSlide - 5
          : menuLoaiCongViec.length + modSlide;


      setCurrentSlide({
        startSlide: newStart,
        endSlide: newEnd,
      });
    }
  };
  const renderCardList = () => {
    return menuLoaiCongViec?.map((item: MenuTypeWork, index: number) => {
      const codition =
        index <= currentSlide.endSlide && index >= currentSlide.startSlide;
      const classSide = codition ? "duration-700 ease-in-out active" : "hidden";
      return (
        <NavLink to={`category/${item.id}`} key={index} className={classSide}
        >
          <WorkNav
            id={item.id}
            title={item.tenLoaiCongViec}
            listGroupType={item.dsNhomChiTietLoai}
          />
        </NavLink>
      );
    });
  };
  return (
    <div className="bottom relative">
      <div className="absolute w-full top-0 left-0" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="w-[95%] mx-auto wapper grid grid-cols-8">{renderCardList()}</div>
        {/* Slider controls */}
        <button
          type="button"
          className="btn-slide left none-left"
          data-carousel-prev
          onClick={() => {
            prevSlide();
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 27 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="btn-slide right none-right"
          data-carousel-next
          onClick={() => {
            nextSlide();
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 27 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SliderMenu;
