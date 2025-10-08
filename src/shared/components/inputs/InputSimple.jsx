import { Input } from "@heroui/react";
import { Controller } from "react-hook-form";

export const InputSimple = ({
  control,
  nameRegister,
  validations,
  label = "Escriba",
  ...rest
}) => {
  return (
    <Controller
      name={nameRegister}
      control={control}
      rules={validations}
      render={({ field, fieldState }) => (
        <Input
          {...rest}
          label={label}
          variant="bordered"
          value={field.value || ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={field.ref}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
          classNames={{
            base: "w-full",
            inputWrapper:
              "border border-gray-1-custom rounded-[20px] lg:py-2 p-1 px-5 h-[56px]",
            label: "font-semibold",
            input: "text-black-custom text-base",
          }}
        />
      )}
    />
  );
};
