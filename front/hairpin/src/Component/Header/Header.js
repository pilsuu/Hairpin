import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { isAuthenticated } from "../../States/atoms";
import { logoutHandler } from "../../Pages/Auth/AuthHooks/hooks";
import { userInfo } from "../../States/atoms";
export default function Header() {
  const navigate = useNavigate();
  const [hasAuth, setHasAuth] = useRecoilState(isAuthenticated);
  const [userDetailInfo, setUserDetailInfo] = useRecoilState(userInfo);

  const authCheck = () => {
    if (!hasAuth) {
      navigate("/login");
    } else {
      const prompt = window.prompt("원하는 작업을 입력하세요");
      if (prompt == "logout") {
        const logout = window.confirm("로그아웃 하시겠습니까?");
        if (logout) {
          logoutHandler();
          setUserDetailInfo("");
          setHasAuth(false);
          window.alert("로그아웃 되었습니다");
        }
      } else if (prompt == "generate") {
        navigate("/generate");
      } else if (prompt == "videoLists") {
        navigate("/videoLists");
      }
    }
  };
  return (
    <div className="Header-Container">
      <div className="Search-Bar-Wrapper">
        <div className="Search-Bar">
          <img
            className="glass"
            alt="Search Glass Icon"
            src="https://c.animaapp.com/4IIPmODq/img/vector.svg"
          />
          <div className="Search-Input">지역을 검색하세요</div>
        </div>
      </div>
      <img
        className="User-Icon"
        alt="User Icon"
        src="https://c.animaapp.com/4IIPmODq/img/group-48@2x.png"
        onClick={() => authCheck()}
      />
      <div className="logo-hairpin" onClick={() => navigate("/")}>
        Hairpin
      </div>
    </div>
  );
}
