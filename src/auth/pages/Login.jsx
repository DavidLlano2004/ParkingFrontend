import { useSelector } from "react-redux";
import { SpinnerLogin } from "../../shared/components/spinners/spinnerLogin/SpinnerLogin";
import { FormLogin } from "../components/forms/FormLogin";

export const Login = () => {
  return (
    <div className=" flex-1 flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-8">
        <h1 className="text-black-custom xl:text-3xl text-2xl font-bold ">Ingresar</h1>
        <p className="text-black-custom xl:text-xl text-lg text-center">
          {" "}
          Ingresa tus credenciales , para acceder a tu cuenta.{" "}
        </p>
        <FormLogin />
      </div>
    </div>
  );
};
