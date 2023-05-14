import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import UserInfor from "./UserInfor";
import clsx from "clsx";

type Props = {};

const Profile = (props: Props) => {
  const { auth } = useSelector((state: RootState) => state.quanLyAuth);
  const [showUserInfor, setShowUserInfor] = useState(false);
  useEffect(()=>{
  },[auth?.user])

  if (auth !== undefined) {
    return (
      <div className="profile">
        <div className="profile-content">
          <div className="content-top">
            <input type="file" name="profile[image]" />
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
