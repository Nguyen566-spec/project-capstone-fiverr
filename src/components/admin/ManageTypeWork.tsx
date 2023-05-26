import React, { useEffect, useState } from "react";
import { TrashIcon } from "./icons/trash";
import { PencilIcon } from "./icons/pencil";
import { CreateItem } from "./button/CreateItem";
import InputSearch from "./input/InputSearch";
import { RootState, useAppDispatch } from "../../store";
import { getTypeWorkWithPage } from "../../store/quanLyCongViec/thunkAction";
import { GetTypeWorkResponse, QueryDividePage } from "../../react-app-env";
import { useSelector } from "react-redux";
import Pagination from "./pagination/Pagination";

type Props = {};

const ManageTypeWork = (props: Props) => {
  const dispatch = useAppDispatch();
  const { listTypeWorkWithPage, totalRow } = useSelector(
    (state: RootState) => state.quanLyCongViec
  );
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(10);
  const [term, setTerm] = useState(0);
  const [keyword, setKeyword] = useState("");

  const handlerSubmit = (isNext: boolean = true) => {
    if (totalRow) {
      const totalIndex = Math.floor(totalRow / pageSize);
      const conditionNext = pageIndex <= totalIndex && pageIndex >= 1;
      const conditionPre = pageIndex > 1 && pageIndex <= totalIndex + 1;
      if (isNext && conditionNext) {
        setPageIndex(pageIndex + 1);
        setTerm(term + 10);
      }
      if (isNext === false && conditionPre) {
        setPageIndex(pageIndex - 1);
        setTerm(term - 10);
      }
    }
  };
  const handlerSetPageIndex = (index: number) => {
    setPageIndex(index);
    setTerm(pageSize * (index - 1));
  };

  useEffect(() => {
    const payload: QueryDividePage = {
      pageIndex,
      pageSize,
      keyword,
    };
    dispatch(getTypeWorkWithPage(payload));
  }, [dispatch, pageIndex, pageSize, keyword]);

  const renderListHireWork = () => {
    return listTypeWorkWithPage?.map(
      (item: GetTypeWorkResponse, index: number) => {
        return (
          <tr className="border-b dark:border-neutral-500" key={index}>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              {item.id}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {item.tenLoaiCongViec}
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
      }
    );
  };

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
                          Type Work
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
        <Pagination
          handlerSetPageIndex={handlerSetPageIndex}
          handlerSubmit={handlerSubmit}
          pageSize={pageSize}
          totalRow={totalRow}
          pageIndex={pageIndex}
          term={term}
        />
      </div>
    </div>
  );
};

export default ManageTypeWork;
