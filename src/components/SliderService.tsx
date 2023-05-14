import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { GroupDetailTypeWork } from "../react-app-env";
import { getDetailTypeWork } from "../store/quanLyCongViec/thunkAction";
import ServiceItem from "./ServiceItem";

type Props = {};

const SliderService = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDetailTypeWork())
  }, [dispatch]);

  const { chiTietLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const [currentSlide, setCurrentSlide] = useState({
    startSlide: 0,
    endSlide: 5,
  });
  const nextSlide = () => {
    if (chiTietLoaiCongViec !== undefined) {
      console.log(chiTietLoaiCongViec?.length)
      let newStart =
        currentSlide.startSlide < chiTietLoaiCongViec?.length - 4
          ? currentSlide.endSlide
          : 0;
      let newEnd =
        currentSlide.endSlide < chiTietLoaiCongViec?.length - 1
          ?currentSlide.endSlide + 3
          :chiTietLoaiCongViec?.length - 4;
      setCurrentSlide({
        startSlide: newStart,
        endSlide: newEnd,
      });
    }
  };

  const prevSlide = () => {
    if (chiTietLoaiCongViec !== undefined) {
      let newStart =
        currentSlide.startSlide < chiTietLoaiCongViec?.length - 4
          ? chiTietLoaiCongViec?.length - 4
          : currentSlide.startSlide - 5;
      let newEnd =
        currentSlide.endSlide > chiTietLoaiCongViec?.length - 4
          ? currentSlide.endSlide  - 3
          : chiTietLoaiCongViec?.length - 1;
      setCurrentSlide({
        startSlide: newStart,
        endSlide: newEnd,
      });
    }
  };
  const renderCardList = () => {
    return chiTietLoaiCongViec?.map((item: GroupDetailTypeWork, index: number) => {
      const codition =
        index < currentSlide.endSlide && index >= currentSlide.startSlide;
      const classSide = codition ? "duration-700 ease-in-out" : "hidden";
      const activeSlide = codition ? "active" : "";
      return (
        <ServiceItem
          classSlide={classSide}
          activeSlide={activeSlide}
          index={index}
          img={item.hinhAnh}
          title={item.tenNhom}
          codeType={item.maLoaiCongviec}
        />
      );
    });
  };

  return (
    <div>
      <div className="relative w-full slide-service" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="wapper">{renderCardList()}</div>
        {/* Slider controls */}
        <button
          type="button"
          className="btn-slide left"
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
              viewBox="0 0 24 24"
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
          className="btn-slide right"
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
              viewBox="0 0 24 24"
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

export default SliderService;
