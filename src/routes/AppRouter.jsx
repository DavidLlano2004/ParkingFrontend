import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { paths } from "./paths";
import { Login } from "../auth/pages/Login";
import { PrivateRoute } from "../auth/components/PrivateRoute";
import { lazy, Suspense } from "react";
import { SpinnerLogin } from "../shared/components/spinners/spinnerLogin/SpinnerLogin";
import { useAuthInitializer } from "../shared/hooks/useAuthInitializer";
import { useSelector } from "react-redux";
import { Parkings } from "../parking/pages/admin/Parkings";
import { Users } from "../parking/pages/admin/Users";
import { Settings } from "../parking/pages/Settings";
import { Dashboard } from "../parking/pages/employee/Dashboard";
import { RegisterVehicle } from "../parking/pages/employee/RegisterVehicle";

const delayImport = (importPromise) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importPromise), 1500);
  });

const ParkingLayout = lazy(() =>
  delayImport(import("../parking/layouts/ParkingLayout"))
);
const AuthLayout = lazy(() =>
  delayImport(import("../auth/layouts/AuthLayout"))
);

export const AppRouter = () => {
  const { isLogged, rol } = useSelector((state) => state.auth);

  useAuthInitializer();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.LOGIN} element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route
          path={paths.LAYOUT}
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen flex justify-center items-center bg-bg-template">
                  <SpinnerLogin />
                </div>
              }
            >
              <PrivateRoute isAuthenticated={isLogged} userRole={rol}>
                <ParkingLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          {/* Admin */}
          <Route
            index
            element={
              rol === "Administrativo" ? (
                <PrivateRoute
                  isAuthenticated={isLogged}
                  allowedRoles={["Administrativo"]}
                  userRole={rol}
                >
                  <Parkings />
                </PrivateRoute>
              ) : (
                <PrivateRoute
                  isAuthenticated={isLogged}
                  allowedRoles={["Empleado"]}
                  userRole={rol}
                >
                  <Dashboard />
                </PrivateRoute>
              )
            }
          />
          <Route
            path={paths.USERS}
            element={
              <PrivateRoute
                isAuthenticated={isLogged}
                allowedRoles={["Administrativo"]}
                userRole={rol}
              >
                <Users />
              </PrivateRoute>
            }
          />
          {/* Employee */}
          <Route
            path={paths.REGISTERVEHICLE}
            element={
              <PrivateRoute
                isAuthenticated={isLogged}
                allowedRoles={["Empleado"]}
                userRole={rol}
              >
                <RegisterVehicle />
              </PrivateRoute>
            }
          />
          {/* General */}
          <Route
            path={paths.SETTINGS}
            element={
              <PrivateRoute
                isAuthenticated={isLogged}
                allowedRoles={["Administrativo", "Empleado"]}
                userRole={rol}
              >
                <Settings />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path={paths.UNAUTHORIZED}
          element={
            <div className="flex flex-col items-center justify-center h-screen bg-bg-template text-center px-4">
              <div className="p-8 rounded-2xl bg-neutral-900 shadow-lg border border-neutral-800">
                <h1 className="text-3xl font-semibold text-white mb-3">
                  Acceso restringido
                </h1>
                <p className="text-gray-400 text-sm mb-6">
                  No tienes permiso para ver esta página 🚫
                </p>
                <button
                  onClick={() => window.history.back()}
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all duration-200"
                >
                  Volver atrás
                </button>
              </div>
            </div>
          }
        />

        <Route path="*" element={<Navigate to={paths.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};
