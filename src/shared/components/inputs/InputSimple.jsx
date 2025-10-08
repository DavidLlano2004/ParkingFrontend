import { Input } from "@heroui/react";
import { Controller } from "react-hook-form";

export const InputSimple = ({
  control,
  nameRegister,
  validations,
  label = "Escriba",
  endContent,
  heightInput = "h-[56px]",
  type = "text",
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
            inputWrapper: `border border-gray-1-custom rounded-[25px] p-1 px-5 ${heightInput}`,
            label: "font-semibold",
            input: "text-black-custom text-base",
          }}
          type={type}
          endContent={endContent}
        />
      )}
    />
  );
};
