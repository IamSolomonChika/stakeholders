import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function LandingPagesLayout() {
  return (
    <div className=" h-[95%]">
      <Outlet />
      <Navbar />
    </div>
  );
}