import { Outlet } from "react-router";
import { Navbar } from "../Component/Navbar";

export const MainLayout = () => {
  return (
    <div className="bg-yellow-100/50 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
