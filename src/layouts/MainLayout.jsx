import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main className="py-12">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
