import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import UserInfor from "./UserInfor";
import clsx from "clsx";
import { uploadAvatar } from "../store/quanLyAuth/thunkAction";

type Props = {};

const Profile = (props: Props) => {
  const { auth } = useSelector((state: RootState) => state.quanLyAuth);
  const [showUserInfor, setShowUserInfor] = useState(false);
  const dispatch = useAppDispatch();
  // const [imgSrc, setImgSrc] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append("formFile", file);
        dispatch(uploadAvatar(formData));
      }
    } catch (error) {
      
    }
  };
  // useEffect(() => {
  //   dispatch(uploadAvatar(imgSrc));
  // }, [dispatch, imgSrc]);
  if (auth !== undefined) {
    return (
      <div className="profile">
        <div className="profile-content">
          <div className="content-top">
            <img src={auth.user.avatar} alt="" className="" />
            <input type="file" name="profile[image]" onChange={handleChange} />
            <div className="flex gap-6">
              <p>
                <i className="fa-regular fa-user"></i> {auth.user.name}
              </p>
              <button
                onClick={() => {
                  setShowUserInfor(!showUserInfor);
                }}
              >
                <i className="fa-solid fa-pencil"></i>
                Edit Profile
              </button>
            </div>
          </div>
          <div
            className={clsx("content-bottom", {
              hidden: !showUserInfor,
            })}
          >
            <UserInfor />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
  return <></>;
};

export default Profile;
