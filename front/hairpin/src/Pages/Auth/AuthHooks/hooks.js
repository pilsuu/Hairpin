export const logoutHandler = async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
