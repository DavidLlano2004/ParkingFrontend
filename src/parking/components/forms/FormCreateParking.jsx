import { Tooltip } from "@heroui/react";
import { InputSimple } from "../../../shared/components/inputs/InputSimple";
import { SelectSimple } from "../../../shared/components/select/SelectSimple";
import { Icons } from "../../../assets/icons/IconsProvider";
const { IconHelpStroke } = Icons;

const animals = [
  { key: "cat", label: "Gato" },
  { key: "dog", label: "Perro" },
  { key: "lion", label: "León" },
];

export const FormCreateParking = ({ control }) => {
  return (
    <div className="flex flex-col gap-5">
      <InputSimple
        isRequired
        heightInput="h-[45px]"
        control={control}
        nameRegister="name"
        label="Nombre del parqueadero"
        validations={{ required: "El nomre es requerido" }}
      />
      <div className="flex sm:flex-row flex-col gap-5">
        <InputSimple
          isRequired
          heightInput="h-[45px]"
          control={control}
          nameRegister="phone"
          label="Teléfono"
          validations={{ required: "El teléfono es requerido" }}
          type="number"
        />
        <InputSimple
          isRequired
          heightInput="h-[45px]"
          control={control}
          nameRegister="address"
          label="Dirección"
          validations={{ required: "La dirección es requerida" }}
        />
      </div>
      <SelectSimple
        heightSelect="h-[45px]"
        control={control}
        nameRegister="employee_id"
        label="Seleccione el empleado"
        options={animals}
        validations={{ required: "Seleccione un empleado" }}
      />
      <div className=" flex flex-col gap-3">
        <div className="flex justify-end">
          <Tooltip
            content={
              <div className="px-2 py-2">
                <p className="text-justify">
                  Escribe el número de zonas para estacionar <br/> y el número
                  de espacios que tendra cada zona
                </p>
              </div>
            }
            placement="top"
          >
            <img className="w-4" src={IconHelpStroke} alt="" />
          </Tooltip>
        </div>
        <div className="flex sm:flex-row flex-col gap-5">
          <InputSimple
            isRequired
            heightInput="h-[45px]"
            control={control}
            nameRegister="number_zones"
            label="Número de zonas"
            validations={{ required: "El número de zonas es requerido" }}
            type="number"
          />
          <InputSimple
            isRequired
            heightInput="h-[45px]"
            control={control}
            nameRegister="number_spaces"
            label="Número de espacios"
            validations={{ required: "El número de espacios es requerido" }}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
