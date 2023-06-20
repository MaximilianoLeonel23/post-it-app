// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import PostItPage from "./pages/PostItPage";
// import PostItFormPage from "./pages/PostItFormPage";
// import ProfilePage from "./pages/ProfilePage";
// import Header from "./components/Header";
// import { AuthProvider } from "./contexts/authContext";
import router from "./router/Router";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./styles/style.css";
import { AuthProvider } from "./contexts/authContext";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

// const App = () => {
//   // return (
//   //   <AuthProvider>
//   //     <Router>
//   //       <Header />
//   //       <main className="bg-neutral-50">
//   //         <Routes>
//   //           <Route path="/" element={<HomePage />} />
//   //           <Route path="/login" element={<LoginPage />} />
//   //           <Route path="/register" element={<RegisterPage />} />
//   //           <Route path="/postits" element={<PostItPage />} />
//   //           <Route path="/add-postit" element={<PostItFormPage />} />
//   //           <Route path="/postits/:id" element={<PostItFormPage />} />
//   //           <Route path="/profile" element={<ProfilePage />} />
//   //         </Routes>
//   //       </main>
//   //     </Router>
//   //   </AuthProvider>
//   // );
// };

// export default App;
