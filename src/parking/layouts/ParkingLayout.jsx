import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export default function ParkingLayout() {
  return (
    <main className="w-full h-screen bg-bg-template flex flex-row p-3 gap-4 overflow-hidden">
      <Navbar />
      <Outlet />
    </main>
  );
}
