import { Icons } from "../../../assets/icons/IconsProvider";
import { Tooltip } from "@heroui/react";
import { Images } from "../../../assets/images/ImagesProvider";
const { IconEyeStrokeWhite, IconEditStrokeWhite, IconTrashStrokeWhite } = Icons;
const { ImageEmployee } = Images;

export const TableUsers = ({ actionView, actionEdit, actionDelete }) => {
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-left text-gray-500">
        <thead className="text-sm text-[#878787] border-b border-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Correo electrónico
            </th>
            <th
              scope="col"
              className="px-6 py-3 lg:table-cell hidden text-center"
            >
              Teléfono
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Identificación
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200 text-sm">
            <th className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-green-1-custom rounded-2xl grid place-items-center">
                  <img
                    className="w-10"
                    src={ImageEmployee}
                    alt="ImageEmployee"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black-custom font-semibold">
                    Carlos torres
                  </p>
                  <p className="text-[#878787] font-semibold">Empleado</p>
                </div>
              </div>
            </th>
            <td className="px-6 py-4">carlos@gmail.com</td>
            <td className="px-6 py-4 text-center lg:table-cell hidden">
              3122480775
            </td>
            <td className="px-6 py-4 text-center">1107974183</td>
            <td className="text-center">
              <div className="flex gap-3 justify-center">
                <Tooltip
                  content="Ver parqueadero"
                  placement="top"
                  showArrow={true}
                >
                  <button className="w-10 h-10 bg-green-3-custom rounded-2xl grid place-items-center cursor-pointer hover:bg-[#93AB2F] transition-all duration-200 active:scale-[1.2]">
                    <img
                      className="w-5"
                      src={IconEyeStrokeWhite}
                      alt="IconEyeStrokeWhite"
                    />
                  </button>
                </Tooltip>
                <Tooltip
                  content="Editar parqueadero"
                  placement="top"
                  showArrow={true}
                >
                  <button
                    onClick={() => actionEdit()}
                    className="w-10 h-10 bg-blue-1-custom rounded-2xl grid place-items-center cursor-pointer hover:bg-[#3D5BC0] transition-all duration-200 active:scale-[1.2]"
                  >
                    <img
                      className="w-5"
                      src={IconEditStrokeWhite}
                      alt="IconEditStrokeWhite"
                    />
                  </button>
                </Tooltip>
                <Tooltip
                  content="Eliminar parqueadero"
                  placement="top"
                  showArrow={true}
                >
                  <button
                    onClick={() => actionDelete()}
                    className="w-10 h-10 bg-red-1-custom rounded-2xl grid place-items-center cursor-pointer hover:bg-[#C13F3B] transition-all duration-200 active:scale-[1.2]"
                  >
                    <img
                      className="w-5"
                      src={IconTrashStrokeWhite}
                      alt="IconTrashStrokeWhite"
                    />
                  </button>
                </Tooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
