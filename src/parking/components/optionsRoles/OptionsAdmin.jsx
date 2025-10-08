import { NavLink, useLocation } from "react-router";
import { paths } from "../../../routes/paths";
import { Icons } from "../../../assets/icons/IconsProvider";
import { Tooltip } from "@heroui/react";
const { IconParkingFill, IconParkingStroke, IconUserFill, IconUserStroke } =
  Icons;

export const OptionsAdmin = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Tooltip content="Parqueaderos" placement="right" showArrow={true}>
        <NavLink
          end
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-green-1-custom" : "bg-white"
            }  w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-1-custom transition-all duration-200`
          }
          to={paths.LAYOUT}
        >
          <img
            className="lg:w-[22px] w-[20px]"
            src={
              pathname === paths.LAYOUT ? IconParkingFill : IconParkingStroke
            }
            alt=""
          />
        </NavLink>
      </Tooltip>
      <Tooltip content="Usuarios" placement="right" showArrow={true}>
        <NavLink
          end
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-green-1-custom" : "bg-white"
            }  w-12 h-12 rounded-full flex justify-center hover:bg-green-1-custom transition-all duration-200`
          }
          to={paths.USERS}
        >
          <img
            className="lg:w-[22px] w-[20px]"
            src={pathname === paths.USERS ? IconUserFill : IconUserStroke}
            alt=""
          />
        </NavLink>
      </Tooltip>
    </>
  );
};
