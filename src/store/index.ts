import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { quanLyCongViecReducer } from "./quanLyCongViec/slice";
import { quanLyAuthActions, quanLyAuthReducer } from "./quanLyAuth/slice";

export const store = configureStore({
  reducer: {
    quanLyCongViec: quanLyCongViecReducer,
    quanLyAuth: quanLyAuthReducer,
  },
});

store.dispatch(quanLyAuthActions.layAuth());

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
