import React from "react";
import Header from "../../Component/Header/Header";
import MatchDate from "../../Component/MatchDate/MatchDate";
import Filter from "../../Component/Filter/Filter";
import MatchList from "../../Component/MatchList/MatchList";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="HomePage-wrapper">
      <div className="screen-balancer">
        <div className="screen-balancer-2">
          <Header />
          <MatchDate />
          <Filter />
          <MatchList />
        </div>
      </div>
    </div>
  );
}
