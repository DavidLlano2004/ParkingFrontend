import { useEffect } from "react";

import { verifyTokenRequest } from "../../auth/actions/auth.actions.js";
import { useDispatch } from "react-redux";
import { loginCase, singOffCase } from "../../redux/slices/auth.slice.js";
import { useNavigate } from "react-router";
import { paths } from "../../routes/paths.jsx";

export const useAuthInitializer = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest();

        console.log(res);

        if (!res?.data?.response) {
          dispatch(singOffCase());
          return;
        }

        const userData = res?.data?.response;
        dispatch(
          loginCase({
            id: userData?.id,
          })
        );
        // navigate(paths.HOME, { replace: true });
      } catch (error) {
        dispatch(singOffCase());
      }
    }

    checkLogin();
  }, [dispatch]);
};
