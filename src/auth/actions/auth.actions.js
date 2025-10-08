import { axiosClientApp } from "../../api/parkingApi";
import { sleep } from "../../libs/sleep";

export const loginAction = async (dataForm) => {
  await sleep(2000);

  const { email, password } = dataForm;
  const newData = {
    email: email.toLowerCase(),
    password,
  };
  try {
    const { data } = await axiosClientApp.post(`/login`, newData);
    return data.response;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Error inesperado al actualizar el perfil",
        error,
      }
    );
  }
};

export const verifyTokenRequest = async () => {
  try {
    const response = await axiosClientApp.get("/verify");

    return response;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Error inesperado al recuperar el token",
        error,
      }
    );
  }
};

export const logoutAction = async () => {
  try {
    const response = await axiosClientApp.post("/logout");
    return response;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Error inesperado al recuperar el token",
        error,
      }
    );
  }
};
