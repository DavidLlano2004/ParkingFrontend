import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { paths } from "./paths";
import { AuthLayout } from "../auth/layouts/AuthLayout";
import { Login } from "../auth/pages/Login";
import { sleep } from "../libs/sleep";
import { PrivateRoute } from "../auth/components/PrivateRoute";
import { lazy, Suspense } from "react";
import { DashboardV } from "../parking/pages/DashboardV";
import { SpinnerLogin } from "../shared/components/spinners/spinnerLogin/SpinnerLogin";
import { useAuthInitializer } from "../shared/hooks/useAuthInitializer";
import { useSelector } from "react-redux";

const ParkingLayout = lazy(async () => {
  await sleep(2000);
  return import("../parking/layouts/ParkingLayout");
});

export const AppRouter = () => {
  
  const { isLogged } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <AuthInitializerWrapper isLogged={isLogged} />
    </BrowserRouter>
  );
};

export const AuthInitializerWrapper = ({ isLogged }) => {
  useAuthInitializer();
  return (
    <Routes>
      <Route path={paths.LOGIN} element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route
        path={paths.HOME}
        element={
          <Suspense
            fallback={
              <div className="w-full h-screen flex justify-center items-center bg-bg-template">
                <SpinnerLogin />
              </div>
            }
          >
            <PrivateRoute isAuthenticated={isLogged}>
              <ParkingLayout />
            </PrivateRoute>
          </Suspense>
        }
      >
        <Route index element={<DashboardV />} />
      </Route>

      <Route path="*" element={<Navigate to={paths.LOGIN} />} />
    </Routes>
  );
};
