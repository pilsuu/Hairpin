import React, { useEffect, useState } from "react";
import "./style.css";
import { useRecoilState } from "recoil";
import { userLoginInfo, userRegisterInfo } from "../../../../States/atoms";
export const Group = ({ className, placeHolder }) => {
  const [userRegInfo, setUserRegInfo] = useRecoilState(userRegisterInfo);
  const [userSignInInfo, setUserSignInInfo] = useRecoilState(userLoginInfo);
  useEffect(() => {
    // console.log("userRegInfo: ", userRegInfo);
  }, [userRegInfo, userSignInInfo]);
  let regUserEmail;
  let regUserPw;
  let regUserPw2;
  let regUserGender;
  let loginUserEmail;
  let loginUserPw;

  function distinguish(e, inType) {
    if (inType == "Enter Email") {
      regUserEmail = e.target.value;
      // console.log("regUserEmail: ", regUserEmail);
      setUserRegInfo((prevState) => ({ ...prevState, email: regUserEmail }));
    } else if (inType == "Enter Password") {
      regUserPw = e.target.value;
      // console.log("regUserPw: ", regUserPw);
      setUserRegInfo((prevState) => ({ ...prevState, password: regUserPw }));
    } else if (inType == "Confirm Password") {
      regUserPw2 = e.target.value;
      // console.log("regUserPw2: ", regUserPw2);
      setUserRegInfo((prevState) => ({ ...prevState, password2: regUserPw2 }));
    } else if (inType == "Enter Gender") {
      regUserGender = e.target.value;
      // console.log("regUserGender: ", regUserGender);
      setUserRegInfo((prevState) => ({ ...prevState, gender: regUserGender }));
    } else if (inType == "Enter Email for login") {
      loginUserEmail = e.target.value;
      // console.log("loginUserEmail: ", loginUserEmail);
      setUserSignInInfo((prevState) => ({
        ...prevState,
        email: loginUserEmail,
      }));
    } else if (inType == "Enter Password for login") {
      loginUserPw = e.target.value;
      // console.log("loginUserPw: ", loginUserPw);
      setUserSignInInfo((prevState) => ({
        ...prevState,
        password: loginUserPw,
      }));
    }
  }

  return (
    <div className={`group ${className}`}>
      <div className="div-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <input
              className="text-wrapper"
              type="text"
              placeholder={placeHolder}
              onChange={(e) => distinguish(e, placeHolder)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
