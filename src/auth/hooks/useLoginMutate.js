import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/auth.actions";
import { useNavigate } from "react-router";
import { paths } from "../../routes/paths";
import { useDispatch } from "react-redux";
import { loginCase } from "../../redux/slices/auth.slice";

export const useLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const mutationLogin = useMutation({
    mutationFn: async (dataForm) => loginAction(dataForm),
    onSuccess: async (data) => {

      console.log(data);
      

      dispatch(
        loginCase({
          id: data?.id,
        })
      );

      navigate(paths.HOME, { replace: true });

    },
  });
  return { mutationLogin };
};
