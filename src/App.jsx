import router from "./router/Router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { AuthProvider } from "./contexts/authContext";
import { RouterProvider } from "react-router-dom";
import { PostItProvider } from "./contexts/postitContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PostItProvider>
      <RouterProvider router={router} />
    </PostItProvider>
  </AuthProvider>
);
