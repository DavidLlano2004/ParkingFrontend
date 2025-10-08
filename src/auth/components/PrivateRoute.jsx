import { Navigate } from "react-router";
import { paths } from "../../routes/paths";

export const PrivateRoute = ({
  isAuthenticated,
  allowedRoles = [],
  userRole,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={paths.LOGIN} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to={paths.UNAUTHORIZED} replace />;
  }

  return children;
};
