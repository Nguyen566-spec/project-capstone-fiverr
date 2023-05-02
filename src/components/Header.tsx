import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../store";
import { quanLyAuthActions } from "../store/quanLyAuth/slice";

const Header = () => {
  const { auth } = useSelector((state: RootState) => state.quanLyAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      {auth ? (
        <>
          <h1>Hello, {auth.name}</h1>
          <button
            onClick={() => {
              dispatch(quanLyAuthActions.dangXuat());
              navigate("/");
            }}
          >
            Đăng xuất
          </button>
        </>
      ) : (
        <>
          <h1>Header</h1>
          <NavLink to="/login">Đăng nhập</NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
