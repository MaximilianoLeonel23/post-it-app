import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PostItPage from "../pages/PostItPage";
import PostItFormPage from "../pages/PostItFormPage";
import ProfilePage from "../pages/ProfilePage";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/postits",
        element: <PostItPage />,
      },
      {
        path: "/add-postit",
        element: <PostItFormPage />,
      },
      {
        path: "/postits/:id",
        element: <PostItFormPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
