import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
      />
      <div className="logo-hairpin" onClick={() => navigate("/")}>
        Hairpin
      </div>
    </div>
  );
}
