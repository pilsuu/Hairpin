import { atom } from "recoil";

export const currentDateMatches = atom({
  key: "mathes",
  default: [],
});

export const matchDetailAttr = atom({
  key: "matchDetailAttributes",
  default: "",
});

export const userRegisterInfo = atom({
  key: "userRegiserInfo",
  default: {
    email: "",
    password: "",
    password2: "",
    gender: "",
  },
});

export const userLoginInfo = atom({
  key: "userLoginInfo",
  default: {
    email: "",
    password: "",
  },
});

export const isAuthenticated = atom({
  key: "authenticated",
  default: false,
});

export const userInfo = atom({
  key: "userInfo",
  default: "",
});
