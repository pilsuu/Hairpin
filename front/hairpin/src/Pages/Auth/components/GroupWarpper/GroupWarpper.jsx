import React from "react";
import "./style.css";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  isAuthenticated,
  userInfo,
  userLoginInfo,
  userRegisterInfo,
} from "../../../../States/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const GroupWrapper = ({ className, text }) => {
  const [registerValue, setRegisterValue] = useRecoilState(userRegisterInfo);
  const [loginValue, setLoginValue] = useRecoilState(userLoginInfo);
  const [hasAuth, setHasAuth] = useRecoilState(isAuthenticated);
  const [userDetailInfo, setUserDetailInfo] = useRecoilState(userInfo);
  const navigate = useNavigate();
  const prefixURL = process.env.REACT_APP_DJANGO_URL;

  useEffect(() => {
    // console.log("regVal: ", registerValue);
    // console.log("loginVal: ", loginValue);
    // console.log("hasAuth: ", hasAuth);
    // console.log("userDetailInfo: ", userDetailInfo);
  }, [userDetailInfo, registerValue, loginValue, hasAuth]);

  const defaultRegForm = {
    email: "",
    password: "",
    password2: "",
    gender: "",
  };

  const defaultLoginForm = {
    email: "",
    password: "",
  };

  const request = async (url, body) => {
    let response;
    const URL = `${prefixURL}users/${url}/`;
    console.log("URL: ", URL);
    response = await fetch(URL, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        // Authorization: `Bearer ${authKey}`,
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      let parsedData = await res.json();
      // console.log("http status: ", res.status);
      console.log("ReqRes: ", parsedData);
      return parsedData;
    });
    return response;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text == "회원가입") {
      console.log("회원가입: ", JSON.stringify(registerValue));
      const regRes = await request("signup", registerValue);
      if (regRes.email !== null) {
        setRegisterValue(defaultRegForm);
        window.alert("정상적으로 회원가입 되었습니다");
        navigate("/login");
      }
    } else if (text == "로그인") {
      console.log("로그인: ", loginValue);
      const loginRes = await request("login", loginValue);
      if (loginRes.tokens.access !== null) {
        localStorage.setItem("accessToken", loginRes.tokens.access);
        localStorage.setItem("refreshToken", loginRes.tokens.refresh);
        setLoginValue(defaultLoginForm);
        window.alert("로그인 되었습니다");
        setUserDetailInfo(loginRes.user);
        setHasAuth(true);
        navigate("/");
      }
    }
  };

  return (
    <div className={`group-wrapper ${className}`} onClick={handleSubmit}>
      <div className="div">
        <div className="overlap-group-2">
          <div className="text-wrapper-2">{text}</div>
        </div>
      </div>
    </div>
  );
};
