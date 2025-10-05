import { Outlet } from "react-router";

export default function ParkingLayout() {
  return (
    <main className="w-full h-screen bg-bg-template">
      <Outlet />
    </main>
  );
}
