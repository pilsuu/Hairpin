import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import MatchReservePage from "./Pages/MatchReservePage/MatchReservePage";
import { Intro } from "./Pages/IntroPage/IntroPage";
import LoginPage from "./Pages/Auth/LoginPage/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage/RegisterPage";
import { logoutHandler } from "./Pages/Auth/AuthHooks/hooks";
import { useRecoilState } from "recoil";
import { isAuthenticated, userInfo } from "./States/atoms";
import React, { useEffect, useState } from "react";

export default function Navigator() {
  // const navigate = useNavigate();
  const refershToken = localStorage.getItem("refreshToken");
  const [login, setLogin] = useRecoilState(isAuthenticated);
  const [refreshed, setRefreshed] = useState(0);
  const [userDetailInfo, setUserDetailInfo] = useRecoilState(userInfo);
  const prefixURL = process.env.REACT_APP_DJANGO_URL;

  const updateToken = async () => {
    setRefreshed(refreshed + 1);
    try {
      let response = await fetch(`${prefixURL}users/token/refresh/`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          // Authorization: `Bearer ${refershToken}`,
        },
        body: JSON.stringify(refershToken),
      }).then(async (res) => {
        let parsedData = await res.json();
        console.log("RegRes: ", parsedData);
        return parsedData;
      });

      if (response.access) {
        localStorage.setItem("accessToken", response.access);
        setLogin(true);
      } else {
        // 만약 리프레시 토큰도 만료되었다면 Logout 처리
        logoutHandler();
        setUserDetailInfo("");
        setLogin(false);
        // navigate("/login");
      }
    } catch (e) {
      console.error(e);
      alert("update Token중 에러가 발생하였습니다");
    }
  };

  useEffect(() => {
    if (login) {
      let twofiveMin = 1000 * 60 * 25; // * 25;

      let interval = setInterval(() => {
        updateToken();
      }, twofiveMin);
      return () => {
        clearInterval(interval);
        //console.log("request for refresh token is executed [in router]");
      };
    }
  }, [refreshed, login]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="match-reserve" element={<MatchReservePage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
