import React, { useEffect, useState } from "react";
import { CreateItem } from "./button/CreateItem";
import InputSearch from "./input/InputSearch";
import { TrashIcon } from "./icons/trash";
import { PencilIcon } from "./icons/pencil";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { GetAuthResponse, QueryDividePage } from "../../react-app-env";
import { useForm } from "react-hook-form";
import { getListUser } from "../../store/quanLyAuth/thunkAction";
import { quanLyAuthService } from "../../services/quanLyAuth.service";
import clsx from "clsx";
import InputForm from "../core/InputForm";
import { SaveIcon } from "./icons/save";

type Props = {};

const ManageUser = (props: Props) => {
  const dispatch = useAppDispatch();
  const { listUser, totalRow } = useSelector(
    (state: RootState) => state.quanLyAuth
  );
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(10);
  const [term, setTerm] = useState(0);
  const [viewDetail, setViewDetail] = useState<GetAuthResponse>();
  const [showForm, setShowForm] = useState(false);
  const [showTabDetail, setShowTabDetail] = useState(false);

  const handlerView = async (id: number) => {
    const res = await quanLyAuthService.getUserInfor(id);
    setViewDetail(res.data.content);
  };

  useEffect(() => {
    const payload: QueryDividePage = {
      pageIndex,
      pageSize,
    };
    dispatch(getListUser(payload));
  }, [dispatch, pageIndex, pageSize]);
  console.log(listUser);

  const { register, handleSubmit, setValue, reset } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const fetchInforAccount = async () => {
      try {
        const res = await viewDetail;
        setValue("id", res?.id || "");
        setValue("name", res?.name || "");
        setValue("phone", res?.phone || "");
        setValue("birthday", res?.birthday || "");
        setValue("gender", res?.gender || "");
        setValue("email", res?.email || "");
        setValue("password", "");
        setValue("role", res?.role || "");
        setValue("skill", []);
        setValue("certification", []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInforAccount();
  }, [viewDetail, setValue]);

  const onSubmit = async (user: any) => {
    if (user.id) {
      const res = await quanLyAuthService.updateUser(user.id, user);
      dispatch(getListUser({ pageIndex, pageSize }));
      setViewDetail(res.data.content);
      setShowTabDetail(!showTabDetail);
      setShowForm(!showForm);
    }
  };

  const renderListUser = () => {
    return listUser?.map((item: GetAuthResponse, index: number) => {
      return (
        <tr className="border-b dark:border-neutral-500" key={index}>
          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.password}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.birthday}</td>
          <td className="whitespace-nowrap px-6 py-4">
            {item.gender ? "Female" : "Male"}
          </td>
          <td className="whitespace-nowrap px-6 py-4">{item.role}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.skill}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.certification}</td>
          <td className="whitespace-nowrap px-6 py-4 flex gap-2">
            <button
              onClick={() => {
                if (item.id) {
                  handlerView(item.id);
                  setShowTabDetail(!showTabDetail);
                  setShowForm(!showForm);
                }
              }}
            >
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

  return (
    <div className="manage-service">
      <div className="content relative">
        <div className="group-btn">
          <CreateItem
            className="btn-create"
            nameBtn="Create new service"
            onClick={() => {
              setShowTabDetail(!showTabDetail);
              setShowForm(!showForm);
              reset();
            }}
          />
          <InputSearch name="search" placeholder="Search.." type="text" />
        </div>
        <div className="table-manage w-[100%] overflow-hidden">
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
                          Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Phone
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Password
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Birthday
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Gender
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Kill
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Cer
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Button
                        </th>
                      </tr>
                    </thead>
                    <tbody>{renderListUser()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between">
              <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700 flex flex-wrap flex-row gap-2">
                    Showing
                    <span className="font-medium">{1 + term}</span>
                    to
                    <span className="font-medium">
                      {totalRow
                        ? term + 10 <= totalRow
                          ? 10 + term
                          : totalRow
                        : ""}
                    </span>
                    of
                    <span className="font-medium">{totalRow}</span>
                    results
                  </p>
                </div>
              </div>
              <button
                onClick={() => handlerSubmit(false)}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => handlerSubmit(true)}
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "tab-detail absolute top-0 left-[10%] w-[80%] bg-color-black p-10 rounded-lg",
            {
              hidden: !showTabDetail,
            }
          )}
        >
          <button
            className="border px-3 rounded-lg absolute top-[20px] right-[20px] text-font-20"
            onClick={() => {
              setShowTabDetail(false);
              setShowForm(false);
            }}
          >
            X
          </button>
          <div
            className={clsx("edit-detail", {
              hidden: !showForm,
            })}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputForm
                {...register("name")}
                label="User Name"
                type="text"
                disabled={false}
              />
              <InputForm
                {...register("gender")}
                label="Gender"
                type="text"
                disabled={false}
              />
              <InputForm
                {...register("phone", {
                  required: "Please enter content",
                  maxLength: {
                    value: 10,
                    message: "Phone number have 10 digits",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number have 10 digits",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone must be number",
                  },
                })}
                label="Phone Number"
                type="text"
                disabled={false}
              />
              <InputForm
                {...register("email", {
                  required: "Please enter content",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter correct format email",
                  },
                })}
                label="Email"
                type="email"
                disabled={false}
              />

              <InputForm
                {...register("birthday", {
                  required: "Please enter content",
                })}
                label="Birthday"
                type="text"
                disabled={false}
              />
              <InputForm
                {...register("role", {
                  required: "Please enter content",
                })}
                label="Role"
                type="text"
                disabled={false}
              />

              <InputForm
                {...register("password")}
                label="Password"
                type="password"
                disabled={false}
              />

              <InputForm
                {...register("certification", {
                  required: "Please enter content",
                })}
                label="Certification"
                type="text"
                disabled={false}
              />
              <InputForm
                {...register("skill", {
                  required: "Please enter content",
                })}
                label="Skill"
                type="text"
                disabled={false}
              />
              <div className="mt-6">
                <CreateItem
                  className="btn-create"
                  onClick={() => {
                    setShowTabDetail(false);
                    setShowForm(false);
                  }}
                >
                  {" "}
                  <SaveIcon />
                </CreateItem>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
