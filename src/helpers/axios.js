import axios from "axios";

const instance = axios.create({
  baseURL: "https://postit-app-l7pm.onrender.com/api",
  withCredentials: true,
});

export default instance;
