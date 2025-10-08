import { Select, SelectItem } from "@heroui/react";
import { Controller } from "react-hook-form";
import React from "react";

export const SelectSimple = ({
  control,
  nameRegister,
  validations,
  label = "Seleccione una opción",
  options = [],
  placeholder = "",
  heightSelect = "h-[56px]",
  ...rest
}) => {
  return (
    <Controller
      name={nameRegister}
      control={control}
      rules={validations}
      render={({ field, fieldState }) => (
        <Select
          isRequired
          {...rest}
          label={label}
          placeholder={placeholder}
          selectedKeys={field.value ? [field.value] : []}
          onSelectionChange={(keys) => {
            const selected = Array.from(keys)[0];
            field.onChange(selected);
          }}
          onBlur={field.onBlur}
          ref={field.ref}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
          variant="bordered"
          classNames={{
            base: "w-full",
            trigger: `border border-gray-1-custom rounded-[25px] px-5`,
            label: "font-semibold",
            value: "text-black-custom text-base",
          }}
        >
          {options.map((opt) => (
            <SelectItem key={opt.key} value={opt.key}>
              {opt.label}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
};
