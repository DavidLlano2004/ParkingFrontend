import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAction } from "../actions/auth.actions";
import { singOffCase } from "../../redux/slices/auth.slice";
import { paths } from "../../routes/paths";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutationLogout = useMutation({
    mutationFn: logoutAction,
    onSuccess: async () => {
      try {
        await queryClient.clear();

        dispatch({ type: "RESET_STATE" });

        dispatch(singOffCase());

        navigate(paths.LOGIN, { replace: true });
      } catch (error) {
        console.error("Error limpiando la sesión:", error);
      }
    },
    onError: (error) => {
      console.error("Error al cerrar sesión:", error);
    },
  });

  return { mutationLogout };
};
