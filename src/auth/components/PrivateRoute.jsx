import { Navigate } from "react-router";
import { paths } from "../../routes/paths";

export const PrivateRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={paths.LOGIN} replace />;
  }

  return children;
};

// import { Navigate } from "react-router";
// import { paths } from "../../routes/paths";

// // Aquí simulo un usuario logueado para el ejemplo
// // En tu app real, esto viene de Redux, Context o un hook personalizado
// const mockUser = {
//   isAuthenticated: true,
//   role: "vigilante", // Ejemplo de rol actual
// };

// export const PrivateRoute = ({
//   isAuthenticated,
//   allowedRoles = [], // <-- nuevos roles permitidos
//   userRole = mockUser.role, // <-- se puede pasar por props o contexto
//   children,
// }) => {
//   if (!isAuthenticated) {
//     return <Navigate to={paths.LOGIN} replace />;
//   }

//   // Si hay roles definidos y el rol actual no está permitido
//   if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
//     return <Navigate to={paths.UNAUTHORIZED || paths.LOGIN} replace />;
//   }

//   return children;
// };
