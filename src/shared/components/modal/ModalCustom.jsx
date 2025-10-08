import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useEffect } from "react";
import { Icons } from "../../../assets/icons/IconsProvider";
const { IconWarningStroke } = Icons;

export const ModalCustom = ({
  isOpenModal = false,
  setIsOpenModalCreate = () => {},
  actionOnSubmitModal = () => {},
  titleModal = "",
  isWarning = false,
  children,
  resetValuesInputs = () => {},
  setIsWarningDeleteParking,
  handleSubmit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModal = () => {
    onClose();
    setIsOpenModalCreate(false);
    setIsWarningDeleteParking(false);
  };

  const closeModalEmptyValues = () => {
    onClose();
    setIsOpenModalCreate(false);
    resetValuesInputs();
  };

  const onSubmitModal = () => {
    actionOnSubmitModal();
    closeModal();
  };

  const modalOpenClose = () => {
    if (isOpenModal) {
      onOpen();
    } else {
      onClose();
    }
  };

  useEffect(() => {
    modalOpenClose();
  }, [isOpenModal]);

  return (
    <>
      <Modal
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={closeModal}
      >
        <ModalContent className="p-2 bg-white max-w-[500px]">
          {(closeModal) => (
            <>
              {!isWarning && (
                <ModalHeader className="flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <div className="bg-green-1-custom w-2 h-6"></div>
                    <p className="font-sembold text-black-custom">
                      {titleModal}
                    </p>
                  </div>
                </ModalHeader>
              )}

              <ModalBody>
                {isWarning ? (
                  <div className="flex flex-col items-center gap-4 pt-10 p-4">
                    <img className="w-[80px]" src={IconWarningStroke} alt="" />
                    <p className="text-black-custom font-semibold text-lg text-center">
                      ¿Estás seguro de eliminar el parqueadero?
                    </p>
                    <p className="text-black-custom font-light text-base text-center">
                      La información de este parqueadero no podrá recuperarse.
                    </p>
                  </div>
                ) : (
                  children
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={closeModalEmptyValues}
                  className={` ${
                    isWarning
                      ? "bg-black-custom text-white"
                      : "bg-transparent text-black-custom  border border-black-custom "
                  }  rounded-[24px] text-base px-10`}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={handleSubmit(onSubmitModal)}
                  className={` ${
                    !isWarning
                      ? "bg-black-custom text-white"
                      : "bg-transparent text-black-custom  border border-black-custom "
                  }  rounded-[24px] text-base px-10`}
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
