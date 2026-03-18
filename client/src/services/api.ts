import axios from "axios";

const Api = axios.create({
  baseURL: "https://menokraft.onrender.com"
});

// ✅ Attach token automatically
Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;