import React from "react";
import Header from "../../Component/Header/Header";
import MatchDate from "../../Component/MatchDate/MatchDate";
import Filter from "../../Component/Filter/Filter";
import MatchList from "../../Component/MatchList/MatchList";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="HomePage-wrapper">
      <div className="screen-balancer">
        <div className="screen-balancer-2">
          <Header />
          <div
            className="badminton-icon-wrapper"
            onClick={() => navigate("/intro")}
          >
            <img
              className="badminton-icon"
              alt="badminton-icon-img"
              src="https://c.animaapp.com/pnmyay9o/img/group-23@2x.png"
            />
            <div className="intro-text">
              <br />
              시작하기
            </div>
          </div>
          <MatchDate />
          <Filter />
          <MatchList />
        </div>
      </div>
    </div>
  );
}
