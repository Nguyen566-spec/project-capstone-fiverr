import React, { useEffect, useState } from "react";
import { TrashIcon } from "./icons/trash";
import { PencilIcon } from "./icons/pencil";
import { CreateItem } from "./button/CreateItem";
import InputSearch from "./input/InputSearch";
import { RootState, useAppDispatch } from "../../store";
import { getHireWork } from "../../store/quanLyCongViec/thunkAction";
import { QueryDividePage, ThueCongViecResponse } from "../../react-app-env";
import { useSelector } from "react-redux";

type Props = {}

const ManageTypeWork = (props: Props) => {
  const dispatch = useAppDispatch();
  const { listHireWork,totalRow,chiTietLoaiCongViec } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(10);
  const [term,setTerm] = useState(0)
  console.log(chiTietLoaiCongViec)
  useEffect(() => {
    const payload: QueryDividePage = {
      pageIndex,
      pageSize,
    };
    dispatch(getHireWork(payload));
  }, [dispatch, pageIndex, pageSize]);

  const renderListHireWork = () => {
    return listHireWork?.map((item: ThueCongViecResponse, index: number) => {
      return (
        <tr className="border-b dark:border-neutral-500" key={index}>
          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.maCongViec}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.maNguoiThue}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.ngayThue}</td>
          <td className="whitespace-nowrap px-6 py-4">
            {item.hoanThanh ? "Completed" : "Working"}
          </td>
          <td className="whitespace-nowrap px-6 py-4 flex gap-2">
            <button>
              <PencilIcon
                className="w-[25px] h-[25px]"
                fill="rgb(159, 159, 7)"
              />
            </button>
            <button>
              <TrashIcon
                className="w-[25px] h-[25px]"
                fill="rgb(120, 12, 12)"
              />
            </button>
          </td>
        </tr>
      );
    });
  };

  const handlerSubmit = (isNext:boolean=true) => {
    if(totalRow){
      const totalIndex = Math.floor(totalRow/pageSize)
      const conditionNext = pageIndex <= totalIndex && pageIndex >= 1
      const conditionPre = pageIndex > 1 && pageIndex <= totalIndex + 1
      if(isNext && conditionNext) {
        setPageIndex(pageIndex + 1)
        setTerm(term + 10)
      }
      if(isNext === false && conditionPre ){
        setPageIndex(pageIndex - 1)
        setTerm(term - 10)
      }
    }
  }

  return (
    <div className="manage-service">
      <div className="content">
        <div className="group-btn">
          <CreateItem
            className="btn-create"
            nameBtn="Create new service"
            onClick={() => {}}
          />
          <InputSearch name="search" placeholder="Search.." type="text" />
        </div>
        <div className="table-manage">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Id
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Code Work
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Code User
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date Hire
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Button
                        </th>
                      </tr>
                    </thead>
                    <tbody>{renderListHireWork()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 flex flex-wrap flex-row gap-2">
              Showing
              <span className="font-medium">{ 1 + term}</span>
              to
              <span className="font-medium">{ 10 + term}</span>
              of
              <span className="font-medium">{totalRow}</span>
              results
            </p>
          </div>
        </div>
        <button onClick={()=> handlerSubmit(false)} className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button onClick={()=> handlerSubmit(true)}  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};


export default ManageTypeWork