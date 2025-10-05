import { Button, Form } from "@heroui/react";
import { InputSimple } from "../../../shared/components/inputs/InputSimple";
import { InputPassword } from "../../../shared/components/inputs/InputPassword";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLoginMutate";

export const FormLogin = () => {
  const { mutationLogin } = useLogin();
  const { control, handleSubmit, setError } = useForm();

  const onSubmitLogin = (dataForm) => {
    mutationLogin.mutate(dataForm);
  };

  if (mutationLogin.error?.message) {
    setError("password", {
      type: "server",
      message: mutationLogin.error?.message,
    });
    setError("email", { type: "server", message: "" });
  }

  return (
    <div className="w-full">
      <Form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <InputSimple
          control={control}
          nameRegister="email"
          label="Correo electrónico"
          validations={{ required: "El correo es obligatorio" }}
        />
        <InputPassword
          control={control}
          nameRegister="password"
          validations={{ required: "La contraseña es obligatoria" }}
          isError={mutationLogin.error?.message}
        />
        <Button
          isLoading={mutationLogin.isPending}
          spinnerPlacement="start"
          type="submit"
          className="bg-black-custom text-white w-full rounded-[60px] h-[56px] text-lg"
        >
          Ingresar
        </Button>
      </Form>
    </div>
  );
};
