import { useEffect, useState } from "react";
import { InputSimple } from "../../../shared/components/inputs/InputSimple";
import { useForm } from "react-hook-form";
import { Icons } from "../../../assets/icons/IconsProvider";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/react";
import { TableParkings } from "../../components/tables/TableParkings";
import { motion } from "framer-motion";
import { SkeletonParkings } from "../../components/skeletons/SkeletonParkings";
import { ModalCustom } from "../../../shared/components/modal/ModalCustom";
import { FormCreateParking } from "../../components/forms/FormCreateParking";
const { IconSearchStroke } = Icons;

export const Parkings = () => {
  const defaultValues = {
    address: "",
    email: "",
    employee_id: "",
    name: "",
    phone: "",
  };
  const { control, reset, watch, handleSubmit } = useForm({ defaultValues });
  const [validate, setValidate] = useState(true);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isWarningDeleteParking, setIsWarningDeleteParking] = useState(false);

  console.log(isOpenModalCreate);
  const dataForm = watch();
  console.log(dataForm);

  const onSubmitCreateParking = () => {
    reset();
    addToast({
      title: "",
      description: "Parqueadero creado correctamente",
      color: "success",
    });
  };

  const chooseParkingEdit = () => {
    setIsOpenModalCreate(true);
  };

  const chooseParkingDelete = () => {
    setIsWarningDeleteParking(true);
    setIsOpenModalCreate(true);
  };

  const onSubmitDeleteParking = () => {
    addToast({
      title: "",
      description: "Parqueadero eliminado correctamente",
      color: "success",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidate(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [validate]);

  if (validate) {
    return <SkeletonParkings />;
  }

  return (
    <section className=" bg-white flex-12 rounded-[30px] px-10 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between  flex-wrap">
          <h1 className=" text-[22px] font-semibold text-black-custom">
            Parqueaderos
          </h1>
          <div className="flex justify-between gap-3 lg:mt-0 mt-5 lg:w-auto w-full">
            <div className="lg:w-auto flex-2">
              <InputSimple
                control={control}
                heightInput="h-[40px]"
                nameRegister="email"
                label="Buscar parqueadero..."
                endContent={
                  <div className="h-full flex items-center">
                    <img
                      className="w-5"
                      src={IconSearchStroke}
                      alt="icon_search"
                    />
                  </div>
                }
              />
            </div>
            <div className="lg:flex-1">
              <Button
                spinnerPlacement="start"
                type="submit"
                onPress={() => setIsOpenModalCreate(true)}
                className="bg-black-custom text-white w-full rounded-[25px] h-[40px] text-base px-10"
              >
                Crear parqueadero
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <TableParkings
            actionEdit={chooseParkingEdit}
            actionDelete={chooseParkingDelete}
          />
        </div>
      </motion.div>
      <ModalCustom
        resetValuesInputs={() => reset()}
        actionOnSubmitModal={onSubmitCreateParking}
        handleSubmit={handleSubmit}
        titleModal="Crear parqueaderos"
        setIsOpenModalCreate={setIsOpenModalCreate}
        isOpenModal={isOpenModalCreate}
        isWarning={isWarningDeleteParking}
        setIsWarningDeleteParking={setIsWarningDeleteParking}
      >
        <FormCreateParking control={control} />
      </ModalCustom>
    </section>
  );
};
