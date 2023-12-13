import { atom } from "recoil";

export const currentDateMatches = atom({
  key: "mathes",
  default: [],
});

export const matchDetailAttr = atom({
  key: "matchDetailAttributes",
  default: "",
});
