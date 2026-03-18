export const login = (token: string) => {
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/admin/login";
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};