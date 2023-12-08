import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HomePage } from "../src/Pages/HomePage/HomePage";

export default function Navigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
