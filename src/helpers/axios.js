import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "https://post-it-app.up.railway.app/api",
  withCredentials: true,
});

export default instance;
