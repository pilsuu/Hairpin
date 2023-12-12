import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import MatchReservePage from "./Pages/MatchReservePage/MatchReservePage";
import { Intro } from "./Pages/IntroPage/IntroPage";
export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/match-reserve" element={<MatchReservePage />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}
