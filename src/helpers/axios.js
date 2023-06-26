import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://post-it-backend-kappa.vercel.app/api",
  withCredentials: true,
});

export default instance;
