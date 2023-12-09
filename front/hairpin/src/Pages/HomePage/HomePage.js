import React from "react";
import Header from "../../Component/Header/Header";
import MatchDate from "../../Component/MatchDate/MatchDate";
import Filter from "../../Component/Filter/Filter";
import MatchList from "../../Component/MatchList/MatchList";

export function HomePage() {
  return (
    <div>
      <Header />
      <MatchDate />
      <Filter />
      <MatchList />
    </div>
  );
}
